import { Component } from '@wordpress/element';

import ServerSideRender from '@wordpress/server-side-render';

import {
    MediaPlaceholder
} from '@wordpress/block-editor';

import {
    TextControl,
    TextareaControl,
    ToggleControl,
    Button,
    Placeholder
} from '@wordpress/components';

import frontspec from '../../../../../frontspec.json';

class WpeComponent extends Component {

	constructor() {
        super( ...arguments );
    }

    getAttribute( key ) {
		return this.props.attributes[key];
    }

    setAttributes( attributes ) {
		this.props.setAttributes( attributes );
    }
    
    renderTextControl( label, keyProp, isNumber = false, repeatable = false ) {

        if( !! repeatable ) {

            let currentValueAttribute = this.getAttribute(keyProp);
            if( typeof currentValueAttribute != "object" || currentValueAttribute.length == 0 )
                currentValueAttribute = [ "" ];

            let tempHtml = [];
            currentValueAttribute.forEach( ( valueRepeatableAttribute, indexRepeatableAttribute ) => {
                
                tempHtml.push(
                    <TextControl
                        key={ this.props.clientId + "-" + keyProp + "-" + indexRepeatableAttribute }
                        label={ label + " (" + indexRepeatableAttribute + ")" }
                        type={ !! isNumber ? "number" : "text" }
                        value={ valueRepeatableAttribute }
                        onChange={ ( value ) =>
                            this.setAttributes( { [keyProp]: currentValueAttribute.map( function( valueMapTemp, keyMapTemp ) {
                                if( keyMapTemp == indexRepeatableAttribute )
                                    return value;
                                
                                return valueMapTemp;
                            } ) } )
                        }
                    />
                );
            });

            return (
                <div key={ this.props.clientId + "-" + keyProp + "-container" } >
                    { tempHtml }
                    <Button
                        isSecondary
                        isSmall
                        onClick={ () =>
                            this.setAttributes( { [keyProp]: currentValueAttribute.concat([""]) } )
                        }
                    >Add</Button>
                </div>
            );

        }
        else{

            return (
                <div key={ this.props.clientId + "-" + keyProp + "-container" } >
                    <TextControl
                        key={ this.props.clientId + "-" + keyProp }
                        label={ label }
                        type={ !! isNumber ? "number" : "text" }
                        value={ this.getAttribute(keyProp) }
                        onChange={ ( value ) =>
                            this.setAttributes( { [keyProp]: parseInt( value, 10 ) } )
                        }
                    />
                </div>
            );
        }
    }

    render() {

        const { attributes, setAttributes, isSelected, clientId } = this.props;

        for (const key in frontspec.components) {
            if (frontspec.components.hasOwnProperty(key)) {
                const element = frontspec.components[key];

                if( this.props.name == "custom/wpe-component-" + element.id ) {

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
                    if( typeof element.props_categories != 'undefined' ) {
                        for (const [keyCatProps, valueCatProps] of Object.entries(element.props_categories)) {

                            catReOrder[valueCatProps.id] = { name: valueCatProps.name, props: {} }
                        }
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
                                        this.renderTextControl( valueProp.label, keyProp, false, valueProp.repeatable )
                                    );
                                    break;

                                case 'number':
                                    currentEditCat.push(
                                        this.renderTextControl( valueProp.label, keyProp, true, valueProp.repeatable )
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
                                                    this.setAttributes( { [keyProp]: value } )
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
                                            src={ attributes[keyProp].url }
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
                                    
                                    let galleryPreview = '';
                                    if( removeGallery ) {
                                        
                                        let ulGalleryPreview = [];
                                        attributes[keyProp].forEach(image => {
                                            ulGalleryPreview.push(
                                                <li className="blocks-gallery-item">
                                                    <img
                                                        key={ clientId + "-gallery-image" + image.id }
                                                        src={ image.url }
                                                    />
                                                </li>
                                            );
                                        });
                                        
                                        galleryPreview = (
                                            <figure className="wp-block-gallery columns-3">
                                                <ul className="blocks-gallery-grid">
                                                    { ulGalleryPreview }
                                                </ul>
                                            </figure>
                                        );
                                    }

                                    currentEditCat.push(
                                        <div key={ clientId + "-" + keyProp + "-container" } >
                                            { galleryPreview }
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
                }
            }
        }
    }
}

export default WpeComponent;