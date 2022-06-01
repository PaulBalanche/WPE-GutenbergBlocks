<?php

namespace Wpe_Blocks\Helpers;

use Wpe_Blocks\Helpers\Attributes\Boolean;
use Wpe_Blocks\Helpers\Attributes\Image;
use Wpe_Blocks\Helpers\Attributes\Gallery;
use Wpe_Blocks\Helpers\Attributes\Video;
use Wpe_Blocks\Helpers\Attributes\File;
use Wpe_Blocks\Helpers\Attributes\Relation;
use Wpe_Blocks\Helpers\Attributes\RecursiveObject;
use Wpe_Blocks\Helpers\Attributes\Link;
use Wpe_Blocks\Helpers\Attributes\Date;

class Attributes {
    
    /**
     * Loop on each attribute and format it if necessary
     * 
     */
    public static function formatting( $attributes, $component_spec ) {

        if( isset($component_spec['props']) && is_array($component_spec['props']) && count($component_spec['props']) > 0 ) {
            foreach( $component_spec['props'] as $key_prop => $prop ) {

                switch( $prop['type'] ) {
                    
                    case 'boolean':
                        Boolean::format( $attributes, $key_prop );
                        break;

                    case 'image':
                        Image::format( $attributes, $key_prop, $prop );
                        break;

                    case 'gallery':
                        Gallery::format( $attributes, $key_prop, $prop );
                        break;
                    
                    case 'video':
                        Video::format( $attributes, $key_prop, $prop );
                        break;

                    case 'file':
                        File::format( $attributes, $key_prop, $prop );
                        break;

                    case 'relation':
                        Relation::format( $attributes, $key_prop, $prop, $component_spec['id'] );
                        break;

                    case 'object':
                        RecursiveObject::format( $attributes, $key_prop, $prop );
                        break;

                    case 'link':
                        Link::format( $attributes, $key_prop );
                        break;

                    case 'date':
                        Date::format( $attributes, $key_prop );
                        break;
                }
            }
        }

        return $attributes;
    }

}