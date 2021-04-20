<?php

if( ! function_exists( 'core_button_render_callback' ) ) {

    function core_button_render_callback( $attributes, $content ) {
        
        preg_match( '/^<div class="wp-block-button[^"]*">(.*)<\/div>$/ms', $content, $matches );
        if( count($matches) == 2 ) {
            return $matches[1];
        }
    }

}