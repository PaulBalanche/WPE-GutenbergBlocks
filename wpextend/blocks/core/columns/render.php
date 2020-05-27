<?php

function core_columns_render_callback( $attributes, $content ) {
    
    $return = '';
    
    preg_match( '/^<div class="wp-block-columns">\R<div class="wp-block-column">(.*)<\/div>\R<\/div>$/ms', $content, $matches );

    if( count($matches) == 2 ) {
        
        $columns = preg_split( '/<\/div>\R\R\R\R<div class="wp-block-column">/', $matches[1] );
        
        foreach( $columns as $column ) {
            $return .= '<div class="col">' . $column . '</div>';
        }
    }

    return $return;
}