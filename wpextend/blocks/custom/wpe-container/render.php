<?php

function custom_wpe_container_render_callback( $attributes, $content ) {

    // Define data
    $data = [
        'content' => $content,
        'align' => ( isset($attributes['align']) ) ? 'align' . $attributes['align'] : '',
        'margin' => ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map( function ($v, $k) { if( strpos($k, 'm') == 0 ) { return $k . '-' . $v; } }, $attributes['margin'], array_keys($attributes['margin']) )) : '',
        'padding' => ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map( function ($v, $k) { if( strpos($k, 'p') == 0 ) { return $k . '-' . $v; } }, $attributes['margin'], array_keys($attributes['margin']) )) : '',
        'style' => ( isset($attributes['style']) ) ? 'st-' . $attributes['style'] : '',
        'container_class_name' => \Wpextend\GutenbergBlock::get_container_class_name(),
        'background' => ''
    ];

    // Background
    if( isset($attributes['backgroundFile'], $attributes['backgroundType']) && $attributes['backgroundType'] == 'image' ) {
        $background_image_src = wp_get_attachment_image_src($attributes['backgroundFile'], 'full');
        $data['background'] = $background_image_src[0];
    }

    // Render
    return \Wpextend\GutenbergBlock::render(
        apply_filters('wpextend/wpe_container_view_path', 'wpe-container'),
        apply_filters('wpextend/wpe_container_data', $data, $attributes)
    );
}