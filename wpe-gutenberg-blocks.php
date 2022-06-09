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
define( 'WPE_BLOCKS_PLUGIN_DIR',                        plugin_dir_path( __FILE__ )                                                             );
define( 'WPE_BLOCKS_PLUGIN_URL' ,                       plugins_url('', __FILE__) . '/'                                                         );
define( 'WPE_BLOCKS_TEMPLATE_VIEWS_LOCATION' ,          ( defined('THEME_VIEW_ROOT_LOCATION') ) ? THEME_VIEW_ROOT_LOCATION : 'views/'           );
define( 'WPE_BLOCKS_TEMPLATE_COMPONENTS_SUB_LOCATION',  ( defined('COMPONENTS_RELATIVE_PATH') ) ? COMPONENTS_RELATIVE_PATH : 'components/'      );
define( 'WPE_BLOCKS_CONTAINER_CLASS_NAME',              ( defined('GUTENBERG_CONTAINER_CLASS') ) ? GUTENBERG_CONTAINER_CLASS : 'container'      );



/**
 * Dependencies
 * 
 */
require WPE_BLOCKS_PLUGIN_DIR . 'vendor/autoload.php';



/**
 * Initialize WPE Gutenberg blocks plugin
 *
 */
add_action( 'plugins_loaded', '_wpe_gutenberg_blocks_init' );
function _wpe_gutenberg_blocks_init() {

    Wpe_Blocks\Singleton\Main::getInstance();
}