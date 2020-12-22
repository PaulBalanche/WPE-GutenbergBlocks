/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
    InnerBlocks,
    InspectorControls,
    MediaPlaceholder,
    __experimentalBlockVariationPicker,
    __experimentalBlock as Block
} from '@wordpress/block-editor';

import {
    PanelBody,
    SelectControl,
    Button
} from '@wordpress/components';

import { withSelect } from '@wordpress/data';
import { map } from 'lodash';

import { MarginControls, generateMarginClassName } from '../../wpe-component/src/_marginControls';

/**
 * Add some columns in wpe-container based on variation selected
 *
 */
function createBlocksFromInnerBlocksTemplate ( innerBlocksTemplate ) {

    return map(
        innerBlocksTemplate,
        ( { name, attributes } ) =>
            createBlock(
                name,
                attributes
            )
    );
}

/**
 * registerBlockType edit function
 */
class WpeContainer extends Component {

	constructor() {
        super( ...arguments );
    }

    render() {

        var {
			attributes,
			setAttributes,
			className,
			backgroundData
        } = this.props;
        
        // Padding & Margin
        className = generateMarginClassName(this.props);     
        
        let sectionStyle = {};

        // Custom style section
        if( backgroundData !== null && typeof backgroundData != 'undefined' && backgroundData.media_type == 'image' ) {
            Object.assign(sectionStyle, {
                background: 'url(' + backgroundData.media_details.sizes.thumbnail.source_url + ') no-repeat center center',
                backgroundSize: 'cover'
            });
        }

        // Section background
        const titleMediaPlaceholder = ( backgroundData !== null && typeof backgroundData != 'undefined' ) ? backgroundData.media_type == 'image' ? 'Edit image' : backgroundData.title.raw + ' (' + backgroundData.mime_type + ')' : 'Image/Video';
        const mediaPreview = !! backgroundData && (
            <img
                alt={ titleMediaPlaceholder }
                title={ titleMediaPlaceholder }
                className={ 'edit-image-preview' }
                src={ backgroundData.media_type == 'image' ? backgroundData.media_details.sizes.thumbnail.source_url : '/wp/wp-includes/images/media/video.png' }
            />
        );
        const removeButton = !! backgroundData && (
            <Button isLarge onClick={ () => { setAttributes( { backgroundFile: null, backgroundType: null } ); } }>
                { 'Remove' }
            </Button>
        );
        const mediaPlaceholder = (
            <MediaPlaceholder
                onSelect={
                    ( el ) => {
                        setAttributes( { backgroundFile: el.id, backgroundType: el.type } );
                    }
                }
                allowedTypes= { [ 'image', 'video' ] }
                multiple= { false }
                labels={ { title: titleMediaPlaceholder } }
                mediaPreview = { mediaPreview }
                value={ { id: attributes.backgroundFile } }
                disableMediaButtons={ false }>
                { removeButton }
            </MediaPlaceholder>
        );



        /**
         * Style
         */
        if( typeof attributes.style != 'undefined' && attributes.style != '' )
            className += ' st-' + attributes.style;



        /**
         * Render
         */
        return (
            <>
                <InspectorControls>
                    <PanelBody title={ 'Style' } initialOpen={ false }>
                        <SelectControl
                            label="Style"
                            value={ attributes.style }
                            options={ [
                                { label: 'Default', value: '' },
                                { label: 'Light', value: 'light' },
                                { label: 'Dark', value: 'dark' }
                            ] }
                            onChange={ ( value ) =>
                                setAttributes( { style: value } )
                            }
                        />
                    </PanelBody>
                    <PanelBody title={ 'Background' } initialOpen={ false }>
                        { mediaPlaceholder }
                    </PanelBody>
                    <MarginControls props={ this.props }/>
                </InspectorControls>
                <InnerBlocks
                    __experimentalTagName={ Block.div }
                    __experimentalPassedProps={ {
                        className: className,
                        style: sectionStyle
                    } }
                    renderAppender={ () => (
                        <InnerBlocks.ButtonBlockAppender />
                    ) }
                />
            </>
        );
    }
}

export default compose( [
	withSelect( ( select, props ) => {

        return {
            backgroundData: ! props.attributes.backgroundFile ? null : select('core').getEntityRecord('postType', 'attachment', props.attributes.backgroundFile )
        };
    } ),
] )( WpeContainer );