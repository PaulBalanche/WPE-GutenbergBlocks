<?php

namespace Wpe_Blocks\Services;

class FrontEnd extends ServiceBase {


    /**
     * Recursive function to get and treat viewspec JSON file for a single component
     * 
     */
    public function get_component_viewspec( $path_viewspec_file ) {

        // If viewspec file exist
        if( file_exists( $path_viewspec_file ) ) {

            // Get the file content
            $viewspec_data = json_decode( file_get_contents( $path_viewspec_file ), true );
            if( $viewspec_data && is_array($viewspec_data) ) {

                // Serialize component ID
                $viewspec_data['id'] = str_replace( '_', '-', trim( strtolower( $viewspec_data['id'] ) ) );

                // Add path attribute requires by component render method
                $component_dir_path = dirname( $path_viewspec_file );
                $basename_component = basename( $component_dir_path );
                if( file_exists( get_stylesheet_directory() .  '/' . $this->get_config()->get_front_view_root_location() . $this->get_config()->get_front_components_relative_path() . $basename_component . '/' . $basename_component . '.twig' ) ) {
                    $viewspec_data['path'] = $this->get_config()->get_front_components_relative_path() . $basename_component . '/' . $basename_component . '.twig';
                }

                // Get and treat component props
                if( isset($viewspec_data['props']) && is_array($viewspec_data['props']) ) {
                    $viewspec_data['type'] = ( isset($viewspec_data['type']) && $viewspec_data['type'] != 'twig' ) ? $viewspec_data['type'] : 'object';
                    $viewspec_data['props'] = $this->get_component_props($viewspec_data['props'], $viewspec_data['id']);
                }

                // Merge component attributes with override-spec JSON file
                if( strpos( $path_viewspec_file, $this->get_config()->get_front_view_root_location() . $this->get_config()->get_front_components_relative_path() ) !== false && file_exists(get_stylesheet_directory() . '/wpextend/blocks/custom/wpe-component-' . $viewspec_data['id'] . '/override.json') ) {
                    
                    $override_spec_component = json_decode( file_get_contents( get_stylesheet_directory() . '/wpextend/blocks/custom/wpe-component-' . $viewspec_data['id'] . '/override.json' ), true );
                    if( is_array($override_spec_component) ) {
                        $viewspec_data = array_replace_recursive( $viewspec_data, $override_spec_component );
                    }
                }

                return $viewspec_data;
            }
        }
        
        return null;
    }



    /**
     * Recursive function to get and treat component props
     *
     */
    public function get_component_props( $component_props, $component_id = false ) {

        if( is_array($component_props) ) {

            foreach($component_props as $key_props => $props) {

                // Extend attribute
                if( is_array($props) && isset($props['extends']) ) {
                    $component_props[$key_props] = wp_parse_args( $props, $this->get_extends_component_viewspec($props['extends']) );
                    unset( $component_props[$key_props]['extends'] );
                }

                // If invalid or null component, or type absent, or need only editable props => just bypass it and continue to the next component
                if( is_null($component_props[$key_props]) || ! is_array($component_props[$key_props]) || ! isset($component_props[$key_props]['type']) || ( isset( $props['editable'] ) && $props['editable'] == false ) ) {
                    unset( $component_props[$key_props] );
                    continue;
                }

                // Serialize and add some update into few attributes.
                $component_props[$key_props]['repeatable'] = ( strpos($component_props[$key_props]['type'], '[]') !== false || ( isset($component_props[$key_props]['repeatable']) && $component_props[$key_props]['repeatable']) ) ? true : false;
                $component_props[$key_props]['type'] = str_replace('[]', '', strtolower($component_props[$key_props]['type']));
                $component_props[$key_props]['label'] = ( isset($component_props[$key_props]['label']) ) ? $component_props[$key_props]['label'] : ucfirst($key_props);
                $component_props[$key_props]['category'] = ( isset($component_props[$key_props]['category']) ) ? strtolower($component_props[$key_props]['category']) : '';
                
                // If type is object with sub-props, call this recursive method
                if( ( $component_props[$key_props]['type'] == 'object' || $component_props[$key_props]['type'] == 'Object[]' ) && isset($component_props[$key_props]['props']) && is_array($component_props[$key_props]['props']) )
                    $component_props[$key_props]['props'] = $this->get_component_props($component_props[$key_props]['props'], false);
            }
        }

        if( $component_id ) {
            $component_props = apply_filters('wpextend/get_frontspec_component_props_' . $component_id, $component_props);
        }

        return $component_props;
    }



    /**
     * Get and treat extended component 
     * 
     */
    public function get_extends_component_viewspec( $extends ) {

        if( strpos($extends, '.') !== false ) {

            $frontspec_views_path = $this->get_config()->get_frontspec_json_file( 'views' );
            if( is_array($frontspec_views_path) && isset($frontspec_views_path['folders']) & is_array($frontspec_views_path['folders']) ) {

                $prefix_extends = explode('.', $extends);
                if( is_array($prefix_extends) && count($prefix_extends) == 2 && isset($frontspec_views_path['folders'][ $prefix_extends[0] ]) ) {

                    $extends_json_files_relative_path = $frontspec_views_path['folders'][ $prefix_extends[0] ] . '/' . $prefix_extends[1] . '/*.json';
                }
            }
        }
        else {
            $extends_json_files_relative_path = 'components/' . $extends . '/*.json';
        }

        $extends_json_files = glob( get_stylesheet_directory() . '/' . $this->get_config()->get_front_view_root_location() . $extends_json_files_relative_path );
        return ( $extends_json_files && is_array($extends_json_files) && count($extends_json_files) == 1 ) ? $this->get_component_viewspec( $extends_json_files[0] ) : null;
    }


    
}