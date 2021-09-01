<?php

function custom_wpe_component_render_callback( $attributes, $content ) {

    if( ! isset( $attributes['id_component'] ) ) {
        return;
    }
    

    $frontspec_components = Wpextend\GutenbergBlock::get_frontspec_components();
    if( is_array($frontspec_components) ) {
        
        foreach( $frontspec_components as $component ) {

            if( $component['id'] == $attributes['id_component'] ) {

                unset($attributes['id_component']);

                $attributes = custom_wpe_component_render_callback_recursive_treatment($component, $attributes);

                // Format margin to className
                $attributes['marginClassFormatted'] = ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map(
                    function ($v, $k) {
                        return $k . '-' . $v;
                    },
                    $attributes['margin'],
                    array_keys($attributes['margin'])
                )) : '';

                $attributes = apply_filters('wpextend/wpe_component_attributes', $attributes, $component['id']);
                return Wpextend\GutenbergBlock::render($component['path'], $attributes);
            }
        }
    }
}



function custom_wpe_component_render_callback_recursive_treatment($component, $attributes) {

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
                                $current_image['src'] = $attachment_image_src[0];
                                $current_image['url'] = $attachment_image_src[0];
        
                                if( isset($prop['root_prop']) && isset( $current_image[ $prop['root_prop'] ] ) )
                                    $images[$key_image] = $current_image[ $prop['root_prop'] ];
                                else
                                    $images[$key_image] = (object) $current_image;
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
                                    $current_image['src'] = $attachment_image_src[0];
                                    $current_image['url'] = $attachment_image_src[0];
            
                                    if( isset($prop['root_prop']) && isset( $current_image[ $prop['root_prop'] ] ) )
                                        $images[$key_image] = $current_image[ $prop['root_prop'] ];
                                    else
                                        $images[$key_image] = (object) $current_image;
                                }
                            }
    
                            $attributes[$key_prop] = $images;
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
                                $attributes[$key_prop][$key] = (object) custom_wpe_component_render_callback_recursive_treatment($prop, $val);
                            }
                        }
                        else
                            $attributes[$key_prop] = (object) custom_wpe_component_render_callback_recursive_treatment($prop, $attributes[$key_prop]);
                    }

                    break;
            }
        }
    }

    return $attributes;
}