<?php

function custom_wpe_grid_render_callback( $attributes, $content ) {

   // Format margin to className
   $marginClassFormatted = ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map(
        function ($v, $k) {
            if( strpos($k, 'm') == 0 ) {
                return $k . '-' . $v;
            }
            
        },
        $attributes['margin'],
        array_keys($attributes['margin'])
    )) : '';

    // Format padding to className
    $paddingClassFormatted = ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map(
        function ($v, $k) {
            if( strpos($k, 'p') == 0 ) {
                return $k . '-' . $v;
            }
            
        },
        $attributes['margin'],
        array_keys($attributes['margin'])
    )) : '';


    return '<div class="row grid">' . $content . '</div>';
}