<?php

function core_gallery_render_callback( $attributes, $content ) {

    if( isset($attributes['ids']) && is_array($attributes['ids']) ) {

        $ids_images = $attributes['ids'];
        $nb_colums = ( isset($attributes['columns']) ) ? $attributes['columns'] : 1;
        $size_img = ( isset($attributes['sizeSlug']) ) ? $attributes['sizeSlug'] : 'full';

        return'<div class="container">
            <div class="row">' . $content . '</div>
        </div>';
    }
}