import { createBlock, registerBlockType } from '@wordpress/blocks';
import ServerSideRender from '@wordpress/server-side-render';

import {
    InnerBlocks,
    InspectorControls,
    __experimentalBlock as Block
} from '@wordpress/block-editor';

import frontspec from '../../../../../frontspec.json';

import {
    PanelBody,
    HorizontalRule,
    TextControl,
    TextareaControl,
    ToggleControl
} from '@wordpress/components';

frontspec.components.forEach( ( element ) => {

    var initAttributes = {};

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
        }
    }

    registerBlockType( 'custom/wpe-component-' + element.id, {
        title: element.name,
        attributes: initAttributes,
        edit: ( props ) => {
            const { attributes, setAttributes, className } = props;

            var inspector = [];
            var indice = 0;
            for (const [key, value] of Object.entries(element.props)) {
                
                if( indice > 0 ) {
                    inspector.push(
                        <HorizontalRule key={ key } />
                    );
                }
                
                switch( value.type ) {
                    case 'string':
                        inspector.push(
                            <TextControl
                                key={ key }
                                label={ value.label }
                                value={ attributes[key] }
                                onChange={ ( value ) =>
                                    setAttributes( { [key]: value } )
                                }
                            />
                        );
                        break;

                    case 'number':
                        inspector.push(
                            <TextControl
                                key={ key }
                                label={ value.label }
                                type="number"
                                value={ attributes[key] }
                                onChange={ ( value ) =>
                                    setAttributes( { [key]: parseInt( value, 10 ) } )
                                }
                            />
                        );
                        break;
            
                    case 'text':
                        inspector.push(
                            <TextareaControl
                                key={ key }
                                label={ value.label }
                                value={ attributes[key] }
                                onChange={ ( value ) =>
                                    setAttributes( { [key]: value } )
                                }
                            />
                        );
                        break;
    
                    case 'boolean':
                        inspector.push(
                            <ToggleControl
                                key={ key }
                                label={ value.label }
                                help={ 'Help text' }
                                checked={ false }
                                help={ attributes[key] ? 'Enable' : 'Disable' }
                                checked={ attributes[key] }
                                onChange={ ( value ) =>
                                    setAttributes( { [key]: value } )
                                }
                            />
                        );
                        break;
                }

                indice++;
            }
    
            // images: {
            //     type: 'array',
            //     label: 'Images'
            // },
            // object: {
            //     type: 'object',
            //     label: 'Object'
            // },
    
            return (
                <>
                    <InspectorControls>
                        <PanelBody>
                            { inspector }
                        </PanelBody>
                    </InspectorControls>
                    <ServerSideRender
                        block={ "custom/wpe-component-" + element.id }
                        attributes={ attributes }
                    />
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