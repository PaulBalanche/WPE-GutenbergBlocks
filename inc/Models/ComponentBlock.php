<?php

namespace Wpe_Blocks\Models;

use Wpe_Blocks\Services\BackEnd as BackEndService;

class ComponentBlock {

    private $backEndService;

    public function __construct() {
        
        $this->backEndService = new BackEndService();
    }




    public function get_editor_script() {

        if(
            file_exists( WPE_BLOCKS_PLUGIN_DIR . 'blocks/custom/wpe-component/build/index.js' ) &&
            file_exists( WPE_BLOCKS_PLUGIN_DIR . 'blocks/custom/wpe-component/build/index.asset.php' )
            ) {

            $asset_file = include( WPE_BLOCKS_PLUGIN_DIR . 'blocks/custom/wpe-component/build/index.asset.php' );

            wp_register_script(
                'custom/wpe-component',
                WPE_BLOCKS_PLUGIN_URL . 'blocks/custom/wpe-component/build/index.js',
                $asset_file['dependencies'],
                $asset_file['version']
            );

            // Localize script
            if( file_exists( WPE_BLOCKS_PLUGIN_DIR . 'blocks/custom/wpe-component/localize_script.php' ) ) {
                
                $data_localized = include( WPE_BLOCKS_PLUGIN_DIR . 'blocks/custom/wpe-component/localize_script.php' );
                if( is_array($data_localized) ) {
                    wp_localize_script( 'custom/wpe-component', 'global_localized', $data_localized );
                }
            }
        }

        return 'custom/wpe-component';
    }


    public function get_editor_style() {

        if( file_exists( WPE_BLOCKS_PLUGIN_DIR . 'blocks/custom/wpe-component/assets/style/editor.min.css' ) ) {

            wp_register_style(
                'custom/wpe-component-editor-style',
                WPE_BLOCKS_PLUGIN_URL . 'blocks/custom/wpe-component/assets/style/editor.min.css',
                array( 'wp-edit-blocks' ),
                filemtime( WPE_BLOCKS_PLUGIN_DIR . 'blocks/custom/wpe-component/assets/style/editor.min.css' )
            );
        }

        return 'custom/wpe-component-editor-style';
    }




    public function register() {

        $args = [
            'editor_script' => $this->get_editor_script(),
            'editor_style' => $this->get_editor_style(),
            'render_callback' => '\Wpe_Blocks\Models\ComponentBlock::render'
        ];

        $blocks = $this->backEndService->get_blocks();
        if( is_array($blocks) && count($blocks) > 0 ) {
            foreach( $blocks as $block ) {

                $this->backEndService->register_block($block, $args);
            }
        }
    }




    /**
     * WPE-Component render function
     * 
     */
    public static function render( $attributes, $content_wrapped ) {

        if( ! isset( $attributes['id_component'] ) )
            return;
        
        $frontspec_components = \Wpextend\GutenbergBlock::get_components_frontspec();
        if( is_array($frontspec_components) ) {
            
            foreach( $frontspec_components as $component ) {

                if( $component['id'] == $attributes['id_component'] ) {

                    unset($attributes['id_component']);

                    //Anchor request
                    $anchor = false;
                    if( preg_match( '/<div(.*)class="wp-block-custom-wpe-component-[^"]*"([^>]*)>(.*)<\/div>/s', $content_wrapped, $content ) === 1 ) {
                        
                        $class_prev = $content[1];
                        $class_next = $content[2];
                        $content = $content[3];

                        if( strpos($class_prev, 'id="') !== false ) {

                            preg_match( '/id="(.*)"/', $class_prev, $match_anchor );
                            if( is_array($match_anchor) && count($match_anchor) == 2 ) {
                                $anchor = $match_anchor[1];
                            }
                        }
                        elseif( strpos($class_next, 'id="') !== false ) {

                            preg_match( '/id="(.*)"/', $class_next, $match_anchor );
                            if( is_array($match_anchor) && count($match_anchor) == 2 ) {
                                $anchor = $match_anchor[1];
                            }
                        }
                        if( $anchor )
                            $attributes['anchor'] = $anchor;
                    }
                    else
                        $content = $content_wrapped;

                    // Loop on each attribute and format it if necessary
                    $attributes = self::attributes_formatting($component, $attributes);

                    // Filters spacing
                    $attributes['margin'] = apply_filters( 'wpextend/wpe_gutenberg_blocks_spacing_formatting', ( isset($attributes['margin']) ) ? $attributes['margin'] : '', 'margin' );
                    $attributes['padding'] = apply_filters( 'wpextend/wpe_gutenberg_blocks_spacing_formatting', ( isset($attributes['padding']) ) ? $attributes['padding'] : '', 'padding' );

                    // Filters component attributes (all and specific component)
                    $attributes = apply_filters('wpextend/render_wpe_component_attributes', $attributes);
                    $attributes = apply_filters('wpextend/render_wpe_component_attributes_' . $component['id'], $attributes);

                    // Start rendering
                    if( apply_filters( 'wpextend/display_wpe_component_' . $component['id'], true, $attributes ) ) {

                        // Check if required field are filled
                        if( isset($component['props']) && is_array($component['props']) && count($component['props']) > 0 ) {
                                
                            foreach( $component['props'] as $key_prop => $prop ) {
                                if( isset($prop['required']) && $prop['required'] && ( ! isset($attributes[$key_prop]) || ! $attributes[$key_prop] || empty($attributes[$key_prop]) ) ){

                                    if( isset($_SERVER['REQUEST_URI']) && strpos( $_SERVER['REQUEST_URI'], 'wp-json/wp/v2/block-renderer' ) !== false ) {
                                        return '<div class="alert">Some required fields are missing : <b>' . $key_prop . '</b></div>';
                                    }
                                    else {
                                        return;
                                    }
                                }
                            }
                        }

                        // Render
                        $render_component = \Wpextend\GutenbergBlock::render($component['path'], $attributes);
                        return apply_filters( 'wpextend/render_wpe_component_' . $component['id'], $render_component );
                    }
                    else if( isset($attributes['admin_error_message']) && isset($_SERVER['REQUEST_URI']) && strpos( $_SERVER['REQUEST_URI'], 'wp-json/wp/v2/block-renderer' ) !== false ) {
                        return '<div class="alert">' . $attributes['admin_error_message'] . '</div>';
                    }
                    else {
                        return;
                    }
                }
            }
        }
    }



    /**
     * Loop on each attribute and format it if necessary
     * 
     */
    public static function attributes_formatting($component, $attributes) {

        if( isset($component['props']) && is_array($component['props']) && count($component['props']) > 0 ) {
            foreach( $component['props'] as $key_prop => $prop ) {

                switch( $prop['type'] ) {
                    
                    case 'boolean':
                        if( ! isset($attributes[$key_prop]) )
                            $attributes[$key_prop] = false;

                        break;

                    case 'image':

                        if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {

                            $images = ( $prop['repeatable'] ) ? $attributes[$key_prop] : [ $attributes[$key_prop] ];
                            foreach( $images as $key_image => $current_image ) {

                                if( is_array($current_image) ) {

                                    foreach( $current_image as $responsive_key => $responsive_image ) {

                                        if( is_array($responsive_image) && isset($responsive_image['id']) ) {

                                            $image_size = ( isset($prop['image']) && is_array($prop['image']) && isset($prop['image']['image_size_identifier']) && is_array($prop['image']['image_size_identifier']) && isset($prop['image']['image_size_identifier'][$responsive_key]) ) ? $prop['image']['image_size_identifier'][$responsive_key] : 'large';
                                            $attachment_image_src = wp_get_attachment_image_src($responsive_image['id'], $image_size);
                                            if( is_array($attachment_image_src) ) {

                                                $responsive_image['src'] = $attachment_image_src[0];
                                                $responsive_image['url'] = $attachment_image_src[0];
                                                $responsive_image['alt'] = trim( strip_tags( get_post_meta( $responsive_image['id'], '_wp_attachment_image_alt', true ) ) );

                                                unset($responsive_image['id']);
                                                unset($responsive_image['preview']);
                                            }
                                        }
                                        else
                                            $responsive_image = null;

                                        if( ! is_null($responsive_image) ) {
                                            if( isset($prop['root_prop']) && isset( $responsive_image[ $prop['root_prop'] ] ) )
                                                $images[$key_image][$responsive_key] = $responsive_image[ $prop['root_prop'] ];
                                            else
                                                $images[$key_image][$responsive_key] = (object) $responsive_image;
                                        }
                                        else
                                            unset( $images[$key_image][$responsive_key] );
                                    }

                                    // If default only, define it as root
                                    if( count($images[$key_image]) == 1 && isset($images[$key_image]['default']) ) {
                                        $images[$key_image] = $images[$key_image]['default'];
                                    }
                                }
                            }

                            $attributes[$key_prop] = ( $prop['repeatable'] ) ? $images : $images[0];
                        }
                        break;

                    case 'gallery':

                            if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {
        
                                $images = $attributes[$key_prop];
                                foreach( $images as $key_image => $current_image ) {
        
                                    if( is_array($current_image) && isset($current_image['id']) ) {
                                        $attachment_image_src = wp_get_attachment_image_src($current_image['id'], 'large');
                                        if( is_array($attachment_image_src) ) {

                                            $current_image['src'] = $attachment_image_src[0];
                                            $current_image['url'] = $attachment_image_src[0];
                                            $current_image['alt'] = trim( strip_tags( get_post_meta( $current_image['id'], '_wp_attachment_image_alt', true ) ) );
                    
                                            if( isset($prop['root_prop']) && isset( $current_image[ $prop['root_prop'] ] ) )
                                                $images[$key_image] = $current_image[ $prop['root_prop'] ];
                                            else
                                                $images[$key_image] = (object) $current_image;
                                        }
                                    }
                                }
        
                                $attributes[$key_prop] = $images;
                            }
                            break;
                    
                    case 'video':
                        
                        if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {

                            $files = ( $prop['repeatable'] ) ? $attributes[$key_prop] : [ $attributes[$key_prop] ];
                            foreach( $files as $key_file => $current_file ) {

                                if( is_array($current_file) ) {

                                    foreach( $current_file as $responsive_key => $responsive_file ) {

                                        if( is_array($responsive_file) && isset($responsive_file['type']) ) {

                                            switch( $responsive_file['type'] ) {
            
                                                case 'file':
            
                                                    if( isset($responsive_file['file']) && is_array($responsive_file['file']) && isset($responsive_file['file']['id']) ) {
            
                                                        $video_url = wp_get_attachment_url($responsive_file['file']['id']);
                                                        $responsive_file['src'] = $video_url;
                                                    }
                                                    else
                                                        $responsive_file = null;

                                                    break;
            
                                                case 'embed':
            
                                                    if( isset($responsive_file['embed']) && is_array($responsive_file['embed']) && isset($responsive_file['embed']['url']) ) {
            
                                                        $responsive_file['url'] = $responsive_file['embed']['url'];
                                                    }
                                                    else
                                                        $responsive_file = null;

                                                    break;
                                            }
                                        }
                                        else
                                            $responsive_file = null;
                                        
                                        if( ! is_null($responsive_file) ) {
                                            if( isset($prop['root_prop']) && isset( $responsive_file[ $prop['root_prop'] ] ) )
                                                $files[$key_file][$responsive_key] = $responsive_file[ $prop['root_prop'] ];
                                            else
                                                $files[$key_file][$responsive_key] = (object) $responsive_file;
                                        }
                                        else
                                            unset( $files[$key_file][$responsive_key] );
                                    }
                                }
                            }

                            $attributes[$key_prop] = ( $prop['repeatable'] ) ? $files : $files[0];

                            if( count($attributes[$key_prop]) == 1 && isset($attributes[$key_prop]['default']) ) {
                                $attributes[$key_prop] = $attributes[$key_prop]['default'];
                            }
                        }

                        break;

                    case 'file':

                        if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {

                            $files = ( $prop['repeatable'] ) ? $attributes[$key_prop] : [ $attributes[$key_prop] ];
                            foreach( $files as $key_file => $current_file ) {

                                if( is_array($current_file) && isset($current_file['id']) ) {

                                    $attachment_url = wp_get_attachment_url($current_file['id']);
                                    $current_file['src'] = $attachment_url;
                                    $current_file['url'] = $attachment_url;

                                    if( isset($prop['root_prop']) && isset( $current_file[ $prop['root_prop'] ] ) )
                                        $files[$key_file] = $current_file[ $prop['root_prop'] ];
                                    else
                                        $files[$key_file] = (object) $current_file;
                                }
                            }

                            $attributes[$key_prop] = ( $prop['repeatable'] ) ? $files : $files[0];
                        }
                        break;

                    case 'relation':

                        if( isset($attributes[$key_prop]) ) {
                            if( isset($prop['repeatable']) && $prop['repeatable'] && is_array($attributes[$key_prop]) && count($attributes[$key_prop]) > 0 ) {
                                $attributes[$key_prop] = get_posts([
                                    'post_type' => $prop['entity'],
                                    'post__in' => $attributes[$key_prop],
                                    'orderby' => 'post__in'
                                ]);
                            }
                            elseif( ( ! isset($prop['repeatable']) || ! $prop['repeatable'] ) && is_numeric($attributes[$key_prop]) ) {
                                $attributes[$key_prop] = get_post($attributes[$key_prop]);
                            }

                            $attributes[$key_prop] = apply_filters('wpextend/pre_render_component_relation', $attributes[$key_prop], $component['id'], $key_prop);
                        }
                        break;

                    case 'object':
                        if( isset($attributes[$key_prop]) ) {
                            if( isset($prop['repeatable']) && $prop['repeatable'] ) {
                                foreach( $attributes[$key_prop] as $key => $val ) {
                                    $attributes[$key_prop][$key] = self::attributes_formatting($prop, $val);
                                }
                            }
                            else
                                $attributes[$key_prop] = self::attributes_formatting($prop, $attributes[$key_prop]);
                        }

                        break;

                    case 'link':
                        
                        if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) ) {

                            if( isset($attributes[$key_prop]['url'], $attributes[$key_prop]['text']) && ! empty($attributes[$key_prop]['url']) && ! empty($attributes[$key_prop]['text']) ) {
                                $attributes[$key_prop] = [
                                    'url' => ( isset($attributes[$key_prop]['url']) ) ? $attributes[$key_prop]['url'] : '',
                                    'text' => ( isset($attributes[$key_prop]['text']) ) ? $attributes[$key_prop]['text'] : '',
                                    'target' => ( isset($attributes[$key_prop]['opensInNewTab']) && $attributes[$key_prop]['opensInNewTab'] == '1' ) ? true : false
                                ];
                            }
                            else {
                                $attributes[$key_prop] = null;
                            }
                        }

                        break;

                    case 'date':

                        if( isset($attributes[$key_prop]) ) {

                            $date = \DateTime::createFromFormat('Y-m-d\TH:i:s', $attributes[$key_prop], wp_timezone() );
                            if( $date ) {
                                $attributes[$key_prop] = $date->format('U');
                            }
                        }

                        break;
                }
            }
        }

        return $attributes;
    }

}