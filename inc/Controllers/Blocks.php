<?php

namespace Wpe_Blocks\Controllers;

class Blocks extends ControllerBase {

    public function __construct() {

        $this->add_actions();

        parent::__construct();
    }



    /**
     * Add Wordpress actions
     * 
     */
    public function add_actions() {

        add_action( 'init', array($this, 'register_dynamic_component_block'), 99 );
    }



    /**
     * Register dynamic component block
     * 
     */
    public function register_dynamic_component_block() {



        register_block_type( $dynamic_single_block['name'], array_merge($args_register, $dynamic_single_block['args_register']) );





        foreach( $this->theme_blocks as $namespace_blocks => $blocks ) {
            if( $namespace_blocks != 'core' && is_array($blocks) ) {
                foreach( $blocks as $block ) {

                    if( ! is_dir( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block ) )
                        continue;
                    
                    $args_register = [];

                    // editor_script
                    if( file_exists( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/build/index.js' ) && file_exists( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/build/index.asset.php' ) ) {
                        $asset_file = include( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/build/index.asset.php' );

                        wp_register_script(
                            $namespace_blocks . '-' . $block,
                            self::get_blocks_path_url() . '/' . $namespace_blocks . '/' . $block . '/build/index.js',
                            $asset_file['dependencies'],
                            $asset_file['version']
                        );
                        $args_register['editor_script'] = $namespace_blocks . '-' . $block;

                        // Localize script
                        if( file_exists( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/localize_script.php' ) ) {
                            
                            $data_localized = include( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/localize_script.php' );
                            if( is_array($data_localized) ) {
                                wp_localize_script( $namespace_blocks . '-' . $block, 'global_localized', $data_localized );
                            }
                        }
                    }

                    // render_callback
                    if( file_exists( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/render.php' ) ) {

                        include( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/render.php' );
                        if( function_exists( $namespace_blocks . '_' . str_replace('-', '_', $block) . '_render_callback' ) )
                            $args_register['render_callback'] = $namespace_blocks . '_' . str_replace('-', '_', $block) . '_render_callback';
                    }

                    // editor_style
                    if( file_exists( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/assets/style/editor.min.css' ) ) {

                        wp_register_style(
                            $namespace_blocks . '-' . $block . '-editor-style',
                            self::get_blocks_path_url() . '/' . $namespace_blocks . '/' . $block . '/assets/style/editor.min.css',
                            array( 'wp-edit-blocks' ),
                            filemtime( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/assets/style/editor.min.css' )
                        );

                        $args_register['editor_style'] = $namespace_blocks . '-' . $block . '-editor-style';
                    }

                    // Dynamic blocks treatment
                    $dynamic_blocks = [];
                    if( file_exists( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/dynamic_block.php' ) ) {
                        include( self::get_blocks_path() . '/' . $namespace_blocks . '/' . $block . '/dynamic_block.php' );
                    }
                    else {
                        // No dynamic...single block
                        $dynamic_blocks[] = [
                            'name' => $namespace_blocks . '/' . $block,
                            'args_register' => []
                        ];
                    }

                    // Finally register block(s)
                    foreach( $dynamic_blocks as $dynamic_single_block ) {
                        
                        // $registry = \WP_Block_Type_Registry::get_instance();
                        // if ( $registry->is_registered( $dynamic_single_block['name'] ) ) {
                        //     $registry->unregister( $dynamic_single_block['name'] );
                        // }

                        register_block_type( $dynamic_single_block['name'], array_merge($args_register, $dynamic_single_block['args_register']) );
                    }
                }
            }
        }
    }



}