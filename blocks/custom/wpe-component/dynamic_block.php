<?php

$frontspec_components = Wpextend\GutenbergBlock::get_frontspec_components();
if( is_array($frontspec_components) ) {

    foreach( $frontspec_components as $component ) {

        $temp_args_register = [];
        if( isset($component['props']) && is_array($component['props']) ) {
            $temp_args_register['attributes'] = [
                'id_component' => [
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
            foreach( $component['props'] as $key_props => $val_prop ) {

                $currentType = strtolower($val_prop['type']);
                if( isset($val_prop['repeatable']) && $val_prop['repeatable'] == true ) {
                    $currentType = 'array';
                }

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
                        $currentType = 'number';
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
                    case 'file':
                        $currentType = 'object';
                        break;
                    case 'gallery':
                        $currentType = 'array';
                        break;
                    case 'image[]':
                        $currentType = 'array';
                        break;
                }

                $temp_args_register['attributes'][$key_props] = [
                    'type' => $currentType
                ];
            }
        }

        $dynamic_blocks[] = [
            'name' => str_replace(Wpextend\GutenbergBlock::get_blocks_path() . '/', '', dirname(__FILE__) ) . '-' . $component['id'],
            'args_register' => $temp_args_register
        ];
    }
}