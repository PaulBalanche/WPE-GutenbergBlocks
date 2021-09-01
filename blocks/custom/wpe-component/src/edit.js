import { Component } from '@wordpress/element';

import ServerSideRender from '@wordpress/server-side-render';

import { withSelect } from '@wordpress/data';

import { withState } from '@wordpress/compose';

import {
    MediaPlaceholder,
    RichText,
    InspectorControls,
    __experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';

import {
    TextControl,
    TextareaControl,
    ToggleControl,
    Button,
    Placeholder,
    TabPanel,
    Panel, PanelBody,
    SelectControl,
    RadioControl
} from '@wordpress/components';

import { MarginControls } from './_marginControls';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@paulbalanche/ckeditor5-build-classic-with-alignment';

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

    returnStringOrNumber( value, isNumber = false ) {
        return !! isNumber ? parseInt( value, 10 ) : value;
    }
    
    fileSizeFormat(filesizeInBytes) {

        if( filesizeInBytes > 1000000 )
            return Math.round( filesizeInBytes / 10000 ) / 100 + " Mo";
        else
            return Math.round(filesizeInBytes / 1000) + " Ko";
    }

    addEltToRepeatable(arrayKey, currentValueProp, currentValueRepeatableField, isNumber = false) {
        this.updateAttributes( arrayKey, currentValueProp, currentValueRepeatableField.concat(""), isNumber );
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
    
    renderControl( prop, keys, valueProp ) {

        let blocReturned = [];

        let repeatable = ( typeof prop.repeatable != "undefined" && !! prop.repeatable ) ? true : false;
        
        let currentValueAttribute = valueProp;
        keys.forEach(element => {

            if( typeof currentValueAttribute == 'object' ) {

                if ( currentValueAttribute.hasOwnProperty(element) && typeof currentValueAttribute[element] != "undefined" )
                    currentValueAttribute = currentValueAttribute[element];
                else
                    currentValueAttribute = "";
            }
        });

        if( ! repeatable )
            currentValueAttribute = [ currentValueAttribute ];
        else if( typeof currentValueAttribute != "object" || currentValueAttribute.length == 0 )
            currentValueAttribute = [ "" ];

        for (var keyLoop in currentValueAttribute) {

            keyLoop = this.returnStringOrNumber(keyLoop, true);

            let label = prop.label;
            if( repeatable ) {
                let index = keyLoop + 1;
                label = label + " " + index + "/" + currentValueAttribute.length;
            }

            let required_field = ( typeof prop.required != "undefined" && prop.required ) ? true : false;

            let fieldId = this.props.clientId + "-" + keys.join("-") + "-" + keyLoop;
            switch(prop.type) {

                case 'string':
                    blocReturned.push( this.renderTextControl( fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], false, repeatable, required_field ) );
                    break;

                case 'number':
                    blocReturned.push( this.renderTextControl( fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], true, repeatable, required_field ) );
                    break;

                case 'text':
                    blocReturned.push( this.renderTextareaControl( fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;
                
                case 'richText':
                    blocReturned.push( this.renderRichTextControl( fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;

                case 'wysiwyg':
                    blocReturned.push( this.renderWysiwygControl( fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;

                case 'boolean':
                    blocReturned.push( this.renderToggleControl( fieldId, label, prop.help, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;

                case 'select':
                    blocReturned.push( this.renderSelectControl( fieldId, label, prop.options, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;
                
                case 'radio':
                    blocReturned.push( this.renderRadioControl( fieldId, label, prop.options, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;

                case 'link':
                    blocReturned.push( this.renderLinkControl( fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;

                case 'relation':
                    blocReturned.push( this.renderRelationControl( fieldId, label, prop.entity, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;

                case 'image':
                    blocReturned.push( this.renderFileControl( prop.type, fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;
                
                case 'file':
                    blocReturned.push( this.renderFileControl( prop.type, fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;
                
                case 'gallery':
                    blocReturned.push( this.renderFileControl( prop.type, fieldId, label, repeatable ? keys.concat(keyLoop) : keys, valueProp, currentValueAttribute[keyLoop], repeatable, required_field ) );
                    break;

                case 'object':

                    if( typeof prop.props == "object" ) {
                        
                        let tempKeyObject = repeatable ? keys.concat(keyLoop) : keys;
                        let fieldsetObject = [];
                        for (const [keySubProp, valueSubProp] of Object.entries(prop.props)) {
                            fieldsetObject.push( this.renderControl( valueSubProp, tempKeyObject.concat(keySubProp), valueProp ) );
                        }
                        
                        if( repeatable ) {
                            label = (
                                <>
                                    { label }
                                    <Button
                                        key={ fieldId + "-repeatableRemoveElt" }
                                        isLink={true}
                                        className="removeRepeatable"
                                        onClick={ () =>
                                            this.removeEltRepeatable(tempKeyObject, valueProp)
                                        }
                                    >
                                        Remove
                                    </Button>
                                </>
                            );
                        }

                        blocReturned.push(
                            <Panel
                                key={ fieldId + "-panelObject"}
                            >
                                <PanelBody
                                    key={ fieldId + "-panelBodyObject"}
                                    title={ label }
                                    initialOpen={ false }
                                >
                                    <div
                                        key={ fieldId + "-panelBodyDivObject"}
                                        className="objectField components-base-control"
                                    >
                                        <div
                                            key={ fieldId + "-panelBodySubDivObject"}
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
                    key={ this.props.clientId + "-" + keys.join("-") + "-repeatableAddElt"}
                    isSecondary
                    isSmall
                    onClick={ () => 
                        this.addEltToRepeatable(keys, valueProp, currentValueAttribute, false)
                    }
                >Add</Button>
            );

            blocReturned = (
                <div
                    key={ this.props.clientId + "-" + keys.join("-") + "-repeatableContainer"}
                    className="repeatableField components-base-control"
                >   
                    { blocReturned }
                </div>
            );
        }
        else {
            blocReturned = (
                <div
                    key={ this.props.clientId + "-" + keys.join("-") + "-basicContainer"}
                    className="basicField"
                >
                    { blocReturned }
                </div>
            );
        }

        // Return
        return blocReturned;
    }

    renderTextControl( id, label, keys, valueProp, objectValue, isNumber = false, repeatable = false, required = false ) {

        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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
                    this.updateAttributes(keys, valueProp, newValue, isNumber)
                }
            />
        );
    }

    renderTextareaControl( id, label, keys, valueProp, objectValue, repeatable = false, required = false ) {

        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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
                    this.updateAttributes(keys, valueProp, newValue, false)
                }
            />
        );
    }
    
    renderRichTextControl( id, label, keys, valueProp, objectValue, repeatable = false, required = false ) {

        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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
            <div
                key={ id + "-RichTextComponentsBaseControl" }
                className="components-base-control"
            >
                <div
                    key={ id + "-RichTextComponentsBaseControlField" }
                    className="components-base-control__field"
                >
                    <div
                        key={ id + "-RichTextContainer" }
                        className="rich-text-container"
                    >
                        <div className="components-base-control__label" key={ id + "-label" }>{ label }</div>
                        <RichText
                            key={ id }
                            value={ objectValue } // Any existing content, either from the database or an attribute default
                            multiline={true}
                            onChange={ ( newValue ) =>
                                this.updateAttributes(keys, valueProp, newValue, false)
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
    
    renderWysiwygControl( id, label, keys, valueProp, objectValue, repeatable = false, required = false ) {

        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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

        let heading_options = [ { model: 'paragraph', title: 'Paragraph' } ];
        if( typeof this.props.frontspec_styles.typo.values == 'object') {
            for( const [key, val] of Object.entries(this.props.frontspec_styles.typo.values) ) {

                if( typeof val.type != 'undefined' && val.type == "block" && key != "paragraph") {
                    heading_options.push( {
                        model: key,
                        view: {
                            name: val.tag,
                            classes: val.class
                        },
                        title: val.name
                    } );
                }
            }
        }

        return (
            <div
                key={ id + "-WysiwygComponentsBaseControl" }
                className="components-base-control"
            >
                <div
                    key={ id + "-WysiwygComponentsBaseControlField" }
                    className="components-base-control__field"
                >
                    <div
                        key={ id + "-WysiwygContainer" }
                        className="wysiwyg-container"
                    >
                        <div className="components-base-control__label" key={ id + "-label" }>{ label }</div>
                        <CKEditor
                            editor={ ClassicEditor }
                            data={ objectValue }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                this.updateAttributes(keys, valueProp, data, false)
                            } }
                            config={ {
                                heading: {
                                    options: heading_options
                                }
                            } }
                        />
                    </div>
                </div>
            </div>
        );
    }
    
    renderLinkControl( id, label, keys, valueProp, objectValue, repeatable = false, required = false ) {
        
        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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

        const { text, url, opensInNewTab } = objectValue;
        return (
            <div
                key={ id + "-LinkControlComponentsBaseControl" }
                className="components-base-control"
            >
                <div
                    key={ id + "-LinkControlComponentsBaseControlField" }
                    className="components-base-control__field"
                >
                    <div
                        key={ id + "-LinkControlContainer" }
                        className="link-control-container"
                    >
                        <div className="components-base-control__label" key={ id + "-label" }>{ label }</div>
                        <TextControl
                            key={ id + "-text" }
                            label={ "Text" }
                            type={ "text" }
                            value={ text }
                            onChange={ ( newValue ) =>
                                this.updateAttributes(keys.concat('text'), valueProp, newValue, false)
                            }
                        />
                        <LinkControl
                            key={ id + "-LinkControl" }
                            className="wp-block-navigation-link__inline-link-input"
                            value={ { url, opensInNewTab } }
                            onChange={ ( {
                                url: newURL,
                                opensInNewTab: newOpensInNewTab,
                            } ) => {
                                this.updateAttributes(keys, valueProp, { text: text, url: newURL, opensInNewTab: newOpensInNewTab }, false)
                            } }
                        />
                    </div>
                </div>
            </div>
        );
    }

    renderSelectControl( id, label, options, keys, valueProp, objectValue, repeatable = false, required = false ) {

        if( typeof options == 'undefined' )
            return null;

        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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
            <SelectControl
                key={ id }
                label={ label }
                value={ objectValue }
                options={
                   [ { label: 'Choose...', value: '' } ].concat( options.map( function(value) {
                        return { label: value.label, value: value.value }
                    } ) )
                }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keys, valueProp, newValue, false)
                }
            />
        );
    }

    renderRadioControl( id, label, options, keys, valueProp, objectValue, repeatable = false, required = false ) {

        if( typeof options == 'undefined' )
            return null;

        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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

        const MyRadioControl = withState( {
            option: objectValue,
        } )( ( { option, setState } ) => (
            <RadioControl
                key={ id }
                label={ label }
                selected={ option }
                options={ options.map( function(value) {
                    return { label: value.label, value: value.value }
                } ) }
                onChange={ ( newValue ) => {
                    setState( { newValue } );
                    this.updateAttributes(keys, valueProp, newValue, false);
                } }
            />
        ) );

        return(
            <div
                key={ id + "-RadioControlComponentsBaseControl" }
                className="components-base-control"
            >
                <div
                    key={ id + "-RadioControlComponentsBaseControlField" }
                    className="components-base-control__field"
                >
                    <div
                        key={ id + "-RadioControlContainer" }
                        className="radio-control-container"
                    >
                        <MyRadioControl />
                    </div>
                </div>
            </div>
        );
    }

    renderRelationControl( id, label, entity, keys, valueProp, objectValue, repeatable = false, required = false ) {

        if( typeof entity == 'undefined' || typeof this.props.relations[entity] == 'undefined' || this.props.relations[entity] == null || Object.keys(this.props.relations[entity]).length == 0 )
            return null;

        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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
            <SelectControl
                key={ id }
                label={ label }
                value={ objectValue }
                options={ this.props.relations[entity].map( function(value) {
                        return { label: value.title.raw, value: value.id }
                    } )
                }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keys, valueProp, newValue, false)
                }
            />
        );
    }

    renderToggleControl( id, label, help, keys, valueProp, objectValue, repeatable = false, required = false ) {

        label = ( required ) ? label + '*' : label;

        if( repeatable ) {
            label = (
                <>
                    { label }
                    <Button
                        key={ id + "-repeatableRemoveElt" }
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
                help={ ( typeof help == 'object' && Array.isArray(help) && help.length == 2 ) ? ( !! objectValue ? help[1] : help[0] ) : false }
                checked={ objectValue }
                onChange={ ( newValue ) =>
                    this.updateAttributes(keys, valueProp, newValue, false)
                }
            />
        );
    }

    renderFileControl( type, id, label, keys, valueProp, objectValue, repeatable = false, required = false ) {

        label = ( required ) ? label + '*' : label;
        
        let preview = false;
        if( objectValue && typeof objectValue == 'object' ) {

            switch( type ) {
                case "image":
                    preview = (
                        <>
                            <img
                                key={ id + "-imagePreview" }
                                alt="Edit image"
                                title="Edit image"
                                className="edit-image-preview"
                                src={ objectValue.preview }
                            />
                        </>
                    );
                    break;

                case "file":
                    preview = (
                        <>
                            <img
                                key={ id + "-filePreview" }
                                alt="Edit file"
                                title="Edit file"
                                className="edit-file-preview"
                                src={ objectValue.preview }
                            />
                            <div
                                key={ id + "-fileDetails" }
                                className="file-details"
                            >
                                { objectValue.name }<br />
                                { objectValue.mime}<br />
                                { this.fileSizeFormat(objectValue.size) }
                            </div>
                        </>
                    );
                    break;

                case "gallery":
                    preview = [];
                    objectValue.forEach(image => {
                        preview.push(
                            <li
                                key={ id + "-galleryImageContainerLi" + image.id }
                                className="blocks-gallery-item"
                            >
                                <img
                                    key={ id + "-galleryImage_" + image.id }
                                    src={ image.preview }
                                />
                            </li>
                        );
                    });
                    
                    let columns = ( objectValue.length > 5 ) ? 5 : objectValue.length;
                    preview = (
                        <>
                            <figure 
                                key={ id + "-galleryImagefigure" }
                                className={ "wp-block-gallery columns-" + columns }
                            >
                                <ul
                                    key={ id + "-galleryImageContainerUl" }
                                    className="blocks-gallery-grid"
                                >
                                    { preview }
                                </ul>
                            </figure>
                        </>
                    );
                    break;
            }
            preview = (
                <div
                    key={ id + "-mediaPreviewContainer" }
                    className="media-preview-container"
                >
                    { preview }
                    <Button
                        key={ id + "-removeMedia" }
                        isSecondary
                        isSmall
                        className="reset-button"
                        onClick={ () => {
                                if( type == "gallery" && objectValue.length > 1 )
                                    this.setAttributes( { [keys]: objectValue.slice(0, objectValue.length - 1) } );
                                else if( repeatable )
                                    this.removeEltRepeatable( keys, valueProp );
                                else
                                    this.setAttributes( { [keys]: undefined } );
                            }
                        }
                    >Remove</Button>
                </div>
            );
        }
        
        return (
            <MediaPlaceholder
                key={ id }
                labels={ { title: label } }
                onSelect={ ( value ) => {

                    let newValue = undefined;
                    switch( type ) {
                        case "image":
                            if( typeof value.id != 'undefined' ) {
                                newValue = {
                                    id: value.id,
                                    preview: value.url
                                };
                            }
                            break;

                        case "file":
                            if( typeof value.id != 'undefined' ) {
                                newValue = {
                                    id: value.id,
                                    preview: value.icon,
                                    name: value.filename,
                                    mime: value.mime,
                                    size: value.filesizeInBytes
                                };
                            }
                            break;

                        case "gallery":
                            newValue = [];
                            value.forEach(image => {
                                if( typeof image.id != 'undefined' ) {
                                    newValue.push( {
                                        id: image.id,
                                        preview: image.url
                                    } )
                                }
                            });
                            break;
                    }

                    if( typeof newValue != 'undefined' && ( typeof newValue != 'object' || Object.keys(newValue).length > 0 ) )
                        this.updateAttributes(keys, valueProp, newValue, false);
                } }
                multiple= { type == 'gallery' }
                addToGallery= { type == 'gallery' && !! objectValue }
                value={ objectValue }
                disableDropZone={ true }
            >{ preview }</MediaPlaceholder>
        );
    }

    /**
     * Render
     */
    render() {

        const { attributes, isSelected, clientId, element, current_user_can_edit_posts, experimentalDeviceType } = this.props;

        // Because of ID will be not saved to the block’s comment delimiter default attribute, we manually set it.
        if( typeof attributes.id_component == 'undefined' )
            this.setAttributes( { id_component: element.id } );

        // Visual mode
        if( ! isSelected || ! parseInt(current_user_can_edit_posts) ) {

            return (
                <ServerSideRender
                    key={ clientId + "-serverSideRender" }
                    block={ "custom/wpe-component-" + element.id }
                    attributes={ Object.assign(attributes, { "editor": true } ) }
                />
            );
        }

        var editPlaceHolder = '';
        
        if( typeof element.props == 'object' && Object.keys(element.props).length > 0 ) {

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
        
            if( tabPanel.length > 1 ) {
                
                editPlaceHolder = (
                    <>
                        <TabPanel
                            key={ clientId + "-tabPanel" }
                            className="tab-panel-wpe-component"
                            activeClass="active-tab"
                            tabs={ tabPanel }
                        >
                            { ( tabPanel ) => tabPanel.content }
                        </TabPanel>
                    </>
                );
            }
            else {
                editPlaceHolder = tabPanel[0].content;
            }
        }

        return (
            <>
                <InspectorControls>
                    <MarginControls props={ this.props } deviceType={ experimentalDeviceType } />
                </InspectorControls>
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

export default (element, current_user_can_edit_posts, frontspec_styles ) => withSelect( ( select, props ) => {

    const { getEntityRecords } = select( 'core' );
    const { __experimentalGetPreviewDeviceType } = select( 'core/edit-post' );
    let relations = [];

    if( props.name == "custom/wpe-component-" + element.id ) {

        // Loop Props
        for (const [keyProp, valueProp] of Object.entries(element.props)) {

            if( valueProp.type == 'relation' && typeof valueProp.entity != 'undefined' && relations[ valueProp.entity ] == null ) {
                relations[ valueProp.entity ] = getEntityRecords( 'postType', valueProp.entity );
            }
        }
    }

    return {
        relations: relations,
        element,
        current_user_can_edit_posts: current_user_can_edit_posts,
        frontspec_styles: frontspec_styles,
        experimentalDeviceType: __experimentalGetPreviewDeviceType()
    };
} )( WpeComponent )