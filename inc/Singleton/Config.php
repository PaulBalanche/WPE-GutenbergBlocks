<?php

namespace Wpe_Blocks\Singleton;

class Config {

    private static $_instance;

    private $front = [
        'frontspec_json_file_name' => 'frontspec.json',
        'viewsLocation' => 'src/views/',
        'componentsSubLocation' => 'sections/',
        'viewspecJsonFilename' => 'viewspec.json'
    ];

    private $back = [
        'blocksLocation' => 'blocks/',
        'viewspecJsonFilename' => 'viewspec.json',
        'metadataJsonFilename' => 'block.json',
        'overrideSpecJsonFilename' => 'override.json'
    ];
    
    private $both = [
        'blocksNamespace' => 'custom',
        'componentBlockName' => 'wpe-component'
    ];




    public static function getInstance() {

        if( is_null(self::$_instance) ) {
            self::$_instance = new Config();
        }
        return self::$_instance;
    }



    /**
     * Get config
     * 
     */
    public function getFront( $id ) {   return $this->front[$id]    ??  null;    }
    public function getback( $id )  {   return $this->back[$id]     ??  null;    }
    public function get( $id )      {   return $this->both[$id]     ??  null;    }



    /**
     * Return data from "frontspec" JSON file
     * 
     */
    public function get_frontspec_json_file( $data = false, $merge_backspec = true ) {

        $front_spec = json_decode ( file_get_contents( get_stylesheet_directory() . '/' . $this->getFront('frontspec_json_file_name') ), true );

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