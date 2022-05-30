<?php

namespace Wpe_Blocks\Services;

class BackEnd extends ServiceBase {

    private $blocksLocation = 'blocks/',
            $blocksNamespace = 'realday',
            $blocksNamePrefix = '',
            $viewspecJsonFilename = 'viewspec.json',
            $metadataJsonFilename = 'block.json';



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

    
}