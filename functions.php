<?php

function my_custom_format_script_register() {
    wp_register_script(
        'my-custom-format-js',
        get_stylesheet_directory_uri() . '/myguten.js',
        array( 'wp-rich-text' )
    );
}
add_action( 'init', 'my_custom_format_script_register' );
 
function my_custom_format_enqueue_assets_editor() {
    wp_enqueue_script( 'my-custom-format-js' );
}
add_action( 'enqueue_block_editor_assets', 'my_custom_format_enqueue_assets_editor' );