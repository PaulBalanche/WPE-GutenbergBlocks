<?php

namespace Wpe_Blocks\Filters;

class Spacing extends FiltersBase {

    /**
     * Bootstrap spacing formatting
     * 
     */
    public function wpe_gutenberg_blocks_spacing_formatting( $spacing, $type = 'padding' ) {

        $spacing_formatted = '';

        switch( $this->get_config()->get_frontspec_json_file('spacing') ) {

            case 'bootstrap':
            
                if( $spacing && is_array($spacing) ) {
                    foreach( $spacing as $breakpoint_key => $breakpoint_value ) {
                        if( is_array($breakpoint_value) ) {
                            foreach( $breakpoint_value as $key => $val ) {
                                $spacing_formatted .= ( $type == 'margin' ) ? ' m' : ' p';
                                $spacing_formatted .= str_replace( [ 'top', 'right', 'bottom', 'left', 'all' ], [ 't', 'e', 'b', 's', '' ], $key );
                                $spacing_formatted .= '-';
                                $spacing_formatted .= str_replace( [ 'mobile', 'tablet', 'desktop' ], [ '', 'sm-', 'lg-' ], $breakpoint_key );
                                $spacing_formatted .= $val;
                            }
                        }
                    }
                }

                $spacing = trim( $spacing_formatted );
                
                break;

            default:

                if( $spacing && is_array($spacing) ) {
                    foreach( $spacing as $breakpoint_key => $breakpoint_value ) {
                        if( is_array($breakpoint_value) ) {
                            foreach( $breakpoint_value as $key => $val ) {
                                $spacing_formatted .= $breakpoint_key;
                                $spacing_formatted .= '-';
                                $spacing_formatted .= ( ( $type == 'margin' ) ? 'm' : 'p' );
                                $spacing_formatted .= '-' . $key . '-' . $val . ' ';
                            }
                        }
                    }
                }
        
                $spacing = trim( $spacing_formatted );
        }

        return $spacing;
    }
    
}