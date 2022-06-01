<?php

namespace Wpe_Blocks\Models;

use Wpe_Blocks\Services\BackEnd as BackEndService;
use Wpe_Blocks\Shared\Config;

class ComponentBlockMaster extends ModelBase {

    private $backEndService,
            $blockLocation = 'component-block-master';

    public function __construct() {
        parent::__construct();

        $this->backEndService = new BackEndService();

        $this->register_script();
        $this->register_style();
    }



    /**
     * Register component editor script
     * 
     */
    public function register_script() {

        $handle = $this->get_config()->get('blocksNamespace') . '/' . $this->get_config()->get('componentBlockName') . '-editor-script';
        $asset_file = include( WPE_BLOCKS_PLUGIN_DIR . $this->blockLocation . '/build/index.asset.php' );

        wp_register_script(
            $handle,
            WPE_BLOCKS_PLUGIN_URL . $this->blockLocation . '/build/index.js',
            $asset_file['dependencies'],
            $asset_file['version']
        );

        // Localize script
        $data_localized = [
            'current_user_can_edit_posts' => ( current_user_can('edit_posts') ) ? '1' : '0',
            'components' => $this->backEndService->get_all_blocks_spec(),
            'styles' => $this->get_config()->get_frontspec_json_file('styles')
        ];
        wp_localize_script( $handle, 'global_localized', $data_localized );
    }



    /**
     * Register component editor style
     * 
     */
    public function register_style() {
        
        $handle = $this->get_config()->get('blocksNamespace') . '/' . $this->get_config()->get('componentBlockName') . '-editor-style';
        
        wp_register_style(
            $handle,
            WPE_BLOCKS_PLUGIN_URL . $this->blockLocation . '/assets/style/editor.min.css',
            array( 'wp-edit-blocks' ),
            filemtime( WPE_BLOCKS_PLUGIN_DIR . $this->blockLocation . '/assets/style/editor.min.css' )
        );
    }



    /**
     * Registers all components block type
     * 
     */
    public function register_components() {

        $args = [
            'editor_script' => $this->get_config()->get('blocksNamespace') . '/' . $this->get_config()->get('componentBlockName') . '-editor-script',
            'editor_style' => $this->get_config()->get('blocksNamespace') . '/' . $this->get_config()->get('componentBlockName') . '-editor-style',
            'render_callback' => '\Wpe_Blocks\Models\ComponentBlockMaster::render'
        ];

        $blocks_metadata = $this->backEndService->get_all_blocks_metadata();
        if( is_array($blocks_metadata) && count($blocks_metadata) > 0 ) {
            foreach( $blocks_metadata as $metadata_json_file ) {

                // Registers a block type. The recommended way is to register a block type using the metadata stored in the block.json file.
                register_block_type( $metadata_json_file, $args );
            }
        }
    }



    /**
     * Static render method
     * 
     */
    public static function render( $attributes, $content ) {

        if( ! isset( $attributes['id_component'] ) )
            return;
        
        $componentBlockInstance = new ComponentBlock( $attributes['id_component'] );
        $componentBlockInstance->set_attributes($attributes);
        $componentBlockInstance->set_content($content);
        return $componentBlockInstance->render();
    }

}