<?php

function custom_wpe_container_render_callback( $attributes, $content_wrapped ) {

    preg_match( '/<div(.*)class="wp-block-custom-wpe-container">(.*)<\/div>/s', $content_wrapped, $content );
   
    $anchor_wrapped = $content[1];
    $content = $content[2];
    $anchor = false;

    if( strpos($anchor_wrapped, 'id="') !== false ) {

        preg_match( '/id="(.*)"/', $anchor_wrapped, $match_anchor );
        if( is_array($match_anchor) && count($match_anchor) == 2 ) {
            $anchor = $match_anchor[1];
        }
    }

    // Define data
    $data = [
        'content' => $content,
        'align' => ( isset($attributes['align']) ) ? 'align' . $attributes['align'] : '',
        // 'margin' => ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map( function ($v, $k) { if( strpos($k, 'm') == 0 ) { return $k . '-' . $v; } }, $attributes['margin'], array_keys($attributes['margin']) )) : '',
        // 'padding' => ( isset($attributes['padding']) && is_array($attributes['padding']) ) ? implode(' ', array_map( function ($v, $k) { if( strpos($k, 'p') == 0 ) { return $k . '-' . $v; } }, $attributes['padding'], array_keys($attributes['padding']) )) : '',
        'style' => ( isset($attributes['style']) ) ? 'st-' . $attributes['style'] : '',
        'container_class_name' => \Wpextend\GutenbergBlock::get_container_class_name(),
        'background' => '',
        'anchor' => $anchor
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