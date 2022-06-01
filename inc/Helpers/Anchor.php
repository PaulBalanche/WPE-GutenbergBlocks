<?php

namespace Wpe_Blocks\Helpers;

use Wpe_Blocks\Shared\Config;

class Anchor {
    

    public static function get_block_anchor( $content_wrapped ) {

        $anchor = false;

        if( preg_match( '/<div(.*)class="wp-block-' . Config::getInstance()->get('blocksNamespace') . '-' . Config::getInstance()->get('componentBlockName') . '-[^"]*"([^>]*)>(.*)<\/div>/s', $content_wrapped, $content ) === 1 ) {
                
            $class_prev = $content[1];
            $class_next = $content[2];
            $content = $content[3];

            if( strpos($class_prev, 'id="') !== false ) {

                preg_match( '/id="(.*)"/', $class_prev, $match_anchor );
                if( is_array($match_anchor) && count($match_anchor) == 2 ) {
                    $anchor = $match_anchor[1];
                }
            }
            elseif( strpos($class_next, 'id="') !== false ) {

                preg_match( '/id="(.*)"/', $class_next, $match_anchor );
                if( is_array($match_anchor) && count($match_anchor) == 2 ) {
                    $anchor = $match_anchor[1];
                }
            }
        }
        
        return $anchor;
    }

}