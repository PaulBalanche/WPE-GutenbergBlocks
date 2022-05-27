<?php

namespace Wpe_Blocks\Services;

class BackEnd extends ServiceBase {


    public function get_gutenberg_block_arguments( $component_spec ) {

        if( is_array($component_spec) && isset($component_spec['props']) && is_array($component_spec['props']) ) {

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

            return [
                'name' => 'custom/wpe-component-' . $component_spec['id'],
                'args_register' => [ 'attributes' => $attributes ]
            ];
        }

        return null;
    }

    
}