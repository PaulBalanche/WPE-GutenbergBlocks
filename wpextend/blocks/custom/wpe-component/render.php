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
                                    $attachment_image_src = wp_get_attachment_image_src($attributes[$key_prop]['id'], 'large');
                                    $attributes[$key_prop]['src'] = $attachment_image_src[0];
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