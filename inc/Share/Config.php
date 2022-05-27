<?php

namespace Wpe_Blocks\Share;

class Config {

    private static $_instance;

    private $front_view_root_location = 'src/views/';
    private $front_components_relative_path = 'sections/';
    private $frontspec_json_file_relative_path = 'frontspec.json';


    public static function getInstance() {

        if( is_null(self::$_instance) ) {
            self::$_instance = new Config();
        }
        return self::$_instance;
    }

    public function get_front_view_root_location() {

        return $this->front_view_root_location;
    }
    
    public function get_front_components_relative_path() {

        return $this->front_components_relative_path;
    }


    public function get_fontspec_path() {
        return get_stylesheet_directory() . '/' . $this->frontspec_json_file_relative_path;
    }



    /**
     * Return data from "frontspec" JSON file
     * 
     */
    public function get_frontspec_json_file( $data = false, $merge_backspec = true ) {

        $front_spec = json_decode ( file_get_contents( $this->get_fontspec_path() ), true );

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