<?php

function custom_wpe_container_render_callback( $attributes, $content ) {
// pre($attributes);
    // Align
    $align_section = ( isset($attributes['align']) ) ? 'align' . $attributes['align'] : '';
    
    // Padding
    $paddingTopSection = ( isset($attributes['paddingTop']) ) ? 'pt-' . $attributes['paddingTop'] : '';
    $paddingBottomSection = ( isset($attributes['paddingBottom']) ) ? 'pb-' . $attributes['paddingBottom'] : '';

    // Margin
    $marginTopSection = ( isset($attributes['marginTop']) ) ? 'mt-' . $attributes['marginTop'] : '';
    $marginBottomSection = ( isset($attributes['marginBottom']) ) ? 'mb-' . $attributes['marginBottom'] : '';

    return '
    <section class="section ' . $align_section . ' ' . $paddingTopSection . ' ' . $paddingBottomSection . ' ' . $marginTopSection . ' ' . $marginBottomSection . '">
        <div class="section__content">
            <div class="container">
                <div class="row">' . $content . '</div>
            </div>
        </div>
    </section>';
}