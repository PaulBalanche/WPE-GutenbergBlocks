<?php

function custom_wpe_component_render_callback( $attributes, $content ) {

    if( ! isset( $attributes['id'] ) ) {
        return;
    }
    
    if( file_exists( get_stylesheet_directory() . '/frontspec.json' ) ) {
    
        $frontspec = json_decode( file_get_contents( get_stylesheet_directory() . '/frontspec.json' ), true);
    
        if( is_array($frontspec) && isset($frontspec['components']) && is_array($frontspec['components']) ) {
    
            foreach( $frontspec['components'] as $component ) {

                if( $component['id'] == $attributes['id'] ) {

                    unset($attributes['id']);
                    return \Wpextend\Timber::render_view($component['path'], $attributes);
                }
            }
        }
    }
}