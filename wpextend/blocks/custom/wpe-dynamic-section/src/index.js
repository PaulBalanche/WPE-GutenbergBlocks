import { createBlock, registerBlockType } from '@wordpress/blocks';


import {
    InnerBlocks,
    InspectorControls,
    __experimentalBlock as Block
} from '@wordpress/block-editor';

import { withSelect, dispatch } from '@wordpress/data';

import frontspec from '../../../../../frontspec.json';

/**
 * Internal dependencies
 */
import metadata from '../block.json';

import {
    PanelBody,
    HorizontalRule,
    TextControl,
    TextareaControl,
    ToggleControl
} from '@wordpress/components';

const attributesComponent= {
    title: {
        type: 'string',
        label: 'Title'
    },
    description: {
        type: 'text',
        label: 'Description'
    },
    enabled: {
        type: 'boolean',
        label: 'Enabled ?'
    },
    images: {
        type: 'array',
        label: 'Images'
    },
    object: {
        type: 'object',
        label: 'Object'
    },
    order: {
        type: 'number',
        label: 'Order'
    }
};

var initAttributes = {};
for (const [key, value] of Object.entries(attributesComponent)) {

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

frontspec.layouts.forEach( ( element ) => {

    registerBlockType( metadata.name + '-' + element.id, {
        title: element.name,
        attributes: metadata.attributes,
        supports: metadata.supports,
        edit: withSelect( ( select, props ) => {
                return {
                    inner_blocks: select('core/block-editor').getBlocks(props.clientId),
                };
            
            } )
            ( ( { attributes, setAttributes, inner_blocks, clientId } ) => {

                if( typeof(inner_blocks ) != 'object' || ( typeof(inner_blocks ) == 'object' && inner_blocks.length == 0 ) ) {

                    var new_inner_blocks = [];
                    element.blocks.forEach( ( block, index ) => {

                        new_inner_blocks.push( createBlock('custom/wpe-simple-wrapper', { "element": "div", "class": block.class }) );
                    });
                    dispatch( 'core/block-editor' ).replaceInnerBlocks(clientId, new_inner_blocks, false);
                }

                
                var inspector = [];
                for (const [key, value] of Object.entries(attributesComponent)) {
        
                    inspector.push(
                        <HorizontalRule key={ key } />
                    );
                    
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
                }
        
                // images: {
                //     type: 'array',
                //     label: 'Images'
                // },
                // object: {
                //     type: 'object',
                //     label: 'Object'
                // },
                // order: {
                //     type: 'number',
                //     label: 'Order'
                // }
        
                return (
                    <>
                        <InspectorControls>
                            <PanelBody>
                                { inspector }
                            </PanelBody>
                        </InspectorControls>
                        <InnerBlocks
                            allowedBlocks={ [ 'custom/wpe-simple-wrapper' ] }
                            __experimentalTagName={ Block[element.tag] }
                            __experimentalPassedProps={ {
                                className: element.class,
                            } }
                            renderAppender={ false }
                        />
                    </>
                );
        } ),
        save: () => {
            return (
                <section className={ element.class } >
			        <InnerBlocks.Content />
                </section>
            );
        }
    } );
});