<?php

if( file_exists( get_stylesheet_directory() . '/frontspec.json' ) ) {
    
    $frontspec = json_decode( file_get_contents( get_stylesheet_directory() . '/frontspec.json' ), true);

    if( is_array($frontspec) && isset($frontspec['components']) && is_array($frontspec['components']) ) {

        foreach( $frontspec['components'] as $component ) {

            $temp_args_register = [];
            if( isset($component['props']) && is_array($component['props']) ) {
                $temp_args_register['attributes'] = [
                    'id' => [
                        'type' => 'string'
                    ]
                ];
                foreach( $component['props'] as $key_props => $val_prop ) {
                    $temp_args_register['attributes'][$key_props] = [
                        'type' => $val_prop['type']
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
