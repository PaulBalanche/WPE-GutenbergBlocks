<?php

namespace Wpe_Blocks\Controllers;

use Wpe_Blocks\Filters\Spacing as SpacingFilter;

class Main extends ControllerBase { 

    private $backEndController;
    private $spacingFilter;

    function __construct() {

        $this->spacingFilter = new SpacingFilter();
        $this->backEndController = new BackEnd();
        $this->backEndController->generate_blocks();

        $this->add_filters();
        $this->add_actions();
    }



    /**
     * Add Wordpress filters
     * 
     */
    public function add_filters() {

        add_filter( 'wpextend/wpe_gutenberg_blocks_spacing_formatting', [ $this->spacingFilter, 'wpe_gutenberg_blocks_spacing_formatting'], 10, 2 );
    }



    /**
     * Add Wordpress actions
     * 
     */
    public function add_actions() {

        add_action( 'init', [ $this->backEndController, 'register_component_block' ], 99 );
    }

}