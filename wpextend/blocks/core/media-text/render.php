<?php

function core_media_text_render_callback( $attributes, $content ) {

    echo htmlentities($content);
    echo '<pre>';print_r($attributes);die;


    preg_match( '/^<figure[^>]*">(.*)<\/figure>$/ms', $content, $matches );
    if( count($matches) == 2 ) {

        return '<div class="container">
            <div class="row">' . $matches[1] . '</div>
        </div>';
    }
}