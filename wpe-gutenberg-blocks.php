<?php
/**
 * Plugin Name: 		WPE Gutenberg blocks
 * Version: 			1.5.9
 * Requires at least: 	5.6
 * Requires PHP:      	7.2
 * Author: 				Paul Balanche
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

error_reporting(E_ALL | E_STRICT);

/**
 * Define variables
 *
 */
define( 'WPE_BLOCKS_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'WPE_BLOCKS_PLUGIN_URL', plugins_url('', __FILE__) . '/' );

/**
 * Dependencies
 * 
 */
require WPE_BLOCKS_PLUGIN_DIR . 'vendor/autoload.php';
require( dirname( __FILE__ ) . '/filters/spacing.php' );



/**
 * Initialize WPE Gutenberg blocks plugin
 *
 */
add_action( 'plugins_loaded', '_wpe_gutenberg_blocks_init' );
function _wpe_gutenberg_blocks_init() {

    // Disable this plugin if WP Extend parent plugin is not activated
    if ( ! in_array('wpextend/wpextend.php', apply_filters('active_plugins', get_option('active_plugins'))) ) {
        
        require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
        deactivate_plugins( plugin_basename( __FILE__ ) );
    }
    else {
        new Wpe_Blocks\Controllers\Main();
    }
}



/**
 * Hook the plugin activation and avoid if WP Extend parent plugin is not activated
 * 
 */
register_activation_hook( __FILE__, '_wpe_gutenberg_blocks_activate' );
function _wpe_gutenberg_blocks_activate() {

    if ( ! in_array('wpextend/wpextend.php', apply_filters('active_plugins', get_option('active_plugins'))) ) {
        wp_die('Sorry, but this plugin requires WP Extend Plugin to be installed and active. <br><a href="' . admin_url( 'plugins.php' ) . '">Return to Plugins</a>');
    }
}