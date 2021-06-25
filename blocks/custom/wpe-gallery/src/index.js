/**
 * WordPress Dependencies
 */
import axios from 'axios';
import { SelectControl } from '@wordpress/components';

const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components;

function addAttributesCoreGallery( settings, name ) {
            
    if ( name !== 'core/gallery' ) {
        return settings;
    }

    return lodash.assign( {}, settings, {
        attributes: lodash.assign( {}, settings.attributes, {
            galleryType:{ 
                type: 'string'
            }
        } )
    } );
}
addFilter(
    'blocks.registerBlockType',
    'core/gallery',
    addAttributesCoreGallery
);

axios.get( ajaxurl, {
    params: {
        action: 'wpe_frontspec',
        data: 'galleryType'
    }
})
.then(res => {

    var galleryTypeOptions = [ { label: 'Default', value: 'default' } ];

    if( res.data && res.data != 'undefined' )
        galleryTypeOptions = galleryTypeOptions.concat( res.data );

    const addAttributesCoreGallerywithInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
        return ( props ) => {

            if( props.name == 'core/gallery' ) {

                const {
                    attributes,
                    setAttributes
                } = props;
        
                return (
                    <Fragment>
                        <BlockEdit { ...props } />
                        <InspectorControls>
                            <PanelBody>
                                <SelectControl
                                    label="Type"
                                    value={ attributes.galleryType }
                                    options={ galleryTypeOptions }
                                    onChange={ ( value ) => {
                                        setAttributes( { galleryType: value } )
                                    } }
                                />
                            </PanelBody>
                        </InspectorControls>
                    </Fragment>
                );
            }

            return <BlockEdit { ...props } />;
        };
    }, "withInspectorControl" );
    
    addFilter(
        'editor.BlockEdit',
        'core/gallery',
        addAttributesCoreGallerywithInspectorControls
    );
})
.catch(function (error) {
    // handle error
    console.log(error);
})