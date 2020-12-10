<?php

use Jenssegers\Blade\Blade;

function custom_wpe_component_render_callback( $attributes, $content ) {

    if( ! isset( $attributes['id_component'] ) ) {
        return;
    }
    
    if( file_exists( get_stylesheet_directory() . '/frontspec.json' ) ) {
    
        $frontspec = json_decode( file_get_contents( get_stylesheet_directory() . '/frontspec.json' ), true);
    
        if( is_array($frontspec) && isset($frontspec['components']) && is_array($frontspec['components']) ) {
    
            foreach( $frontspec['components'] as $component ) {

                if( $component['id'] == $attributes['id_component'] ) {

                    unset($attributes['id_component']);

                    $attributes = custom_wpe_component_render_callback_recursive_treatment($component, $attributes);
// pre($attributes);
                    // Format margin to className
                    $attributes['marginClassFormatted'] = ( isset($attributes['margin']) && is_array($attributes['margin']) ) ? implode(' ', array_map(
                        function ($v, $k) {

                            switch($v) {
                                case 0:
                                    $v = 'null';
                                    break;
                                case 1:
                                    $v = 'smaller';
                                    break;
                                case 2:
                                    $v = 'small';
                                    break;
                                case 3:
                                    $v = 'default';
                                    break;
                                case 4:
                                    $v = 'big';
                                    break;
                                case 5:
                                    $v = 'bigger';
                                    break;
                            }
                            return implode('-', str_split($k)) . '-' . $v;
                        },
                        $attributes['margin'],
                        array_keys($attributes['margin'])
                    )) : '';

                    $blade = new Blade( get_stylesheet_directory() . '/app/views/components', get_stylesheet_directory() . '/app/cache/views' );
                    return $blade->render($component['path'] . '/' . $component['path'], $attributes);
                    // return \Wpextend\Timber::render_view($component['path'], $attributes);
                }
            }
        }
    }
}



function custom_wpe_component_render_callback_recursive_treatment($component, $attributes) {

    if( isset($component['props']) && is_array($component['props']) && count($component['props']) > 0 ) {
                        
        foreach( $component['props'] as $key_prop => $prop ) {

            switch( $prop['type'] ) {
                
                case 'boolean':
                    if( ! isset($attributes[$key_prop]) )
                        $attributes[$key_prop] = false;

                    break;

                case 'image':
                    if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) && isset($attributes[$key_prop]['id']) ) {
                        $attachment_image_src = wp_get_attachment_image_src($attributes[$key_prop]['id'], 'large');
                        $attributes[$key_prop]['src'] = $attachment_image_src[0];
                        $attributes[$key_prop]['url'] = $attachment_image_src[0];

                        if( isset($prop['root']) && $prop['root'] )
                            $attributes[$key_prop] = $attachment_image_src[0];
                        else
                            $attributes[$key_prop] = (object) $attributes[$key_prop];
                    }
                    break;
                
                case 'file':
                    if( isset($attributes[$key_prop]) && is_array($attributes[$key_prop]) && isset($attributes[$key_prop]['id']) ) {
                        $attachment_url = wp_get_attachment_url($attributes[$key_prop]['id']);
                        $attributes[$key_prop]['src'] = $attachment_url;
                        $attributes[$key_prop]['url'] = $attachment_url;

                        if( isset($prop['root']) && $prop['root'] )
                            $attributes[$key_prop] = $attachment_url;
                        else
                            $attributes[$key_prop] = (object) $attributes[$key_prop];
                    }
                    break;

                case 'relation':

                    if( isset($attributes[$key_prop]) ) {

                        if( isset($prop['repeatable']) && $prop['repeatable'] && is_array($attributes[$key_prop]) && count($attributes[$key_prop]) > 0 ) {

                            $attributes[$key_prop] = get_posts([
                                'post_type' => $prop['entity'],
                                'post__in' => $attributes[$key_prop],
                                'orderby' => 'post__in'
                            ]);
                        }
                        elseif( ( ! isset($prop['repeatable']) || ! $prop['repeatable'] ) && is_numeric($attributes[$key_prop]) ) {

                            $attributes[$key_prop] = get_post($attributes[$key_prop]);
                        }

                        $attributes[$key_prop] = apply_filters('wpextend/pre_render_component_relation', $attributes[$key_prop], $component['id'], $key_prop);
                    }
                    break;

                case 'object':

                    $attributes[$key_prop] = (object) custom_wpe_component_render_callback_recursive_treatment($prop, $attributes[$key_prop]);
                    break;
            }
        }
    }

    return $attributes;
}