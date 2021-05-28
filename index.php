<?php
/**
 * Plugin Name: 		WPE Gutenberg blocks
 * Version: 			1.0.4
 * Author: 				Paul Balanche
 */


add_action( 'wp_ajax_wpe_frontspec', 'wpe_frontspec' );
add_action( 'wp_ajax_nopriv_wpe_frontspec', 'wpe_frontspec' );
function wpe_frontspec() {

    $front_spec = json_decode ( file_get_contents( get_stylesheet_directory() . '/frontspec.json' ), true );

    if ( isset($_GET['data']) ) {

        if ( array_key_exists($_GET['data'], $front_spec) )
            echo json_encode( $front_spec[$_GET['data']] );
        else
            echo null;
    }
    else
        echo json_encode( $front_spec );

    wp_die();
}