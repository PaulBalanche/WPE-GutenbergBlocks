<?php

namespace Wpe_Blocks\Services;

class BackEnd extends ServiceBase {

    private $blocksLocation = 'blocks/',
            $blocksNamespace = 'custom',
            $blocksNamePrefix = 'wpe-component-',
            $viewspecJsonFilename = 'viewspec.json',
            $metadataJsonFilename = 'block.json',
            $overrideSpecJsonFilename = 'override.json';



    /**
     * Get the Gutenberg block name, with the following format: namespace/prefix-blockId
     * 
     */
    public function get_block_name( $block_id ) {

        return $this->blocksNamespace . '/' . $this->blocksNamePrefix . $block_id;
    }



    /**
     * Get block directory
     * 
     */
    public function get_block_dir( $block_id ) {

        return get_stylesheet_directory() . '/' . $this->blocksLocation . $this->get_block_name( $block_id);
    }



    /**
     * Get all the back-end block spec
     * 
     */
    public function get_blocks_spec() {

        $blocks_spec = [];

        $blocks_dir = get_stylesheet_directory() . '/' . $this->blocksLocation . $this->blocksNamespace;
        if( file_exists($blocks_dir) ) {

            // Scan blocks dir and loop each block
            $blocks_scan = scandir( $blocks_dir );
            foreach( $blocks_scan as $block ) {

                $viewspec_json_file = $blocks_dir . '/' . $block . '/' . $this->viewspecJsonFilename;
                if( file_exists($viewspec_json_file) ) {

                    $viewspec = json_decode( file_get_contents( $viewspec_json_file ), true );
                    if( $viewspec && is_array($viewspec) ) {

                        $blocks_spec[] = $viewspec;
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
    public function get_blocks_metadata() {

        $blocks_metadata = [];

        $blocks_dir = get_stylesheet_directory() . '/' . $this->blocksLocation . $this->blocksNamespace;
        if( file_exists($blocks_dir) ) {

            // Scan blocks dir and loop each block
            $blocks_scan = scandir( $blocks_dir );
            foreach( $blocks_scan as $block ) {

                $metadata_json_file = $blocks_dir . '/' . $block . '/' . $this->metadataJsonFilename;
                if( file_exists($metadata_json_file) ) {
                    $blocks_metadata[] = $metadata_json_file;
                }
            }
        }

        return $blocks_metadata;
    }



    /**
     * Return block metadata for block.json metadata file
     * 
     */
    public function get_block_metadata( $component_spec ) {

        $metadata = [];
        
        if( is_array($component_spec) && isset($component_spec['props']) && is_array($component_spec['props']) ) {

            // Name
            $metadata['name'] = $this->get_block_name( $component_spec['id'] );

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

            foreach( $component_spec['props'] as $key_props => $val_prop ) {

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
        }

        return $metadata;
    }



    /**
     * Generate block spec used by Wordspress Gutenberg
     * 
     */
    public function generate_block_spec( $component_frontspec ) {

        // Serialize block ID
        $block_id = str_replace( '_', '-', trim( strtolower( $component_frontspec['id'] ) ) );

        // Get the block directory
        $block_dir = $this->get_block_dir( $block_id );

        // Create blocks directory if missing
        if( ! file_exists( $block_dir ) ) {
            mkdir( $block_dir , 0750, true );
        }

        $backspec_generated = [
            'id' => $block_id,
            'name' => $component_frontspec['name'] ?? $block_id,
            'description' => $component_frontspec['description'] ?? '',
            'props' => $component_frontspec['props'] ?? [],
            'path' => $component_frontspec['path']
        ];

        // Write the components frontspec generated in a JSON file
        file_put_contents( $block_dir . '/' . $this->viewspecJsonFilename , json_encode( $backspec_generated, JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES ) );

        // Write the block metadata into block.json file
        file_put_contents( $block_dir . '/' . $this->metadataJsonFilename, json_encode( $this->get_block_metadata($backspec_generated), JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES ) );
    }



    /**
     * Merge component attributes with override-spec JSON file
     * 
     */
    public function override_component_viewspec( $viewspec_data ) {

        $override_spec_file = $this->get_block_dir( $viewspec_data['id'] ) . '/' . $this->overrideSpecJsonFilename;
        if( file_exists($override_spec_file) ) {

            $override_spec = json_decode( file_get_contents($override_spec_file), true );
            if( is_array($override_spec) ) {
                $viewspec_data = array_replace_recursive( $viewspec_data, $override_spec );
            }
        }

        return $viewspec_data;
    }

    
    
}