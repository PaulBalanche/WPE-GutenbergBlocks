<?php

namespace Wpe_Blocks\Controllers;

use Wpe_Blocks\Services\FrontEnd as FrontEndService;
use Wpe_Blocks\Services\BackEnd as BackEndService;
use Wpe_Blocks\Models\ComponentBlock;

class BackEnd extends ControllerBase {

    private $frontEndService,
            $backEndService;

    public function __construct() {
        parent::__construct();

        $this->frontEndService = new FrontEndService();
        $this->backEndService = new BackEndService();
        
        $this->add_actions();
        $this->add_filters();

        // $this->generate_blocks();
    }



    /**
     * Add Wordpress actions
     * 
     */
    public function add_actions() {

        add_action( 'init', [ $this->backEndService, 'register_component_block' ], 99 );
        add_action( 'init', [ $this->backEndService, 'register_custom_blocks' ], 99 );
    }



    /**
     * Add Wordpress filters
     * 
     */
    public function add_filters() {

        // Merge component attributes with override-spec JSON file
        add_filter( 'Wpe_Blocks\get_component_viewspec', [ $this, 'filter_get_component_viewspec' ], 10, 2 );

        add_filter( 'Wpe_Blocks\attributes_formatting', 'Wpe_Blocks\Helpers\Attributes::formatting', 10, 2 );

        // Filters the allowed block types for all editor types.
        add_filter( 'allowed_block_types_all', [ $this->backEndService, 'allowed_specifics_block_types' ], 10, 2 );
    }



    /**
     * Generate back-end blocks
     * 
     */
    public function generate_blocks() {

        $front_components = $this->frontEndService->get_components();
        if( is_array($front_components) && count($front_components) > 0 ) {
            foreach( $front_components as $component ) {

                // Get viewspec JSON file for a single component returned by frontEndService
                $component_frontspec = $this->frontEndService->get_component_viewspec( $component );

                // If invalid or null component, just bypass it and continue to the next component
                if( ! is_null( $component_frontspec ) && is_array( $component_frontspec ) && isset($component_frontspec['id'], $component_frontspec['path']) ) {

                    // ComponentBlock instanciation && block spec generation
                    $componentBlockInstance = new ComponentBlock();
                    $componentBlockInstance->generate_block_spec( $component_frontspec );
                    $componentBlockInstance->generate_block_metadata();
                }
            }
        }
    }



    /**
     * Filter get_component_viewspec method in order to merge component attributes with override-spec JSON file
     * 
     */
    public function filter_get_component_viewspec( $viewspec_data, $component_dir ) {

        return ( $component_dir == $this->frontEndService->get_components_dir() ) ? $this->backEndService->override_component_viewspec( $viewspec_data ) : $viewspec_data;
    }

}