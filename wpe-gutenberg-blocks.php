<?php
/**
 * Plugin Name: 		WPE Gutenberg blocks
 * Version: 			1.0.6
 * Requires at least: 	5.6
 * Requires PHP:      	7.2
 * Author: 				Paul Balanche
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

error_reporting(E_ALL | E_STRICT);



/**
* Initialize WPE Gutenberg blocks plugin
*
*/
add_action( 'plugins_loaded', '_wpe_gutenberg_blocks_init' );
function _wpe_gutenberg_blocks_init() {

    _check_if_wpextend_parent_plugin_is_activated();
    
}



/**
 * Disable this plugin if WP Extend parent plugin is not activated
 * 
 */
function _check_if_wpextend_parent_plugin_is_activated() {
    
    if ( ! in_array('wpextend/wpextend.php', apply_filters('active_plugins', get_option('active_plugins'))) ) {
        
        require_once( ABSPATH . 'wp-admin/includes/plugin.php' );
        deactivate_plugins( plugin_basename( __FILE__ ) );
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
