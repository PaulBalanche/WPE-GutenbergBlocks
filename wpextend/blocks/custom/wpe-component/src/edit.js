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

    updateAttributes( key, currentValue, keyNewValue, newValue, isNumber = false, repeatable = false ) {

        if( ! repeatable ) {
            newValue = !! isNumber ? parseInt( newValue, 10 ) : newValue;
        }
        else {
            newValue = currentValue.map( function( valueMapTemp, keyMapTemp ) {
                if( keyMapTemp == keyNewValue )
                    return !! isNumber ? parseInt( newValue, 10 ) : newValue;
                
                return valueMapTemp;
            } );
        }

        this.setAttributes( { [key]: newValue } );
    }
    
    renderControl( type, label, keyProp, repeatable = false ) {
        
        let blocReturned = [];
        let currentValueAttribute = this.getAttribute(keyProp);

        if( ! repeatable )
            currentValueAttribute = [ currentValueAttribute ];
        else if( typeof currentValueAttribute != "object" || currentValueAttribute.length == 0 )
            currentValueAttribute = [ "" ];

        for (const keyLoop in currentValueAttribute) {

            switch(type) {

                case 'string':
                    blocReturned.push( this.renderTextControl( this.props.clientId + "-" + keyProp + "-" + keyLoop, label, keyProp, currentValueAttribute, keyLoop, false, repeatable ) );
                    break;

                case 'number':
                    blocReturned.push( this.renderTextControl( this.props.clientId + "-" + keyProp + "-" + keyLoop, label, keyProp, currentValueAttribute, keyLoop, true, repeatable ) );
                    break;

                case 'text':
                    blocReturned.push( this.renderTextareaControl( this.props.clientId + "-" + keyProp + "-" + keyLoop, label, keyProp, currentValueAttribute, keyLoop, repeatable ) );
                    break;

                case 'boolean':
                    blocReturned.push( this.renderToggleControl( this.props.clientId + "-" + keyProp + "-" + keyLoop, label, 'Help', keyProp, currentValueAttribute, keyLoop, repeatable ) );
                    break;

                case 'image':
                    blocReturned.push( this.renderImageControl( this.props.clientId + "-" + keyProp + "-" + keyLoop, label, keyProp, currentValueAttribute, keyLoop, repeatable ) );
                    break;
                
                case 'gallery':
                    blocReturned.push( this.renderGalleryControl( this.props.clientId + "-" + keyProp + "-" + keyLoop, label, keyProp, currentValueAttribute, keyLoop, repeatable ) );
                    break;
            }
        }

        // Add repeatable button
        if( !! repeatable ) {
            blocReturned.push(
                <Button
                    key={ this.props.clientId + "-" + keyProp + "-add"}
                    isSecondary
                    isSmall
                    onClick={ () =>
                        this.setAttributes( { [keyProp]: currentValueAttribute.concat([""]) } )
                    }
                >Add</Button>
            );

            blocReturned = (
                <fieldset key={ this.props.clientId + "-" + keyProp + "-fieldsetContainer"} >
                    <legend key={ this.props.clientId + "-" + keyProp + "-fieldsetContainer-legend"} >{ label }</legend>
                    { blocReturned }
                </fieldset>
            );
        }

        // Return
        return (
            <>
                { blocReturned }
            </>
        );
    }

    renderTextControl( id, label, keyProp, objectValue, keyObjectValue, isNumber = false, repeatable = false ) {

        return (
            <TextControl
                key={ id }
                label={ ! repeatable ? label : false }
                type={ !! isNumber ? "number" : "text" }
                value={ objectValue[keyObjectValue] }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keyProp, objectValue, keyObjectValue, newValue, isNumber, repeatable)
                }
            />
        );
    }

    renderTextareaControl( id, label, keyProp, objectValue, keyObjectValue, repeatable = false ) {

        return (
            <TextareaControl
                key={ id }
                label={ ! repeatable ? label : false }
                value={ objectValue[keyObjectValue] }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keyProp, objectValue, keyObjectValue, newValue, false, repeatable)
                }
            />
        );
    }

    renderToggleControl( id, label, help, keyProp, objectValue, keyObjectValue, repeatable = false ) {

        return (
            <ToggleControl
                key={ id }
                label={ ! repeatable ? label : false }
                help={ help }
                checked={ objectValue[keyObjectValue] }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keyProp, objectValue, keyObjectValue, newValue, false, repeatable)
                }
            />
        );
    }

    renderImageControl( id, label, keyProp, objectValue, keyObjectValue, repeatable = false ) {

        let imagePreview = !! ( objectValue[keyObjectValue] && typeof objectValue[keyObjectValue] == 'object' ) && (
            <img
                key={ id + "-imagePreview" }
                alt="Edit image"
                title="Edit image"
                className="edit-image-preview"
                src={ objectValue[keyObjectValue].url }
            />
        );
        let removeImage = '';
        if ( imagePreview ) {
            removeImage = (
                <Button
                    key={ id + "-removeImage" }
                    isSecondary
                    isSmall
                    className="block-library-cover__reset-button"
                    onClick={ () =>
                        this.setAttributes( { [keyProp]: undefined } )
                    }
                >Remove</Button>
            );
        }

        return (
            <fieldset key={ id + "-fieldsetMediaPlaceholder"} >
                <legend key={ id + "-fieldsetMediaPlaceholder-legend"} >{ label }</legend>
                <MediaPlaceholder
                    key={ id }
                    labels={ { title: label } }
                    onSelect={ ( value ) =>
                        this.setAttributes( { [keyProp]: {
                            id: value.id,
                            url: value.url
                        } } )
                    }
                    allowedTypes= { [ 'image' ] }
                    mediaPreview={ imagePreview }
                    value={ objectValue[keyObjectValue] }
                    disableDropZone={ true }
                >
                    { removeImage }
                </MediaPlaceholder>
            </fieldset>
        );
    }

    renderGalleryControl( id, label, keyProp, objectValue, keyObjectValue, repeatable = false ) {

        let removeGallery = !! ( objectValue[keyObjectValue] && typeof objectValue[keyObjectValue] == 'object' ) && (
            <Button
                key={ id + "-removeGallery" }
                isSecondary
                isSmall
                className="block-library-cover__reset-button"
                onClick={ () => {

                        let countImages = objectValue[keyObjectValue].length;
                        if( countImages > 1 )
                            this.setAttributes( { [keyProp]: objectValue[keyObjectValue].slice(0, countImages - 1) } )
                        else
                            this.setAttributes( { [keyProp]: undefined } )
                    }
                }
            >Remove</Button>
        );
        
        let galleryPreview = '';
        if( removeGallery ) {
            
            let ulGalleryPreview = [];
            objectValue[keyObjectValue].forEach(image => {
                ulGalleryPreview.push(
                    <li
                        key={ id + "-galleryImageContainerLi" + image.id }
                        className="blocks-gallery-item"
                    >
                        <img
                            key={ id + "-galleryImage_" + image.id }
                            src={ image.url }
                        />
                    </li>
                );
            });
            
            let columns = objectValue[keyObjectValue].length;
            if( columns > 5 ) {
                columns = 5;
            }
            galleryPreview = (
                <figure 
                    key={ id + "-galleryImagefigure" }
                    className={ "wp-block-gallery columns-" + columns }
                >
                    <ul
                        key={ id + "-galleryImageContainerUl" }
                        className="blocks-gallery-grid"
                    >
                        { ulGalleryPreview }
                    </ul>
                </figure>
            );
        }

        return (
            <fieldset key={ id + "-fieldsetMediaPlaceholder"} >
                <legend key={ id + "-fieldsetMediaPlaceholder-legend"} >{ label }</legend>
                { galleryPreview }
                <MediaPlaceholder
                    key={ id }
                    labels={ { title: label } }
                    onSelect={ ( value ) => {

                            let newGallery = [];
                            value.forEach(image => {
                                newGallery.push( {
                                    id: image.id,
                                    url: image.url
                                } )
                            });
                            this.setAttributes( { [keyProp]: newGallery } )
                        }
                    }
                    allowedTypes= { [ 'image' ] }
                    multiple= { true }
                    addToGallery= { !! objectValue[keyObjectValue] }
                    value={ objectValue[keyObjectValue] }
                    disableDropZone={ true }
                >
                    { removeGallery }
                </MediaPlaceholder>
            </fieldset>
        );
    }

    /**
     * Render
     */
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
                            currentEditCat.push( this.renderControl( valueProp.type, valueProp.label, keyProp, valueProp.repeatable ) );
                        }

                        if( keyCat == "default" ) {
                            editPlaceHolder.push( 
                                <>
                                    { currentEditCat }
                                </>
                            );
                        }
                        else {
                            editPlaceHolder.push(
                                <fieldset key={ clientId + "-fieldsetCategory-" + keyCat } >
                                    <legend key={ clientId + "-fieldsetCategory-" + keyCat + "-legend" } >{ valCat.name }</legend>
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