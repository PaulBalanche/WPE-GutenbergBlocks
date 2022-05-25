<?php

namespace Wpe_Blocks\Services;

class ViewSpec {


    private static $front_view_root_location = 'src/views/',
    $front_components_relative_path = 'sections/';



    /**
     * Return all custom components defined in active theme
     * 
     */
    public static function get_theme_components() {

        $theme_components = [];

        $components_dir = get_stylesheet_directory() . '/' . self::$front_view_root_location . self::$front_components_relative_path;
        if( file_exists($components_dir) ) {

            // Scan components dir
            $components = scandir( $components_dir );

            // Loop each components
            foreach( $components as $component ) {

                if( ! is_dir($components_dir . $component) || $component == '..' || $component == '.' ) {
                    continue;
                }

                // Treat viewspec JSON file for the current component
                $theme_components[ strtolower( $component ) ] = self::get_component_viewspec( $components_dir . $component . '/viewspec.json' );

                // If invalid or null component, just bypass it and continue to the next component
                if( is_null($theme_components[ strtolower( $component ) ]) || ! is_array($theme_components[ strtolower( $component ) ]) ) {
                    unset( $theme_components[ strtolower( $component ) ] );
                    continue;
                }
            }
        }
    }




    public static function generate() {

        // Create blocks dir if missing
        if( ! file_exists( get_stylesheet_directory() . '/wpextend/blocks' ) ) {
            mkdir( get_stylesheet_directory() . '/wpextend/blocks', 0750, true );
        }

        $front_components_dir = get_stylesheet_directory() . '/' . self::$front_view_root_location . self::$front_components_relative_path;
        if( file_exists($front_components_dir) ) {

            // Scan components dir
            $components = scandir( $front_components_dir );

            // Loop each components
            foreach( $components as $component ) {

                if( ! is_dir($front_components_dir . $component) || $component == '..' || $component == '.' ) {
                    continue;
                }

                $component_spec = self::get_component_viewspec( $front_components_dir . $component . '/viewspec.json' );

                // If invalid or null component, just bypass it and continue to the next component
                if( ! is_null( $component_spec ) && is_array( $component_spec ) ) {

                    // Create blocks dir if missing
                    if( ! file_exists( get_stylesheet_directory() . '/wpextend/blocks/' . $component ) ) {
                        mkdir( get_stylesheet_directory() . '/wpextend/blocks/' . $component , 0750, true );
                    }

                    // Write the components frontspec generated in a JSON file.
                    file_put_contents( get_stylesheet_directory() . '/wpextend/blocks/' . $component . '/backspec.json', json_encode($component_spec, JSON_PRETTY_PRINT) );
                }
            }
        }

        die;
    }



    /**
     * Recursive function to get and treat viewspec JSON file for a single component
     * 
     */
    public static function get_component_viewspec( $path_viewspec_file ) {

        // If viewspec file exist
        if( file_exists( $path_viewspec_file ) ) {

            $component_dir_path = dirname($path_viewspec_file);
            $basename_component = basename($component_dir_path);

            // Get the file content
            $viewspec_data = json_decode( file_get_contents( $path_viewspec_file ), true );
            if( $viewspec_data && is_array($viewspec_data) ) {

                // Serialize component ID
                $viewspec_data['id'] = str_replace( '_', '-', trim( strtolower( $viewspec_data['id'] ) ) );

                // Merge component attributes with back-spec JSON file
                // $backspec_components = self::get_backspec_json_file('components');
                // if( is_array($backspec_components) && isset($backspec_components[$viewspec_data['id']]) ) {
                //     $viewspec_data = array_replace_recursive( $viewspec_data, $backspec_components[$viewspec_data['id']]);
                // }

                // Need only editable component => just bypass it and continue to the next component
                // if( $only_editable && isset( $viewspec_data['editable'] ) && $viewspec_data['editable'] == false ) {
                //     return null;
                // }

                // Add path attribute requires by component render method
                if( file_exists( get_stylesheet_directory() .  '/' . self::$front_view_root_location . self::$front_components_relative_path . $basename_component . '/' . $basename_component . '.twig' ) ) {
                    $viewspec_data['path'] = COMPONENTS_RELATIVE_PATH . $basename_component . '/' . $basename_component . '.twig';
                }

                // Get and treat component props
                // if( isset($viewspec_data['props']) && is_array($viewspec_data['props']) ) {
                //     $viewspec_data['type'] = ( isset($viewspec_data['type']) && $viewspec_data['type'] != 'twig' ) ? $viewspec_data['type'] : 'object';
                //     $viewspec_data['props'] = self::get_component_props($viewspec_data['props'], $viewspec_data['id'], $only_editable);
                // }

                return $viewspec_data;
            }
        }
        
        return null;
    }



}