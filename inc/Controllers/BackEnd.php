<?php

namespace Wpe_Blocks\Controllers;

use Wpe_Blocks\Services\FrontEnd as FrontEndService;
use Wpe_Blocks\Services\BackEnd as BackEndService;

class BackEnd extends ControllerBase {

    private $frontEndService;
    private $backEndService;

    public function __construct() {
        
        $this->frontEndService = new FrontEndService();
        $this->backEndService = new BackEndService();

        parent::__construct();
    }



    /**
     * Generate components spec JSON file used by Gutenberg
     * 
     */
    public function generate_components() {

        // Create blocks dir if missing
        if( ! file_exists( get_stylesheet_directory() . '/wpextend/blocks' ) ) {
            mkdir( get_stylesheet_directory() . '/wpextend/blocks', 0750, true );
        }

        $front_components_dir = get_stylesheet_directory() . '/' . $this->get_config()->get_front_view_root_location() . $this->get_config()->get_front_components_relative_path();
        if( file_exists($front_components_dir) ) {

            $gutenberg_blocks_arguments = [];

            // Scan components dir and loop each components
            $components = scandir( $front_components_dir );
            foreach( $components as $component ) {

                if( ! is_dir($front_components_dir . $component) || $component == '..' || $component == '.' ) {
                    continue;
                }

                $component_spec = $this->frontEndService->get_component_viewspec( $front_components_dir . $component . '/viewspec.json' );

                // If invalid or null component, just bypass it and continue to the next component
                if( ! is_null( $component_spec ) && is_array( $component_spec ) ) {

                    // Create blocks dir if missing
                    if( ! file_exists( get_stylesheet_directory() . '/wpextend/blocks/custom/wpe-component-' . $component_spec['id'] ) ) {
                        mkdir( get_stylesheet_directory() . '/wpextend/blocks/custom/wpe-component-' . $component_spec['id'] , 0750, true );
                    }

                    // Write the components frontspec generated in a JSON file.
                    file_put_contents( get_stylesheet_directory() . '/wpextend/blocks/custom/wpe-component-' . $component_spec['id'] . '/blockspec.json', json_encode($component_spec, JSON_PRETTY_PRINT) );

                    $gutenberg_blocks_arguments[] =  $this->backEndService->get_gutenberg_block_arguments($component_spec);
                }
            }

            file_put_contents( get_stylesheet_directory() . '/wpextend/json/gutenberg_blocks_arguments.json', json_encode( $gutenberg_blocks_arguments, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES ) );
            update_option( 'wpe_blocks_components', $gutenberg_blocks_arguments);
        }

        die;
    }


}