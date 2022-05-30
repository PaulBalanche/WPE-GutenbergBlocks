<?php

namespace Wpe_Blocks\Controllers;

use Wpe_Blocks\Services\FrontEnd as FrontEndService;
use Wpe_Blocks\Services\BackEnd as BackEndService;

class BackEnd extends ControllerBase {

    private $frontEndService,
            $backEndService;
        
    private $overrideSpecJsonFilename = 'override.json';

            

    public function __construct() {
        
        $this->frontEndService = new FrontEndService();
        $this->backEndService = new BackEndService();
        
        $this->add_filters();

        parent::__construct();
    }



    /**
     * Add Wordpress filters
     * 
     */
    public function add_filters() {

        // Merge component attributes with override-spec JSON file
        add_filter( 'Wpe_Blocks\get_component_viewspec', [ $this, 'override_component_viewspec' ], 10, 2 );
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

                    // Generate block spec
                    $this->backEndService->generate_block_spec( $component_frontspec );
                }
            }
        }

        die;
    }



    /**
     * Merge component attributes with override-spec JSON file
     * 
     */
    public function override_component_viewspec( $viewspec_data, $component_dir ) {

        if( $component_dir == $this->frontEndService->get_components_dir() ) {
            
            $override_spec_file = $this->backEndService->get_block_dir( $viewspec_data['id'] ) . '/' . $this->overrideSpecJsonFilename;
            if( file_exists($override_spec_file) ) {
                    
                $override_spec = json_decode( file_get_contents($override_spec_file), true );
                if( is_array($override_spec) ) {
                    $viewspec_data = array_replace_recursive( $viewspec_data, $override_spec );
                }
            }
        }

        return $viewspec_data;
    }



}