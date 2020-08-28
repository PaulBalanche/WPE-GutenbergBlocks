<?php

function custom_wpe_dynamic_section_render_callback( $attributes, $content ) {

    echo '<pre>';print_r($attributes);
    return htmlentities( $content );
}