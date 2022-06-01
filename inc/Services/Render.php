<?php

namespace Wpe_Blocks\Services;

use Wpe_Blocks\Singleton\Timber;

class Render {

    /**
     * Render method
     * 
     */
    public static function render( $view, $context ) {

        return Timber::getInstance()->render( $view, $context );
    }

}