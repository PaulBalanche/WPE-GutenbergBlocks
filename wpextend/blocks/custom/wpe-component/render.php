<?php

function custom_wpe_component_render_callback( $attributes, $content ) {

    return print_r($attributes, true);
}