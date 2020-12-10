<?php

function custom_wpe_container_render_callback( $attributes, $content ) {

    // Align
    $align_section = ( isset($attributes['align']) ) ? 'align' . $attributes['align'] : '';

    // Format margin to className

    $marginClassFormatted = ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map(
        function ($v, $k) {
            if( strpos($k, 'm') == 0 ) {
                switch($v) {
                    case 0:
                        $v = 'null';
                        break;
                    case 1:
                        $v = 'smaller';
                        break;
                    case 2:
                        $v = 'small';
                        break;
                    case 3:
                        $v = 'default';
                        break;
                    case 4:
                        $v = 'big';
                        break;
                    case 5:
                        $v = 'bigger';
                        break;
                }
                return implode('-', str_split($k)) . '-' . $v;
            }
            
        },
        $attributes['margin'],
        array_keys($attributes['margin'])
    )) : '';

    // Format padding to className
    $paddingClassFormatted = ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map(
        function ($v, $k) {
            if( strpos($k, 'p') == 0 ) {
                switch($v) {
                    case 0:
                        $v = 'null';
                        break;
                    case 1:
                        $v = 'smaller';
                        break;
                    case 2:
                        $v = 'small';
                        break;
                    case 3:
                        $v = 'default';
                        break;
                    case 4:
                        $v = 'big';
                        break;
                    case 5:
                        $v = 'bigger';
                        break;
                }
                return implode('-', str_split($k)) . '-' . $v;
            }
            
        },
        $attributes['margin'],
        array_keys($attributes['margin'])
    )) : '';

    //Style
    $style_section = ( isset($attributes['style']) ) ? 'st-' . $attributes['style'] : '';

    return '
    <section class="section ' . $align_section . ' ' . $marginClassFormatted . ' ' . $style_section . '">
        <div class="section__content ' . $paddingClassFormatted . '">
            <div class="' . \Wpextend\GutenbergBlock::get_container_class_name() . '">
                <div class="row grid">' . $content . '</div>
            </div>
        </div>
    </section>';
}