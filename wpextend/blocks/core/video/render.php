<?php

function core_video_render_callback( $attributes, $content ) {

    preg_match( '/^<figure[^>]*">(.*)<\/figure>$/ms', $content, $matches );
    if( count($matches) == 2 ) {

        return '<div class="container">
            <div class="row">' . $matches[1] . '</div>
        </div>';
    }
}