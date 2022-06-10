<?php

namespace Wpe_Blocks\Services;

use Wpe_Blocks\Models\ComponentBlockMaster;
use Wpe_Blocks\Models\CustomBlock;
use Wpe_Blocks\Singleton\Main;

class BackEnd extends ServiceBase {

    private $blocks_spec = null;

    function __construct() {
        parent::__construct();
    }



    /**
     * Register dynamic component block
     * 
     */
    public function register_component_block() {

        $componentBlockMasterInstance = new ComponentBlockMaster();
        $componentBlockMasterInstance->register_components();
    }



    /**
     * Register custom blocks
     * 
     */
    public function register_custom_blocks() {

        foreach( $this->get_custom_blocks() as $custom_block ) {

            $customBlockInstance = new CustomBlock( $custom_block );
            $customBlockInstance->register();
        }
    }



    /**
     * Managing block categories
     * 
     */
    function filter_block_categories( $block_categories, $editor_context ) {

        if ( ! empty( $editor_context->post ) ) {

            // Add custom blocks categories
            $block_categories[] = [
                'slug'  => 'wpe-layout',
                'title' => 'Layout',
                'icon'  => null
            ];

            // Add component blocks categories
            $new_block_categories = [];
            foreach( $this->get_all_blocks_spec() as $block_spec ) {
                if( isset($block_spec['category']) && is_array($block_spec['category']) && isset($block_spec['category']['slug'], $block_spec['category']['title']) ) {

                    if( ! isset( $new_block_categories[ $block_spec['category']['slug'] ]) ) {
                        $new_block_categories[ $block_spec['category']['slug'] ] = [
                            'slug'  => $block_spec['category']['slug'],
                            'title' => $block_spec['category']['title'],
                            'icon'  => null
                        ];
                    }
                }
            }

            $block_categories = array_merge( $block_categories, array_values($new_block_categories) );
        }

        return $block_categories;
    }



    /**
     * Get all the back-end blocks spec
     * 
     */
    public function get_all_blocks_spec() {

        if( is_null( $this->blocks_spec ) ) {

            $this->blocks_spec = [];

            $blocks_dir = get_stylesheet_directory() . '/' . $this->get_config()->get('componentBlocksLocation') . $this->get_config()->get('blocksNamespace');
            if( file_exists($blocks_dir) ) {

                // Scan blocks dir and loop each block
                $blocks_scan = scandir( $blocks_dir );
                foreach( $blocks_scan as $block ) {

                    if( is_dir( $blocks_dir . '/' . $block ) && $block != '..' && $block != '.' ) {

                        // ComponentBlock instanciation && get block spec
                        $componentBlockInstance = Main::getInstance()->get_component_block_instance( $block );
                        $block_spec = $componentBlockInstance->get_block_spec();
                        if( $block_spec && is_array($block_spec) ) {
                            $this->blocks_spec[] = $block_spec;
                        }
                    }
                }
            }
        }

        return $this->blocks_spec;
    }



    /**
     * Get all the back-end block metadata json files
     * 
     */
    public function get_all_blocks_metadata() {

        $blocks_metadata = [];

        $blocks_dir = get_stylesheet_directory() . '/' . $this->get_config()->get('componentBlocksLocation') . $this->get_config()->get('blocksNamespace');
        if( file_exists($blocks_dir) ) {

            // Scan blocks dir and loop each block
            $blocks_scan = scandir( $blocks_dir );
            foreach( $blocks_scan as $block ) {

                if( is_dir( $blocks_dir . '/' . $block ) && $block != '..' && $block != '.' ) {

                    // ComponentBlock instanciation && get block spec
                    $componentBlockInstance = Main::getInstance()->get_component_block_instance( $block );
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
        $componentBlockInstance = Main::getInstance()->get_component_block_instance( $viewspec_data['id'] );
        $override_spec = $componentBlockInstance->get_override_viewspec();

        return ( $override_spec ) ? array_replace_recursive( $viewspec_data, $override_spec ) : $viewspec_data;
    }



    /**
     * Get custom blocks defined in module
     * 
     */
    public function get_custom_blocks() {

        $custom_blocks = [];

        $custom_blocks_dir = WPE_BLOCKS_PLUGIN_DIR . $this->get_config()->get('customPluginBlocksLocation');
        if( file_exists($custom_blocks_dir) ) {

            // Scan blocks dir and loop each block
            $blocks_scan = scandir( $custom_blocks_dir );
            foreach( $blocks_scan as $block ) {

                if( is_dir( $custom_blocks_dir . '/' . $block ) && $block != '..' && $block != '.' ) {

                    $custom_blocks[] = $block;
                }
            }
        }

        return $custom_blocks;
    }



    /**
     * Filters the allowed block types for all editor types.
     * 
     */
    public function allowed_specifics_block_types( $allowed_block_types, $post ) {

        $allowed_block_types_theme = $this->get_config()->get_spec('allowed_block_types');
        if( ! is_null($allowed_block_types_theme) ) {

            // Add all custom/wpe-component registered
            if( is_array($allowed_block_types_theme) && in_array( $this->get_config()->get('blocksNamespace') . '/' . $this->get_config()->get('componentBlockPrefixName'), $allowed_block_types_theme ) ) {
                $allowed_block_types_theme = array_merge( $allowed_block_types_theme, Main::getInstance()->get_registered_blocks() );
            }

            $allowed_block_types = $allowed_block_types_theme;
        }

        return $allowed_block_types;
    }

}