<?php

namespace Wpe_Blocks\Models;

use Wpe_Blocks\Helpers\Request;
use Wpe_Blocks\Services\Render as RenderService;

class ComponentBlock extends ModelBase {

    private $blockId,
            $attributes,
            $content;

    public function __construct( $blockId = null ) {
        parent::__construct();
        $this->set_ID( $blockId );
    }


    /**
     * Get the component block ID
     * 
     */
    public function get_ID() {
        return $this->blockId;
    }



    /**
     * Set the component block ID
     * 
     */
    public function set_ID( $blockId = null ) {
        
        $this->blockId = ( ! is_null($blockId) ) ? str_replace( $this->get_config()->get('componentBlockName') . '-', '', str_replace( '_', '-', trim( strtolower( $blockId ) ) ) ) : null;
    }



    /**
     * Get component attributes
     * 
     */
    public function get_attributes() {
        return $this->attributes;
    }



    /**
     * 
     * 
     */
    public function set_attributes( $attributes ) {
        $this->attributes = $attributes;
    }
    
    

    /**
     * Get component content
     * 
     */
    public function get_content() {
        return $this->content;
    }



    /**
     * 
     * 
     */
    public function set_content( $content ) {
        $this->content = $content;
    }



    /**
     * Get the Gutenberg block name, with the following format: namespace/prefix-blockId
     * 
     */
    public function get_block_name() {

        return $this->get_config()->get('blocksNamespace') . '/' . $this->get_config()->get('componentBlockName') . '-' . $this->get_ID();
    }



    /**
     * Get block directory
     * 
     */
    public function get_block_dir() {

        return get_stylesheet_directory() . '/' . $this->get_config()->getBack('blocksLocation') . $this->get_block_name();
    }




    /**
     * Get, decode and return the JSON block spec
     * 
     */
    public function get_block_spec() {

        $spec_json_file = $this->get_block_dir() . '/' . $this->get_config()->getBack('viewspecJsonFilename');
        if( file_exists($spec_json_file) ) {

            $block_spec = json_decode( file_get_contents( $spec_json_file ), true );
            if( $block_spec && is_array($block_spec) ) {
                return $block_spec;
            }
        }

        return [];
    }



    /**
     * Generate block spec used by Wordspress Gutenberg
     * 
     */
    public function generate_block_spec( $component_frontspec ) {

        // Define component ID
        $this->set_ID( $component_frontspec['id'] );

        // Get the block directory
        $block_dir = $this->get_block_dir();

        // Create blocks directory if missing
        if( ! file_exists( $block_dir ) ) {
            mkdir( $block_dir , 0750, true );
        }

        $backspec_generated = [
            'id' => $this->get_ID(),
            'name' => $component_frontspec['name'] ?? $this->get_ID(),
            'description' => $component_frontspec['description'] ?? '',
            'props' => $component_frontspec['props'] ?? [],
            'path' => $component_frontspec['path'],
            'standalone' => true
        ];

        // Write the components frontspec generated in a JSON file
        file_put_contents( $block_dir . '/' . $this->get_config()->getBack('viewspecJsonFilename') , json_encode( $backspec_generated, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES ) );
    }



    /**
     * Reurn the metadata JSON file
     */
    public function get_block_metadata_json_file() {

        $metadata_json_file = $this->get_block_dir() . '/' . $this->get_config()->getBack('metadataJsonFilename');
        if( file_exists($metadata_json_file) ) {
            return $metadata_json_file;
        }

        return false;
    }



    /**
     * Return block metadata for block.json metadata file
     * 
     */
    public function generate_block_metadata() {

        $block_spec = $this->get_block_spec();
        if( is_array($block_spec) && isset($block_spec['props']) && is_array($block_spec['props']) ) {

            $metadata = [];

            // Name
            $metadata['name'] = $this->get_block_name( $this->get_ID() );

            // Attributes
            $attributes = [
                'id_component' => [
                    'type' => 'string'
                ],
                'anchor' => [
                    'type' => 'string'
                ],
                'padding' => [
                    'type' => 'object'
                ],
                'margin' => [
                    'type' => 'object'
                ],
                'editor' => [
                    'type' => 'boolean'
                ]
            ];

            foreach( $block_spec['props'] as $key_props => $val_prop ) {

                if( is_array($val_prop) && isset($val_prop['type']) ) {

                    $currentType = ( isset($val_prop['repeatable']) && $val_prop['repeatable'] == true ) ? 'array' : strtolower($val_prop['type']);
                    switch( $currentType ) {
                        case 'string':
                            $currentType = 'string';
                            break;
                        case 'text':
                            $currentType = 'string';
                            break;
                        case 'richText':
                            $currentType = 'string';
                            break;
                        case 'wysiwyg':
                            $currentType = 'string';
                            break;
                        case 'boolean':
                            $currentType = 'boolean';
                            break;
                        case 'select':
                            $currentType = 'string';
                            break;
                        case 'color':
                            $currentType = 'string';
                            break;
                        case 'radio':
                            $currentType = 'string';
                            break;
                        case 'relation':
                            $currentType = 'string';
                            break;
                        case 'array':
                            $currentType = 'array';
                            break;
                        case 'object':
                            $currentType = 'object';
                            break;
                        case 'link':
                            $currentType = 'object';
                            break;
                        case 'number':
                            $currentType = 'number';
                            break;
                        case 'image':
                            $currentType = 'object';
                            break;
                        case 'video':
                            $currentType = 'object';
                            break;
                        case 'file':
                            $currentType = 'object';
                            break;
                        case 'gallery':
                            $currentType = 'array';
                            break;
                        case 'image[]':
                            $currentType = 'array';
                            break;
                        case 'date':
                            $currentType = 'string';
                            break;
                    }

                    $attributes[ $key_props ] = [
                        'type' => $currentType
                    ];
                }
            }

            $metadata['attributes'] = $attributes;

            // Write the block metadata into block.json file
            file_put_contents( $this->get_block_dir() . '/' . $this->get_config()->getBack('metadataJsonFilename'), json_encode( $metadata, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES ) );
        }
    }



    /**
     * Merge component attributes with override-spec JSON file
     * 
     */
    public function get_override_viewspec() {

        $override_spec_file = $this->get_block_dir() . '/' . $this->get_config()->getBack('overrideSpecJsonFilename');
        if( file_exists($override_spec_file) ) {

            $override_spec = json_decode( file_get_contents($override_spec_file), true );
            if( is_array($override_spec) ) {
                return $override_spec;
            }
        }

        return false;
    }



    /**
     * Render method
     * 
     */
    public function render() {

        $render = null;
        
        $block_spec = $this->get_block_spec();
        if( is_array($block_spec) ) {

            // Get block attributes
            $render_attributes = $this->get_attributes();

            // Filters attributes
            $render_attributes = apply_filters( 'wpextend/render_wpe_component_attributes', $render_attributes );
            $render_attributes = apply_filters( 'wpextend/render_wpe_component_attributes_' . $this->get_ID(), $render_attributes );

            // Anchor detection
            $render_attributes['anchor'] = $this->detect_block_anchor();

            // Filters spacing
            $render_attributes['margin'] = apply_filters( 'wpextend/wpe_gutenberg_blocks_spacing_formatting', ( isset($render_attributes['margin']) ) ? $render_attributes['margin'] : '', 'margin' );
            $render_attributes['padding'] = apply_filters( 'wpextend/wpe_gutenberg_blocks_spacing_formatting', ( isset($render_attributes['padding']) ) ? $render_attributes['padding'] : '', 'padding' );

            // Formatting attributes
            $render_attributes = apply_filters( 'Wpe_Blocks\attributes_formatting', $render_attributes, $block_spec );

            // Start rendering
            if( apply_filters( 'wpextend/display_wpe_component_' . $this->get_ID(), true, $render_attributes ) ) {

                // Check missing required attributes
                $missing_required_attributes = $this->get_missing_required_attributes( $render_attributes );
                if( count($missing_required_attributes) == 0 ) {
                    
                    $render = apply_filters( 'wpextend/render_wpe_component_' . $this->get_ID(), RenderService::render( $block_spec['path'], $render_attributes ) );
                }
                else if( Request::is_admin_editor_request() ) {

                    $render = '<div class="alert">Some required fields are missing: <ul><li>' . implode('</li><li>', $missing_required_attributes) . '</li></ul></div>';
                }
            }
            else if( isset($render_attributes['admin_error_message']) && Request::is_admin_editor_request() ) {
                $render = '<div class="alert">' . $render_attributes['admin_error_message'] . '</div>';
            }
        }

        return $render;
    }



    /**
     * Detect anchor into the block content wrapper
     * 
     */
    public function detect_block_anchor() {

        $anchor = null;

        if( preg_match( '/<div(.*)class="wp-block-' . $this->get_config()->get('blocksNamespace') . '-' . $this->get_config()->get('componentBlockName') . '-[^"]*"([^>]*)>(.*)<\/div>/s', $this->get_content(), $content ) === 1 ) {
                
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
        }
        
        return $anchor;
    }




    /**
     * Check missing required attributes
     * 
     */
    public function get_missing_required_attributes( $attributes ) {

        $missing_required_attributes = [];
        
        $block_spec = $this->get_block_spec();
        if( is_array($block_spec) && isset($block_spec['props']) && is_array($block_spec['props']) && count($block_spec['props']) > 0 ) {
                            
            foreach( $block_spec['props'] as $key_prop => $prop ) {

                if( isset($prop['required']) && $prop['required'] && ( ! isset($attributes[$key_prop]) || ! $attributes[$key_prop] || empty($attributes[$key_prop]) ) ){

                    $missing_required_attributes[] = ( isset( $prop['label'] ) ) ? $prop['label'] : $key_prop;
                }
            }
        }

        return $missing_required_attributes;
    }

}