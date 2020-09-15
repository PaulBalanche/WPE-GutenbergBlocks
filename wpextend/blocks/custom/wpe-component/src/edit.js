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
    Placeholder,
    TabPanel,
    Panel, PanelBody, PanelRow
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

    addEltToRepeatable(arrayKey, currentValueProp, currentValueRepeatableField, isNumber = false) {
        this.updateAttributes( arrayKey, currentValueProp, currentValueRepeatableField.concat( [ undefined ] ), isNumber );
    }

    removeEltRepeatable(arrayKey, currentValueProp) {
        this.updateAttributes( arrayKey, currentValueProp, false );
    }

    updateAttributes( arrayKey, currentValue, newValue, isNumber = false ) {

        let keyToUpdate = arrayKey[0];
        let newValueToUpdate = this.recursiveUpdateObjectFromObject(arrayKey, currentValue, newValue, isNumber);

        this.setAttributes( { [keyToUpdate]: newValueToUpdate[keyToUpdate] } );
    }

    recursiveUpdateObjectFromObject( arrayKey, fromObject, newValue, isNumber = false ) {

        const firstElement = arrayKey.shift();

        if( typeof fromObject != 'object' || ( Array.isArray(fromObject) && typeof firstElement == 'string' ) || ( ! Array.isArray(fromObject) && typeof firstElement == 'number' ) )
            fromObject = ( typeof firstElement == 'string' ) ? {} : [];
    
        let objectReturned = ( Array.isArray(fromObject) ) ? [] : {};

        for( const [key, val] of Object.entries(fromObject) ) {
            if( key == firstElement ) {
                if( arrayKey.length > 0 )
                    objectReturned[key] = this.recursiveUpdateObjectFromObject(arrayKey, val, newValue, isNumber);
                else if( !! newValue )
                    objectReturned[key] = this.returnStringOrNumber(newValue, isNumber);
            }
            else
                objectReturned[key] = val;
        }

        if( typeof objectReturned[firstElement] == 'undefined' ) {

            if( arrayKey.length > 0 )
                objectReturned[firstElement] = this.recursiveUpdateObjectFromObject(arrayKey, undefined, newValue, isNumber);
            else if( !! newValue )
                objectReturned[firstElement] = this.returnStringOrNumber(newValue, isNumber);
        }

        // Re-index in case of element suppression
        if( arrayKey.length == 0 && ! newValue ) {
            for (let index = 0; index < objectReturned.length; index++) {
                if( typeof objectReturned[index] == 'undefined' )
                    objectReturned.splice(index, 1);
            }
        }
        
        return objectReturned;
    }

    returnStringOrNumber( value, isNumber = false ) {
        return !! isNumber ? parseInt( value, 10 ) : value;
    }
    
    renderControl( prop, keys, valueProp ) {

        let blocReturned = [];

        let repeatable = ( typeof prop.repeatable != "undefined" && !! prop.repeatable ) ? true : false;
        
        let currentValueAttribute = valueProp;
        keys.forEach(element => {

            if( typeof currentValueAttribute == 'object' )
                currentValueAttribute = currentValueAttribute[element];
            else
                currentValueAttribute = currentValueAttribute;
        });

        if( ! repeatable )
            currentValueAttribute = [ currentValueAttribute ];
        else if( typeof currentValueAttribute != "object" || currentValueAttribute.length == 0 )
            currentValueAttribute = [ "" ];

        for (var keyLoop in currentValueAttribute) {

            keyLoop = this.returnStringOrNumber(keyLoop, true);

            let fieldId = this.props.clientId + "-" + keys[0] + "-" + keyLoop;
            switch(prop.type) {

                case 'string':
                    blocReturned.push( this.renderTextControl( fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], false, repeatable ) );
                    break;

                case 'number':
                    blocReturned.push( this.renderTextControl( fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], true, repeatable ) );
                    break;

                case 'text':
                    blocReturned.push( this.renderTextareaControl( fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable ) );
                    break;

                case 'boolean':
                    blocReturned.push( this.renderToggleControl( fieldId, prop.label, 'Help', repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable ) );
                    break;

                case 'image':
                    blocReturned.push( this.renderImageControl( fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable ) );
                    break;
                
                case 'gallery':
                    blocReturned.push( this.renderGalleryControl( fieldId, prop.label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable ) );
                    break;

                case 'object':

                    if( typeof prop.props == "object" ) {

                        let fieldsetObject = [];
                        for (const [keySubProp, valueSubProp] of Object.entries(prop.props)) {
                            fieldsetObject.push( this.renderControl( valueSubProp, repeatable ? keys.concat(keyLoop).concat(keySubProp) : keys.concat(keySubProp) , valueProp ) );
                        }

                        let labelObject = prop.label;
                        if( repeatable ) {
                            let index = keyLoop + 1;
                            labelObject = prop.label + " " + index + "/" + currentValueAttribute.length;
                        }
                        
                        blocReturned.push(
                            <Panel>
                                <PanelBody title={ labelObject } initialOpen={ false }>
                                    <div
                                        key={ this.props.clientId + "-" + keys[0] + "-objectContainer"}
                                        className="objectField components-base-control"
                                    >
                                        <div
                                            key={ this.props.clientId + "-" + keys[0] + "-objectContainer-content"}
                                            className="objectField-content"
                                        > 
                                        { fieldsetObject }
                                    </div>
                                </div>
                                </PanelBody>
                            </Panel>
                        );
                    }
                    break;
            }
        }

        // Add repeatable button
        if( !! repeatable ) {
            blocReturned.push(
                <Button
                    key={ this.props.clientId + "-" + keys[0] + "-add"}
                    isSecondary
                    isSmall
                    onClick={ () => 
                        this.addEltToRepeatable(keys, valueProp, currentValueAttribute, false)
                    }
                >Add</Button>
            );

            blocReturned = (
                <div
                    key={ this.props.clientId + "-" + keys[0] + "-repeatableContainer"}
                    className="repeatableField components-base-control"
                >   
                    { blocReturned }
                </div>
            );
        }
        else {
            blocReturned = (
                <div
                    key={ this.props.clientId + "-" + keys[0] + "-basicContainer"}
                    className="basicField"
                >
                    { blocReturned }
                </div>
            );
        }

        // Return
        return (
            <>
                { blocReturned }
            </>
        );
    }

    renderTextControl( id, label, keys, valueProp, objectValue, isNumber = false, repeatable = false) {

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        isLink={true}
                        className="removeRepeatable"
                        onClick={ () =>
                            this.removeEltRepeatable(keys, valueProp)
                        }
                    >
                        Remove
                    </Button>
                </>
            );
        }

        return (
            <TextControl
                key={ id }
                label={ label }
                type={ !! isNumber ? "number" : "text" }
                value={ objectValue }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keys, valueProp, newValue, isNumber, repeatable)
                }
            />
        );
    }

    renderTextareaControl( id, label, keys, valueProp, objectValue, repeatable = false) {

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        isLink={true}
                        className="removeRepeatable"
                        onClick={ () =>
                            this.removeEltRepeatable(keys, valueProp)
                        }
                    >
                        Remove
                    </Button>
                </>
            );
        }

        return (
            <TextareaControl
                key={ id }
                label={ label }
                value={ objectValue }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keys, valueProp, newValue, false, repeatable)
                }
            />
        );
    }

    renderToggleControl( id, label, help, keys, valueProp, objectValue, repeatable = false ) {

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        isLink={true}
                        className="removeRepeatable"
                        onClick={ () =>
                            this.removeEltRepeatable(keys, valueProp)
                        }
                    >
                        Remove
                    </Button>
                </>
            );
        }

        return (
            <ToggleControl
                key={ id }
                label={ label }
                help={ help }
                checked={ objectValue }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keys, valueProp, newValue, false, repeatable)
                }
            />
        );
    }

    renderImageControl( id, label, key, valueProp, objectValue, repeatable = false ) {

        let imagePreview = !! ( objectValue && typeof objectValue == 'object' ) && (
            <img
                key={ id + "-imagePreview" }
                alt="Edit image"
                title="Edit image"
                className="edit-image-preview"
                src={ objectValue.url }
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
                        this.setAttributes( { [key]: undefined } )
                    }
                >Remove</Button>
            );
        }

        return (
            <MediaPlaceholder
                key={ id }
                labels={ { title: label } }
                onSelect={ ( value ) =>
                    this.setAttributes( { [key]: {
                        id: value.id,
                        url: value.url
                    } } )
                }
                allowedTypes= { [ 'image' ] }
                mediaPreview={ imagePreview }
                value={ objectValue }
                disableDropZone={ true }
            >
                { removeImage }
            </MediaPlaceholder>
        );
    }

    renderGalleryControl( id, label, key, valueProp, objectValue, repeatable = false ) {

        let removeGallery = !! ( objectValue && typeof objectValue == 'object' ) && (
            <Button
                key={ id + "-removeGallery" }
                isSecondary
                isSmall
                className="block-library-cover__reset-button"
                onClick={ () => {

                        let countImages = objectValue.length;
                        if( countImages > 1 )
                            this.setAttributes( { [key]: objectValue.slice(0, countImages - 1) } )
                        else
                            this.setAttributes( { [key]: undefined } )
                    }
                }
            >Remove</Button>
        );
        
        let galleryPreview = '';
        if( removeGallery ) {
            
            let ulGalleryPreview = [];
            objectValue.forEach(image => {
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
            
            let columns = objectValue.length;
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
            <>
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
                            this.setAttributes( { [key]: newGallery } )
                        }
                    }
                    allowedTypes= { [ 'image' ] }
                    multiple= { true }
                    addToGallery= { !! objectValue }
                    value={ objectValue }
                    disableDropZone={ true }
                >
                    { removeGallery }
                </MediaPlaceholder>
            </>
        );
    }

    /**
     * Render
     */
    render() {

        const { attributes, isSelected, clientId } = this.props;

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
                            catReOrder.default.props[keyProp] = valueProp;
                        }
                    }

                    // 3. Remove empty category
                    for (const [keyProp, valueProp] of Object.entries(catReOrder)) {

                        if( Object.keys(catReOrder[keyProp].props).length == 0 ) {
                            delete catReOrder[keyProp];
                        }
                    }

                    // 4. Render
                    var tabPanel = [];
                    for (const [keyCat, valCat] of Object.entries(catReOrder)) {
                        
                        if( valCat.props.length == 0 )
                            continue;
                        
                        let currentEditCat = [];

                        for (const [keyProp, prop] of Object.entries(valCat.props)) {
                            let valueProp = this.getAttribute( keyProp );
                            currentEditCat.push( this.renderControl( prop, [ keyProp ], { [keyProp]: valueProp } ) );
                        }

                        if( keyCat == "default" ) {

                            tabPanel.push( {
                                name: keyCat,
                                title: "Default",
                                content: currentEditCat
                            } );
                        }
                        else {

                            tabPanel.push( {
                                name: keyCat,
                                title: valCat.name,
                                content: currentEditCat
                            } );
                        }
                    }

                    var editPlaceHolder = '';
                    if( tabPanel.length > 1 ) {
                        
                        editPlaceHolder = (
                            <>
                                <TabPanel
                                    className="tab-panel-wpe-component"
                                    activeClass="active-tab"
                                    tabs={ tabPanel }>
                                    {
                                        ( tabPanel ) => <> { tabPanel.content } </>
                                    }
                                </TabPanel>
                            </>
                        );
                    }
                    else {
                        editPlaceHolder = tabPanel[0].content;
                    } 

                    return (
                        <>
                            <Placeholder
                                key={ clientId + "-placeholder" }
                                label={ element.name }
                                isColumnLayout={ true }
                                className="wpe-component_edit_placeholder"
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