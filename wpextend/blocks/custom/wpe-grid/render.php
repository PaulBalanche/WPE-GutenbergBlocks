<?php

function custom_wpe_grid_render_callback( $attributes, $content ) {

    // Define data
    $data = [
        'content' => $content,
        'margin' => ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map( function ($v, $k) { if( strpos($k, 'm') == 0 ) { return $k . '-' . $v; } }, $attributes['margin'], array_keys($attributes['margin']) )) : '',
        'padding' => ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map( function ($v, $k) { if( strpos($k, 'p') == 0 ) { return $k . '-' . $v; } }, $attributes['margin'], array_keys($attributes['margin']) )) : ''
    ];

    // Render
    return \Wpextend\GutenbergBlock::render(
        apply_filters('wpextend/wpe_grid_view_path', 'wpe-grid'),
        apply_filters('wpextend/wpe_grid_data', $data, $attributes)
    );
}