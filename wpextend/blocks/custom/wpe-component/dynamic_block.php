<?php

if( file_exists( get_stylesheet_directory() . '/frontspec.json' ) ) {
    
    $frontspec = json_decode( file_get_contents( get_stylesheet_directory() . '/frontspec.json' ), true);

    if( is_array($frontspec) && isset($frontspec['components']) && is_array($frontspec['components']) ) {

        foreach( $frontspec['components'] as $component ) {

            $temp_args_register = [];
            if( isset($component['props']) && is_array($component['props']) ) {
                $temp_args_register['attributes'] = [
                    'id_component' => [
                        'type' => 'string'
                    ],
                    'margin' => [
                        'type' => 'object'
                    ],
                    'editor' => [
                        'type' => 'boolean'
                    ]
                ];
                foreach( $component['props'] as $key_props => $val_prop ) {

                    $currentType = $val_prop['type'];
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
                        case 'boolean':
                            $currentType = 'boolean';
                            break;
                        case 'select':
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
                    }

                    $temp_args_register['attributes'][$key_props] = [
                        'type' => $currentType
                    ];
                }
            }

            $dynamic_blocks[] = [
                'name' => str_replace(get_stylesheet_directory() . '/wpextend/blocks/', '', dirname(__FILE__) ) . '-' . $component['id'],
                'args_register' => $temp_args_register
            ];
        }
    }
}
