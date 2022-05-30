<?php

namespace Wpe_Blocks\Share;

class Config {

    private static $_instance;

    private $frontspec_json_file_relative_path = 'frontspec.json';


    public static function getInstance() {

        if( is_null(self::$_instance) ) {
            self::$_instance = new Config();
        }
        return self::$_instance;
    }



    /**
     * Return data from "frontspec" JSON file
     * 
     */
    public function get_frontspec_json_file( $data = false, $merge_backspec = true ) {

        $front_spec = json_decode ( file_get_contents( get_stylesheet_directory() . '/' . $this->frontspec_json_file_relative_path ), true );

        // if( $merge_backspec ) {
        //     $back_spec = self::get_backspec_json_file();
        //     $front_spec = array_replace_recursive( $front_spec, $back_spec);
        // }

        if ( $data ) {

            if( array_key_exists($data, $front_spec) )
                return $front_spec[$data];
            else
                return null;
        }
        else
            return $front_spec;
    }



}