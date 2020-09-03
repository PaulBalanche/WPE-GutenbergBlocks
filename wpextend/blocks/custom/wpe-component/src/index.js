import { createBlock, registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';

import {
    InnerBlocks,
    InspectorControls,
    MediaPlaceholder,
    __experimentalBlock as Block
} from '@wordpress/block-editor';

import frontspec from '../../../../../frontspec.json';

import {
    HorizontalRule,
    TextControl,
    TextareaControl,
    ToggleControl,
    Button,
    Placeholder,
    Panel, PanelBody, PanelRow
} from '@wordpress/components';

frontspec.components.forEach( ( element ) => {

    var initAttributes = {
        id: {
            type: 'string',
            default: element.id
        }
    };

    for (const [key, value] of Object.entries(element.props)) {
        
        switch( value.type ) {
            case 'string':
                initAttributes[key] = {
                    type: 'string'
                };
                break;

            case 'text':
                initAttributes[key] = {
                    type: 'string'
                };
                break;
            case 'boolean':
                initAttributes[key] = {
                    type: 'boolean'
                };
                break;
            case 'array':
                initAttributes[key] = {
                    type: 'array'
                };
                break;
            case 'object':
                initAttributes[key] = {
                    type: 'object'
                };
                break;
            case 'number':
                initAttributes[key] = {
                    type: 'number'
                };
                break;
            case 'image':
                initAttributes[key] = {
                    type: 'object'
                };
                break;
            case 'gallery':
                initAttributes[key] = {
                    type: 'array'
                };
                break;
        }
    }

    registerBlockType( 'custom/wpe-component-' + element.id, {
        title: element.name,
        attributes: initAttributes,
        edit: ( props ) => {

            const { attributes, setAttributes, isSelected, clientId } = props;

            // Visual mode
            if( ! isSelected ) {

                return (
                    <ServerSideRender
                        block={ "custom/wpe-component-" + element.id }
                        attributes={ attributes }
                    />
                );
            }

            // Edition mode
            let catReOrder = {
                default: { props: {} }
            };

            // 1. Loop Props Categories
            for (const [keyCatProps, valueCatProps] of Object.entries(element.category_props)) {

                catReOrder[valueCatProps.id] = { name: valueCatProps.name, props: {} }
            }

            // 2. Loop Props
            for (const [keyProp, valueProp] of Object.entries(element.props)) {

                if( typeof valueProp.category != 'undefined' && valueProp.category in catReOrder ) {
                    catReOrder[valueProp.category].props[keyProp] = valueProp;
                }
                else {
                    catReOrder['default'].props[keyProp] = valueProp;
                }
            }

            // 3. Render
            var editPlaceHolder = [];
            for (const [keyCat, valCat] of Object.entries(catReOrder)) {
                
                if( valCat.props.length == 0 )
                    continue;
                
                let currentEditCat = [];

                for (const [keyProp, valueProp] of Object.entries(valCat.props)) {

                    switch( valueProp.type ) {
                        case 'string':
                            currentEditCat.push(
                                <div key={ clientId + "-" + keyProp + "-container" } >
                                    <TextControl
                                        key={ clientId + "-" + keyProp }
                                        label={ valueProp.label }
                                        value={ attributes[keyProp] }
                                        onChange={ ( value ) =>
                                            setAttributes( { [keyProp]: value } )
                                        }
                                    />
                                </div>
                            );
                            break;

                        case 'number':
                            currentEditCat.push(
                                <div key={ clientId + "-" + keyProp + "-container" } >
                                    <TextControl
                                        key={ clientId + "-" + keyProp }
                                        label={ valueProp.label }
                                        type="number"
                                        value={ attributes[keyProp] }
                                        onChange={ ( value ) =>
                                            setAttributes( { [keyProp]: parseInt( value, 10 ) } )
                                        }
                                    />
                                </div>
                            );
                            break;
                
                        case 'text':
                            currentEditCat.push(
                                <div key={ clientId + "-" + keyProp + "-container" } >
                                    <TextareaControl
                                        key={ clientId + "-" + keyProp }
                                        label={ valueProp.label }
                                        value={ attributes[keyProp] }
                                        onChange={ ( value ) =>
                                            setAttributes( { [keyProp]: value } )
                                        }
                                    />
                                </div>
                            );
                            break;
        
                        case 'boolean':
                            currentEditCat.push(
                                <div key={ clientId + "-" + keyProp + "-container" } >
                                    <ToggleControl
                                        key={ clientId + "-" + keyProp }
                                        label={ valueProp.label }
                                        help={ 'Help text' }
                                        checked={ false }
                                        help={ attributes[keyProp] ? 'Enable' : 'Disable' }
                                        checked={ attributes[keyProp] }
                                        onChange={ ( value ) =>
                                            setAttributes( { [keyProp]: value } )
                                        }
                                    />
                                </div>
                            );
                            break;

                        case 'image':

                            let imagePreview = !! ( attributes[keyProp] && typeof attributes[keyProp] == 'object' ) && (
                                <img
                                    key={ clientId + "-edit-image" }
                                    alt="Edit image"
                                    title="Edit image"
                                    className="edit-image-preview"
                                    src={ attributes[key].url }
                                />
                            );
                            let removeImage = '';
                            if ( imagePreview ) {
                                removeImage = (
                                    <Button
                                        key={ clientId + "-remove-image" }
                                        isSecondary
                                        isSmall
                                        className="block-library-cover__reset-button"
                                        onClick={ () =>
                                            setAttributes( { [keyProp]: undefined } )
                                        }
                                    >Remove</Button>
                                );
                            }

                            currentEditCat.push(
                                <div key={ clientId + "-" + keyProp + "-container" } >
                                    <MediaPlaceholder
                                        key={ clientId + "-" + keyProp }
                                        label={ valueProp.label }
                                        onSelect={ ( value ) =>
                                            setAttributes( { [keyProp]: {
                                                id: value.id,
                                                url: value.url
                                            } } )
                                        }
                                        allowedTypes= { [ 'image' ] }
                                        multiple= { false }
                                        disableMediaButtons={ false }
                                        mediaPreview={ imagePreview }
                                        value={ attributes[keyProp] }
                                    >
                                        { removeImage }
                                    </MediaPlaceholder>
                                </div>
                            );
                            
                            break;

                        case 'gallery':

                            let removeGallery = !! ( attributes[keyProp] && typeof attributes[keyProp] == 'object' ) && (
                                <Button
                                    key={ clientId + "-remove-gallery" }
                                    isSecondary
                                    isSmall
                                    className="block-library-cover__reset-button"
                                    onClick={ () =>
                                        setAttributes( { [keyProp]: undefined } )
                                    }
                                >Remove</Button>
                            );

                            currentEditCat.push(
                                <div key={ clientId + "-" + keyProp + "-container" } >
                                    <MediaPlaceholder
                                        key={ clientId + "-" + keyProp }
                                        label={ valueProp.label }
                                        onSelect={ ( value ) => {

                                                let newGallery = [];
                                                value.forEach(image => {
                                                    newGallery.push( {
                                                        id: image.id,
                                                        url: image.url
                                                    } )
                                                });
                                                setAttributes( { [keyProp]: newGallery } )
                                            }
                                        }
                                        allowedTypes= { [ 'image' ] }
                                        multiple= { true }
                                        disableMediaButtons={ false }
                                        addToGallery= { !! attributes[keyProp] }
                                        value={ attributes[keyProp] }
                                        isAppender={ true }
                                    >
                                        { removeGallery }
                                    </MediaPlaceholder>
                                </div>
                            );
                            
                            break;
                    }
                }

                if( keyCat == "default" ) {
                    editPlaceHolder.push(
                        <div>
                        { currentEditCat }
                        </div>
                    );
                }
                else {
                    editPlaceHolder.push(
                        <fieldset>
                            <legend>{ valCat.name }</legend>
                            { currentEditCat }
                        </fieldset>
                    );
                }
            }
    
            return (
                <>
                    <Placeholder
                        key={ clientId + "-placeholder" }
                        label={ element.name }
                        isColumnLayout={ true }
                    >
                        { editPlaceHolder }
                    </Placeholder>
                </>
            );
        },
        save: () => {
            return (
                <InnerBlocks.Content />
            );
        }
    } );
});