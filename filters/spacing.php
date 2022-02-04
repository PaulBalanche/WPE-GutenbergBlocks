<?php

$spacing = \Wpextend\GutenbergBlock::get_frontspec_json_file( 'spacing' );
switch( $spacing ) {

    case 'bootstrap':
        add_filter( 'wpextend/wpe_gutenberg_blocks_spacing_formatting', 'wpe_gutenberg_blocks_bootstrap_spacing_formatting', 10, 2 );
        break;

    default:
        add_filter( 'wpextend/wpe_gutenberg_blocks_spacing_formatting', 'wpe_gutenberg_blocks_default_spacing_formatting', 10, 1 );
}



/**
 * Bootstrap spacing formatting
 * 
 */
function wpe_gutenberg_blocks_bootstrap_spacing_formatting( $spacing, $type = 'padding' ) {

    $spacing_formatted = '';

    if( $spacing && is_array($spacing) ) {
        foreach( $spacing as $breakpoint_key => $breakpoint_value ) {
            if( is_array($breakpoint_value) ) {
                foreach( $breakpoint_value as $key => $val ) {
                    $spacing_formatted .= ( $type == 'margin' ) ? ' m' : ' p';
                    $spacing_formatted .= str_replace( [ 'top', 'right', 'bottom', 'left', 'all' ], [ 't', 'e', 'b', 's', '' ], $key );
                    $spacing_formatted .= '-';
                    $spacing_formatted .= str_replace( [ 'mobile', 'tablet', 'desktop' ], [ '', 'sm-', 'lg-' ], $breakpoint_key );
                    $spacing_formatted .= $val;
                }
            }
        }
    }

    return trim( $spacing_formatted );
}



/**
 * Default spacing formatting
 * 
 */
function wpe_gutenberg_blocks_default_spacing_formatting( $spacing, $type = 'padding' ) {

    $spacing_formatted = '';

    if( $spacing && is_array($spacing) ) {
        foreach( $spacing as $breakpoint_key => $breakpoint_value ) {
            if( is_array($breakpoint_value) ) {
                foreach( $breakpoint_value as $key => $val ) {
                    $spacing_formatted .= $breakpoint_key;
                    $spacing_formatted .= '-';
                    $spacing_formatted .= ( ( $type == 'margin' ) ? 'm' : 'p' );
                    $spacing_formatted .= '-' . $key . '-' . $val . ' ';
                }
            }
        }
    }

    return trim( $spacing_formatted );
}