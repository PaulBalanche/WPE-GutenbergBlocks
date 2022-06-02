<?php

namespace Wpe_Blocks\Singleton;

use Wpe_Blocks\Filters\Spacing as SpacingFilter;
use Wpe_Blocks\Controllers\BackEnd as BackEndController;
use Wpe_Blocks\Models\ComponentBlock;

class Main {

    private static $_instance;
    private $componentBlockInstances = [];

    function __construct() {

        new SpacingFilter();
        new BackEndController();
    }



    /**
     * Utility method to retrieve the main instance of the class.
     * The instance will be created if it does not exist yet.
     * 
     */
    public static function getInstance() {

        if( is_null(self::$_instance) ) {
            self::$_instance = new Main();
        }
        return self::$_instance;
    }

    
    
    /**
     * Get ComponentBlock instance object if exists, or create it
     * 
     */
    public function get_component_block_instance( $blockId ) {

        $blockId = ComponentBlock::format_id( $blockId );

        if( ! isset( $this->componentBlockInstances[ $blockId ] ) ) {
            new ComponentBlock( $blockId );
        }

        return $this->componentBlockInstances[ $blockId ];
    }



    /**
     * Add ComponentBlock instance object
     * 
     */
    public function add_component_block_instance( $instance ) {
        $this->componentBlockInstances[ $instance->get_ID() ] = $instance;
    }

}