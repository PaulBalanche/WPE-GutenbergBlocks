<?php

namespace Wpe_Blocks\Controllers;

class Theme extends ControllerBase {

    public function __construct() {
        parent::__construct();

        $this->add_actions();
        $this->add_filters();
    }



    /**
     * Add Wordpress actions
     * 
     */
    public function add_actions() {

        // Registers navigation menu locations for a theme.
        add_action( 'init', [ $this, 'register_menu_locations' ] );

        // Enqueue theme styles and scripts
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_theme_scripts_and_styles' ] );

        // Enqueue theme assets in Gutenberg block editor
        add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_block_editor_assets' ] );
    }



    /**
     * Add Wordpress filters
     * 
     */
    public function add_filters() {

        // Retrieves all menu items of a navigation menu.
        add_filter( 'Wpe_Blocks\get_nav_menu_items', [ $this, 'get_nav_menu_items' ], 10, 2 );
    }



    /**
     * Registers navigation menu locations for a theme.
     * 
     */
    public function register_menu_locations() {

        $menu_locations = $this->get_config()->get_spec('menu_locations');
        if( ! is_null($menu_locations) ) {

            register_nav_menus( $menu_locations );
        }
    }



    /**
     * Retrieves all menu items of a navigation menu.
     * 
     */
    public function get_nav_menu_items( $nav_menu_items, $menu_location ) {

        $nav_menu_locations = get_nav_menu_locations();
		if ( $nav_menu_locations && isset( $nav_menu_locations[ $menu_location ] ) ) {

			$menu_items = wp_get_nav_menu_items( $nav_menu_locations[ $menu_location ] );
			if( $menu_items && is_array($menu_items) && count($menu_items) > 0 ) {

                $nav_menu_items = [];

				foreach( $menu_items as $item ) {
                    $nav_menu_items[] = [
                        'title' => $item->title,
                        'url' => $item->url,
                    ];
				}
			}
		}

        return $nav_menu_items;
    }



    /**
     * Enqueue theme styles and scripts
     * 
     */
    public function enqueue_theme_scripts_and_styles() {

        $enqueued = $this->get_config()->get_spec('enqueued');
        if( ! is_null($enqueued) && is_array($enqueued) && isset($enqueued['theme']) && is_array($enqueued['theme']) ) {
            
            // CSS
            if( isset($enqueued['theme']['css']) && is_array($enqueued['theme']['css']) ) {

                foreach( $enqueued['theme']['css'] as $key => $css ) {

                    if( isset($css['src']) && ! empty( $css['src'] ) ) {

                        $src = ( strpos($css['src'], 'http') === 0 || strpos($css['src'], '/') === 0 ) ? $css['src'] : get_stylesheet_directory_uri() . '/' . $css['src'];

                        $handle = ( isset($css['handle']) && !empty( $css['handle'] ) ) ? $css['handle'] : 'theme-' . $key;
                        $deps = ( isset($css['deps']) && is_array( $css['deps'] ) ) ? $css['deps'] : [];
                        $ver = ( isset($css['ver']) && ! empty( $css['ver'] ) ) ? $css['ver'] : false;
                        $media = ( isset($css['media']) && ! empty( $css['media'] ) ) ? $css['media'] : 'all';

                        wp_enqueue_style( $handle, $src, $deps, $ver, $media );
                    }
                }
            }

            // JS
            if( isset($enqueued['theme']['js']) && is_array($enqueued['theme']['js']) ) {

                foreach( $enqueued['theme']['js'] as $key => $js ) {

                    if( isset($js['src']) && ! empty( $js['src'] ) ) {

                        $src = ( strpos($js['src'], 'http') === 0 || strpos($js['src'], '/') === 0 ) ? $js['src'] : get_stylesheet_directory_uri() . '/' . $js['src'];
                        
                        $handle = ( isset($js['handle']) && !empty( $js['handle'] ) ) ? $js['handle'] : 'theme-' . $key;
                        $deps = ( isset($js['deps']) && is_array( $js['deps'] ) ) ? $js['deps'] : [];
                        $ver = ( isset($js['ver']) && ! empty( $js['ver'] ) ) ? $js['ver'] : false;
                        $in_footer = ( isset($js['media']) ) ? ( $js['media'] ) : false;

                        wp_enqueue_script( $handle, $src, $deps, $ver, $in_footer );
                    }
                }
            }
        }
    }

    

    /**
     * Enqueue theme assets in Gutenberg block editor
     * 
     */
    public function enqueue_block_editor_assets() {

        $enqueued = $this->get_config()->get_spec('enqueued');
        if( ! is_null($enqueued) && is_array($enqueued) && isset($enqueued['editor']) && is_array($enqueued['editor']) ) {

            // CSS
            if( isset($enqueued['editor']['css']) && is_array($enqueued['editor']['css']) ) {

                foreach( $enqueued['editor']['css'] as $key => $css ) {

                    if( isset($css['src']) && ! empty( $css['src'] ) ) {

                        $src = ( strpos($css['src'], 'http') === 0 || strpos($css['src'], '/') === 0 ) ? $css['src'] : get_stylesheet_directory_uri() . '/' . $css['src'];

                        $handle = ( isset($css['handle']) && !empty( $css['handle'] ) ) ? $css['handle'] : 'editor-' . $key;
                        $deps = ( isset($css['deps']) && is_array( $css['deps'] ) ) ? $css['deps'] : [];
                        $ver = ( isset($css['ver']) && ! empty( $css['ver'] ) ) ? $css['ver'] : false;
                        $media = ( isset($css['media']) && ! empty( $css['media'] ) ) ? $css['media'] : 'all';

                        wp_enqueue_style( $handle, $src, array_merge( $deps, [ 'wp-edit-blocks' ] ), $ver, $media );
                    }
                }
            }

            // JS
            if( isset($enqueued['editor']['css']) && is_array($enqueued['editor']['css']) ) {

                foreach( $enqueued['editor']['js'] as $key => $js ) {

                    if( isset($js['src']) && ! empty( $js['src'] ) ) {

                        $src = ( strpos($js['src'], 'http') === 0 || strpos($js['src'], '/') === 0 ) ? $js['src'] : get_stylesheet_directory_uri() . '/' . $js['src'];

                        $handle = ( isset($js['handle']) && !empty( $js['handle'] ) ) ? $js['handle'] : 'editor-' . $key;
                        $deps = ( isset($js['deps']) && is_array( $js['deps'] ) ) ? $js['deps'] : [];
                        $ver = ( isset($js['ver']) && ! empty( $js['ver'] ) ) ? $js['ver'] : false;
                        $in_footer = ( isset($js['media']) ) ? ( $js['media'] ) : false;

                        wp_enqueue_script( $handle, $src, array_merge( $deps, [ 'wp-edit-blocks' ] ), $ver, $in_footer );
                    }
                }
            }
        }
    }

}