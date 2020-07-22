<?php

function custom_wpe_column_render_callback( $attributes, $content ) {
// pre($attributes);die;

    $className = '';

    // Desktop
    if( isset($attributes['startDesktop'], $attributes['widthDesktop']) ) {
        $className .= ' gridColumnStartDesktop-' . $attributes['startDesktop'];
        $gridColumnEndDesktop = intval($attributes['startDesktop']) + intval($attributes['widthDesktop']);
        $className .= ' gridColumnEndDesktop-' . $gridColumnEndDesktop;
    }

    // Tablet
    if( isset($attributes['startTablet'], $attributes['widthTablet']) ) {
        $className .= ' gridColumnStartTablet-' . $attributes['startTablet'];
        $gridColumnEndTablet = intval($attributes['startTablet']) + intval($attributes['widthTablet']);
        $className .= ' gridColumnEndTablet-' . $gridColumnEndTablet;
    }

    // Mobile
    if( isset($attributes['startMobile'], $attributes['widthMobile']) ) {
        $className .= ' gridColumnStartMobile-' . $attributes['startMobile'];
        $gridColumnEndMobile = intval($attributes['startMobile']) + intval($attributes['widthMobile']);
        $className .= ' gridColumnEndMobile-' . $gridColumnEndMobile;
    }
    

    return '<div class="' . $className . '">' . $content . '</div>';
}