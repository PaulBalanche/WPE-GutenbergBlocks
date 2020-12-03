<?php

function custom_wpe_component_render_callback( $attributes, $content ) {

    if( ! isset( $attributes['id_component'] ) ) {
        return;
    }
    
    if( file_exists( get_stylesheet_directory() . '/frontspec.json' ) ) {
    
        $frontspec = json_decode( file_get_contents( get_stylesheet_directory() . '/frontspec.json' ), true);
    
        if( is_array($frontspec) && isset($frontspec['components']) && is_array($frontspec['components']) ) {
    
            foreach( $frontspec['components'] as $component ) {

                if( $component['id'] == $attributes['id_component'] ) {

                    unset($attributes['id_component']);

                    if( isset($component['props']) && is_array($component['props']) && count($component['props']) > 0 ) {
                        
                        foreach( $component['props'] as $key_prop => $prop ) {

                            switch( $prop['type'] ) {
                                
                                case 'image':
                                    if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) && isset($attributes[$key_prop]['id']) ) {
                                        $attachment_image_src = wp_get_attachment_image_src($attributes[$key_prop]['id'], 'large');
                                        $attributes[$key_prop]['src'] = $attachment_image_src[0];
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
                            }
                        }
                    }

                    return \Wpextend\Timber::render_view($component['path'], $attributes);
                }
            }
        }
    }
}