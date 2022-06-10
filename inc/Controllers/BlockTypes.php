<?php

namespace Wpe_Blocks\Controllers;

class BlockTypes extends ControllerBase {

    public function __construct() {
        parent::__construct();

        $this->add_filters();
    }



    /**
     * Add Wordpress filters
     * 
     */
    public function add_filters() {

        add_filter( 'Wpe_Blocks\attributes_formatting', 'Wpe_Blocks\Helpers\Attributes::formatting', 10, 2 );
    }

}