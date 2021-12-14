<?php
/**
 * WPE-Component render function
 * 
 */
function custom_wpe_component_render_callback( $attributes, $content_wrapped ) {

    if( ! isset( $attributes['id_component'] ) )
        return;
    
    $frontspec_components = Wpextend\GutenbergBlock::get_components_frontspec();
    if( is_array($frontspec_components) ) {
        
        foreach( $frontspec_components as $component ) {

            if( $component['id'] == $attributes['id_component'] ) {

                unset($attributes['id_component']);

                /**
                 * Anchor request
                 *
                 */
                $anchor = false;
                if( preg_match( '/<div(.*)class="wp-block-custom-wpe-component-[^"]*"([^>]*)>(.*)<\/div>/s', $content_wrapped, $content ) === 1 ) {
                    
                    $class_prev = $content[1];
                    $class_next = $content[2];
                    $content = $content[3];

                    if( strpos($class_prev, 'id="') !== false ) {

                        preg_match( '/id="(.*)"/', $class_prev, $match_anchor );
                        if( is_array($match_anchor) && count($match_anchor) == 2 ) {
                            $anchor = $match_anchor[1];
                        }
                    }
                    elseif( strpos($class_next, 'id="') !== false ) {

                        preg_match( '/id="(.*)"/', $class_next, $match_anchor );
                        if( is_array($match_anchor) && count($match_anchor) == 2 ) {
                            $anchor = $match_anchor[1];
                        }
                    }
                    if( $anchor )
                        $attributes['anchor'] = $anchor;
                }
                else
                    $content = $content_wrapped;
                    
                /* End anchor request */

                $attributes = custom_wpe_component_attributes_formatting($component, $attributes);

                // Format margin to className
                $attributes['marginClassFormatted'] = ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map(
                    function ($v, $k) {
                        return $k . '-' . $v;
                    },
                    $attributes['margin'],
                    array_keys($attributes['margin'])
                )) : '';

                $attributes = apply_filters('wpextend/render_wpe_component_attributes', $attributes);
                $attributes = apply_filters('wpextend/render_wpe_component_attributes_' . $component['id'], $attributes);

                // Check if required field are filled
                if( isset($component['props']) && is_array($component['props']) && count($component['props']) > 0 ) {
                        
                    foreach( $component['props'] as $key_prop => $prop ) {
                        if( isset($prop['required']) && $prop['required'] && ( ! isset($attributes[$key_prop]) || ! $attributes[$key_prop] || empty($attributes[$key_prop]) ) ){

                            if( isset($_SERVER['REQUEST_URI']) && strpos( $_SERVER['REQUEST_URI'], 'wp-json/wp/v2/block-renderer' ) !== false )
                                return '<div class="alert">Some required fields are missing : <b>' . $key_prop . '</b></div>';
                            else
                                return;
                        }
                    }
                }

                return Wpextend\GutenbergBlock::render($component['path'], $attributes);
            }
        }
    }
}



/**
 * Loop on each attribute and format it if necessary
 * 
 */
function custom_wpe_component_attributes_formatting($component, $attributes) {

    if( isset($component['props']) && is_array($component['props']) && count($component['props']) > 0 ) {
        foreach( $component['props'] as $key_prop => $prop ) {

            switch( $prop['type'] ) {
                
                case 'boolean':
                    if( ! isset($attributes[$key_prop]) )
                        $attributes[$key_prop] = false;

                    break;

                case 'image':

                    if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {

                        $images = ( $prop['repeatable'] ) ? $attributes[$key_prop] : [ $attributes[$key_prop] ];
                        foreach( $images as $key_image => $current_image ) {

                            if( is_array($current_image) && isset($current_image['id']) ) {
                                $attachment_image_src = wp_get_attachment_image_src($current_image['id'], 'large');
                                if( is_array($attachment_image_src) ) {

                                    $current_image['src'] = $attachment_image_src[0];
                                    $current_image['url'] = $attachment_image_src[0];
                                    $current_image['alt'] = trim( strip_tags( get_post_meta( $current_image['id'], '_wp_attachment_image_alt', true ) ) );

                                    unset($current_image['id']);
                                    unset($current_image['preview']);
            
                                    if( isset($prop['root_prop']) && isset( $current_image[ $prop['root_prop'] ] ) )
                                        $images[$key_image] = $current_image[ $prop['root_prop'] ];
                                    else
                                        $images[$key_image] = (object) $current_image;
                                }
                            }
                        }

                        $attributes[$key_prop] = ( $prop['repeatable'] ) ? $images : $images[0];
                    }
                    break;

                case 'gallery':

                        if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {
    
                            $images = $attributes[$key_prop];
                            foreach( $images as $key_image => $current_image ) {
    
                                if( is_array($current_image) && isset($current_image['id']) ) {
                                    $attachment_image_src = wp_get_attachment_image_src($current_image['id'], 'large');
                                    if( is_array($attachment_image_src) ) {

                                        $current_image['src'] = $attachment_image_src[0];
                                        $current_image['url'] = $attachment_image_src[0];
                
                                        if( isset($prop['root_prop']) && isset( $current_image[ $prop['root_prop'] ] ) )
                                            $images[$key_image] = $current_image[ $prop['root_prop'] ];
                                        else
                                            $images[$key_image] = (object) $current_image;
                                    }
                                }
                            }
    
                            $attributes[$key_prop] = $images;
                        }
                        break;
                
                case 'video':
                    
                    if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {

                        $files = ( $prop['repeatable'] ) ? $attributes[$key_prop] : [ $attributes[$key_prop] ];
                        foreach( $files as $key_file => $current_file ) {

                            if( is_array($current_file) && isset($current_file['type']) ) {

                                switch( $current_file['type'] ) {

                                    case 'file':

                                        if( isset($current_file['file']) && is_array($current_file['file']) && isset($current_file['file']['id']) ) {

                                            $video_url = wp_get_attachment_url($current_file['file']['id']);
                                            $current_file['src'] = $video_url;
                                        }
                                        break;

                                    case 'embed':

                                        if( isset($current_file['embed']) && is_array($current_file['embed']) && isset($current_file['embed']['url']) ) {

                                            $current_file['url'] = $current_file['embed']['url'];
                                        }
                                        break;
                                }
                            }

                            if( isset($prop['root_prop']) && isset( $current_file[ $prop['root_prop'] ] ) )
                                $files[$key_file] = $current_file[ $prop['root_prop'] ];
                            else
                                $files[$key_file] = (object) $current_file;
                        }

                        $attributes[$key_prop] = ( $prop['repeatable'] ) ? $files : $files[0];
                    }
                    break;

                case 'file':

                    if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {

                        $files = ( $prop['repeatable'] ) ? $attributes[$key_prop] : [ $attributes[$key_prop] ];
                        foreach( $files as $key_file => $current_file ) {

                            if( is_array($current_file) && isset($current_file['id']) ) {

                                $attachment_url = wp_get_attachment_url($current_file['id']);
                                $current_file['src'] = $attachment_url;
                                $current_file['url'] = $attachment_url;

                                if( isset($prop['root_prop']) && isset( $current_file[ $prop['root_prop'] ] ) )
                                    $files[$key_file] = $current_file[ $prop['root_prop'] ];
                                else
                                    $files[$key_file] = (object) $current_file;
                            }
                        }

                        $attributes[$key_prop] = ( $prop['repeatable'] ) ? $files : $files[0];
                    }
                    break;

                case 'relation':

                    if( isset($attributes[$key_prop]) ) {
                        if( isset($prop['repeatable']) && $prop['repeatable'] && is_array($attributes[$key_prop]) && count($attributes[$key_prop]) > 0 ) {
                            $attributes[$key_prop] = get_posts([
                                'post_type' => $prop['entity'],
                                'post__in' => $attributes[$key_prop],
                                'orderby' => 'post__in'
                            ]);
                        }
                        elseif( ( ! isset($prop['repeatable']) || ! $prop['repeatable'] ) && is_numeric($attributes[$key_prop]) ) {
                            $attributes[$key_prop] = get_post($attributes[$key_prop]);
                        }

                        $attributes[$key_prop] = apply_filters('wpextend/pre_render_component_relation', $attributes[$key_prop], $component['id'], $key_prop);
                    }
                    break;

                case 'object':
                    if( isset($attributes[$key_prop]) ) {
                        if( isset($prop['repeatable']) && $prop['repeatable'] ) {
                            foreach( $attributes[$key_prop] as $key => $val ) {
                                $attributes[$key_prop][$key] = custom_wpe_component_attributes_formatting($prop, $val);
                            }
                        }
                        else
                            $attributes[$key_prop] = custom_wpe_component_attributes_formatting($prop, $attributes[$key_prop]);
                    }

                    break;

                case 'link':
                    
                    if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {

                        $attributes[$key_prop] = [
                            'url' => ( isset($attributes[$key_prop]['url']) ) ? $attributes[$key_prop]['url'] : '',
                            'text' => ( isset($attributes[$key_prop]['text']) ) ? $attributes[$key_prop]['text'] : '',
                            'target' => ( isset($attributes[$key_prop]['opensInNewTab']) && $attributes[$key_prop]['opensInNewTab'] == '1' ) ? true : false
                        ];
                    }

                    break;

                case 'date':

                    if( isset($attributes[$key_prop]) ) {

                        $date = DateTime::createFromFormat('Y-m-d\TH:i:s', $attributes[$key_prop], wp_timezone() );
                        if( $date ) {
                            $attributes[$key_prop] = $date->format('U');
                        }
                    }

                    break;
            }
        }
    }

    return $attributes;
}