<?php

namespace Wpe_Blocks\Singleton;

use Wpe_Blocks\Filters\Spacing as SpacingFilter;
use Wpe_Blocks\Filters\Blocks as BlocksFilter;
use Wpe_Blocks\Controllers\BlockTypes as BlockTypesController;
use Wpe_Blocks\Controllers\LayoutBlocks as LayoutBlocksController;
use Wpe_Blocks\Controllers\ComponentBlocks as ComponentBlocksController;
use Wpe_Blocks\Services\CliCommand;
use Wpe_Blocks\Models\ComponentBlock;

class Main {

    private static $_instance;
    private $componentBlockInstances = [],
            $blocksRegistered = [],
            $config;

    function __construct() {

        $this->config = Config::getInstance();
        
        // Filters
        new SpacingFilter();
        new BlocksFilter();

        // Controllers
        new BlockTypesController();
        new LayoutBlocksController();
        new ComponentBlocksController();

        // WP-CLI
        if ( defined( 'WP_CLI' ) && \WP_CLI ) {
            new CliCommand();
        }
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



    /**
     * Save registered blocks
     * 
     */
    public function add_block_registered( $blockId ) {
        $this->blocksRegistered[] = $blockId;
    }



    /**
     * Get registered blocks
     * 
     */
    public function get_registered_blocks() {
        return $this->blocksRegistered;
    }

}