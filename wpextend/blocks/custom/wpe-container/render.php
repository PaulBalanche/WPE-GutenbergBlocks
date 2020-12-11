<?php

function custom_wpe_container_render_callback( $attributes, $content ) {

    // Align
    $align_section = ( isset($attributes['align']) ) ? 'align' . $attributes['align'] : '';

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

    //Style
    $style_section = ( isset($attributes['style']) ) ? 'st-' . $attributes['style'] : '';

    return '
    <section class="section ' . $align_section . ' ' . apply_filters('wpextend/container_margin_class_formatted', $marginClassFormatted, $attributes) . ' ' . $style_section . '">
        <div class="section__content ' . apply_filters('wpextend/container_padding_class_formatted', $paddingClassFormatted, $attributes) . '">
            <div class="' . \Wpextend\GutenbergBlock::get_container_class_name() . '">
                <div class="row grid">' . $content . '</div>
            </div>
        </div>
    </section>';
}