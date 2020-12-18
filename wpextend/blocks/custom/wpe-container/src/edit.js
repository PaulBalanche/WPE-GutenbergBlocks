/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { Component } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
    InnerBlocks,
    InspectorControls,
    BlockControls,
    MediaPlaceholder,
    __experimentalBlockVariationPicker,
    __experimentalBlock as Block
} from '@wordpress/block-editor';

import {
    PanelBody,
    SelectControl,
    Button,
    ButtonGroup,
    RangeControl,
    Dropdown,
    ToolbarGroup,
    MenuGroup,
    MenuItem,
    HorizontalRule
} from '@wordpress/components';

import { withSelect, dispatch } from '@wordpress/data';
import { get, map, times } from 'lodash';
import { mobile, tablet, desktop } from '@wordpress/icons';

import * as blockConfig from '../../../../json/wpe-container_config.json';
const configTotalColumns = blockConfig.totalColumns;

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

    getMargin(type) {
        let currentMargin = this.props.attributes.margin;
        if( typeof currentMargin == 'object' && currentMargin.hasOwnProperty(type) ) {
            return currentMargin[type];
        }
        
        return null;
    }

    setMargin( type, value ) {
        let currentMargin = this.props.attributes.margin;
        if( typeof currentMargin == 'undefined' ) {
            currentMargin = {};
        }
        this.props.setAttributes( { margin: Object.assign(currentMargin, { [type]: value }) } )
    }

    render() {

        var {
			attributes,
			setAttributes,
			className,
			backgroundData
        } = this.props;
            
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
         * Padding & Margin
         */
        if( typeof attributes.margin == 'object' ) {        
            for( const [key, value] of Object.entries(attributes.margin) ) {
                switch( value ) {
                    case 0:
                        className += ' ' + key + '-none';
                        break;
                    case 1:
                        className += ' ' + key + '-smaller';
                        break;
                    case 2:
                        className += ' ' + key + '-small';
                        break;
                    case 3:
                        className += ' ' + key + '-medium';
                        break;
                    case 4:
                        className += ' ' + key + '-big';
                        break;
                    case 5:
                        className += ' ' + key + '-bigger';
                        break;
                }
            }
        }



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
                    <PanelBody title={ 'Padding/Margin' } initialOpen={ false }>
                        <RangeControl
                            label="Padding Top"
                            value={ this.getMargin('pt') }
                            onChange={ ( value ) => 
                                this.setMargin('pt', value)
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Padding Bottom"
                            value={ this.getMargin('pb') }
                            onChange={ ( value ) =>
                                this.setMargin('pb', value)
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Margin Top"
                            value={ this.getMargin('mt') }
                            onChange={ ( value ) =>
                                this.setMargin('mt', value)
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Margin Bottom"
                            value={ this.getMargin('mb') }
                            onChange={ ( value ) =>
                                this.setMargin('mb', value)
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                    </PanelBody>
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