<?php

namespace Wpe_Blocks\Singleton;

use Wpe_Blocks\Filters\Spacing as SpacingFilter;
use Wpe_Blocks\Controllers\BackEnd as BackEndController;
use Wpe_Blocks\Models\ComponentBlock;
use Wpe_Blocks\Singleton\Config;

class Main {

    private static $_instance;
    private $componentBlockInstances = [],
            $config;

    function __construct() {

        new SpacingFilter();
        new BackEndController();

        $this->config = Config::getInstance();
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

    public function get_config() {
        return $this->config;
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