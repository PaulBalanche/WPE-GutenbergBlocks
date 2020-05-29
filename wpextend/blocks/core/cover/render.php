<?php

function core_cover_render_callback( $attributes, $content ) {

    // print_r($attributes);
    // echo htmlentities($content);die;

    return '<div class="container">' . $content . '</div>';
}