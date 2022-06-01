<?php

namespace Wpe_Blocks\Services;

use Wpe_Blocks\Models\ComponentBlock;
use Wpe_Blocks\Singleton\Timber;

class BackEnd extends ServiceBase {

    function __construct() {
        parent::__construct();
    }



    /**
     * Get all the back-end blocks spec
     * 
     */
    public function get_all_blocks_spec() {

        $blocks_spec = [];

        $blocks_dir = get_stylesheet_directory() . '/' . $this->get_config()->getBack('blocksLocation') . $this->get_config()->get('blocksNamespace');
        if( file_exists($blocks_dir) ) {

            // Scan blocks dir and loop each block
            $blocks_scan = scandir( $blocks_dir );
            foreach( $blocks_scan as $block ) {

                if( is_dir( $blocks_dir . '/' . $block ) && $block != '..' && $block != '.' ) {

                    // ComponentBlock instanciation && get block spec
                    $componentBlockInstance = new ComponentBlock( $block );
                    $block_spec = $componentBlockInstance->get_block_spec();
                    if( $block_spec && is_array($block_spec) ) {
                        $blocks_spec[] = $block_spec;
                    }
                }
            }
        }

        return $blocks_spec;
    }



    /**
     * Get all the back-end block metadata json files
     * 
     */
    public function get_all_blocks_metadata() {

        $blocks_metadata = [];

        $blocks_dir = get_stylesheet_directory() . '/' . $this->get_config()->getBack('blocksLocation') . $this->get_config()->get('blocksNamespace');
        if( file_exists($blocks_dir) ) {

            // Scan blocks dir and loop each block
            $blocks_scan = scandir( $blocks_dir );
            foreach( $blocks_scan as $block ) {

                if( is_dir( $blocks_dir . '/' . $block ) && $block != '..' && $block != '.' ) {

                    // ComponentBlock instanciation && get block spec
                    $componentBlockInstance = new ComponentBlock( $block );
                    $block_metadata_json_file = $componentBlockInstance->get_block_metadata_json_file();
                    if( $block_metadata_json_file ) {
                        $blocks_metadata[] = $block_metadata_json_file;
                    }
                }
            }
        }

        return $blocks_metadata;
    }



    /**
     * Merge component attributes with override-spec JSON file
     * 
     */
    public function override_component_viewspec( $viewspec_data ) {

        // ComponentBlock instanciation && get ovveride data
        $componentBlockInstance = new ComponentBlock( $viewspec_data['id'] );
        $override_spec = $componentBlockInstance->get_override_viewspec();

        return ( $override_spec ) ? array_replace_recursive( $viewspec_data, $override_spec ) : $viewspec_data;
    }

}