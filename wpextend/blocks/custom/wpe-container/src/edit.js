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
    TextControl,
    Dropdown,
    ToolbarGroup,
    MenuGroup,
    MenuItem
} from '@wordpress/components';

import { withSelect, dispatch, useDispatch } from '@wordpress/data';
import { get, map, times } from 'lodash';
import { mobile, tablet, desktop } from '@wordpress/icons';

import * as blockConfig from '../../../../json/wpe-container_config.json';
const configTotalColumns = blockConfig.totalColumns;

/**
 * Some constants
 */
const ALLOWED_BLOCKS = [ 'custom/wpe-column' ];

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


const getLayouts = () => ( [
	{ value: 'desktop', label: 'Desktop', attributeName: 'Desktop', icon: desktop },
	{ value: 'tablet', label: 'Tablet', attributeName: 'Tablet', icon: tablet  },
	{ value: 'mobile', label: 'Mobile', attributeName: 'Mobile', icon: mobile },
] );

/**
 * registerBlockType edit function
 */
class WpeContainer extends Component {

	constructor() {
        super( ...arguments );

        this.state = {
			selectedDevice: getLayouts()[0].value
		};
    }

    getDeviceType() {
		return this.state.selectedDevice;
    }


    setDeviceType(deviceType) {
        this.setState( { selectedDevice: deviceType } );
    }

    render() {

        var {
			attributes,
			setAttributes,
			className,
			backgroundData,
            clientId,
            inner_blocks,
            countColumns,
            blockVariations,
            blockType
        } = this.props;
        
        const deviceType = this.getDeviceType();

        className += ' ' + deviceType;       

        // Custom style section
        let sectionStyle = {};
        if( backgroundData !== null && typeof backgroundData != 'undefined' && backgroundData.media_type == 'image' ) {
            sectionStyle = {
                background: 'url(' + backgroundData.media_details.sizes.thumbnail.source_url + ') no-repeat center center',
                backgroundSize: 'cover'
            };
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
        [
            { name: 'paddingTop', prefix: 'pt', default: 3 },
            { name: 'paddingBottom', prefix: 'pb', default: 3 },
            { name: 'marginTop', prefix: 'mt', default: 0 },
            { name: 'marginBottom', prefix: 'mb', default: 0 }
        ].forEach( ( attribute ) => {

            switch( attributes[attribute.name] ) {

                case 0:
                    className += ' ' + attribute.prefix + '-none';
                    break;
        
                case 1:
                    className += ' ' + attribute.prefix + '-smaller';
                    break;
        
                case 2:
                    className += ' ' + attribute.prefix + '-small';
                    break;
        
                case 3:
                    className += ' ' + attribute.prefix + '-medium';
                    break;
        
                case 4:
                    className += ' ' + attribute.prefix + '-big';
                    break;
        
                case 5:
                    className += ' ' + attribute.prefix + '-bigger';
                    break;
        
                default:
                    attributes[attribute.name] = attribute.default;
            }
        });


        
        /**
         * Define innerBlocks
         */
        if( typeof(inner_blocks ) != 'object' || ( typeof(inner_blocks ) == 'object' && countColumns == 0 ) ) {

            var editDisplay = (
                <__experimentalBlockVariationPicker
                    icon={ get( blockType, [ 'icon', 'src' ] ) }
                    label={ get( blockType, [ 'title' ] ) }
                    variations={ blockVariations }
                    onSelect={ ( nextVariation ) => {
                        if ( nextVariation.innerBlocks ) {
                            dispatch( 'core/block-editor' ).replaceInnerBlocks(
                                clientId,
                                createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks ),
                                false
                            );
                        }
                        if( nextVariation.attributes ) {
                            dispatch('core/editor').updateBlockAttributes( clientId, nextVariation.attributes );
                        }
                    } }
                />
            );
        }
        else {

            const css = `.block-editor-block-list__layout{ grid-template-columns: repeat(` + configTotalColumns + `, [col-start] 1fr); }`

            var editDisplay = (
                <div className={ className } style={ sectionStyle }>
                    <style>{css}</style>
                    <InnerBlocks
                        allowedBlocks={ ALLOWED_BLOCKS }
                        renderAppender={ false }
                    />
                </div>
            );
        }
        
        

        /**
         * 
         */
        var gridForm = null;
        getLayouts().forEach( ( layout ) => {

            if( layout.value === deviceType ) {
                
                gridForm = (
                    <TextControl
                        value={ attributes['grid' + layout.attributeName] }
                        onChange={ ( val ) => {
                            setAttributes( { ['grid' + layout.attributeName]: val } );
                        }}
                        onBlur={ updateGrid }
                        help="For example: 3-3-3-3 or 6-6"
                    />
                );
            }
        });


        /**
         * Update grid
         */
        function updateGrid() {

            // Some declarations...
            let separatorGrid = '-';
            let totalColumns = 0;
            let newGridUpdated = [];
            let breakArray = false;

            getLayouts().forEach( ( layout ) => {
                if( layout.value === deviceType ) {

                    let newGrid = attributes['grid' + layout.attributeName];
                    newGrid = newGrid.split(separatorGrid);
                    newGrid.forEach( ( element ) => {

                        element = Number.parseInt(element);

                        if( ! breakArray && Number.isInteger(element) ) {

                            let elementTemp = ( totalColumns + element <= configTotalColumns ) ? element : configTotalColumns - totalColumns;

                            newGridUpdated.push(elementTemp);
                            totalColumns += elementTemp;

                            if( totalColumns == configTotalColumns ) {
                                breakArray = true;
                            }
                        }
                    });

                    // Ensure there are 12 columns
                    if( totalColumns < configTotalColumns ) {
                        newGridUpdated.push( configTotalColumns - totalColumns );
                    }
                    
                    if( deviceType == 'desktop' ) {
                        // Add or remove columns
                        let newColumns = newGridUpdated.length;
                        if( newColumns > countColumns ) {

                            let numberOfColumnsToAdd = newColumns - countColumns;
                            let inner_blocks_new = [
                                ...inner_blocks,
                                ...times( numberOfColumnsToAdd, () => {
                                    return createBlock('custom/wpe-column')
                                } )
                            ];
                            dispatch( 'core/block-editor' ).replaceInnerBlocks(clientId, inner_blocks_new, false);
                            inner_blocks = inner_blocks_new;
                        }
                        else if( newColumns < countColumns ) {
                        
                            let inner_blocks_new = inner_blocks.slice(0, newColumns);
                            dispatch( 'core/block-editor' ).replaceInnerBlocks(clientId, inner_blocks_new, false);
                        }
                    }

                    // Loop on each columns to update start and width attributes
                    let startGrid = 1;
                    inner_blocks.forEach( ( element, index ) => {

                        let widthChild = Number.parseInt(newGridUpdated[index]);
                        
                        // Update the child block's attributes
                        dispatch('core/editor').updateBlockAttributes(element.clientId, { ['start' + layout.attributeName]: startGrid, ['width' + layout.attributeName]: widthChild });
                        startGrid += widthChild;
                    });

                    // Finally, update grid attribute
                    setAttributes( { ['grid' + layout.attributeName]: newGridUpdated.join('-') } );
                }
            });
        }    



        /**
         * Render
         */
        return (
            <>
                <InspectorControls>
                    <PanelBody title={ 'Grid' } initialOpen={ false }>
                        <ButtonGroup>
                            { getLayouts().map( ( layout ) => (
                                <Button
                                    key={ layout.value }
                                    isPrimary={ layout.value === deviceType }
                                    onClick={ () => this.setDeviceType( layout.value ) }
                                >
                                    { layout.label }
                                </Button>
                            ) ) }
                        </ButtonGroup>
                        { gridForm }
                        <Button
                            isSecondary
                            type="submit"
                        >
                            Apply
                        </Button>
                    </PanelBody>
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
                            value={ attributes.paddingTop }
                            onChange={ ( value ) =>
                                setAttributes( { paddingTop: value } )
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Padding Bottom"
                            value={ attributes.paddingBottom }
                            onChange={ ( value ) =>
                                setAttributes( { paddingBottom: value } )
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Margin Top"
                            value={ attributes.marginTop }
                            onChange={ ( value ) =>
                                setAttributes( { marginTop: value } )
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                        <RangeControl
                            label="Margin Bottom"
                            value={ attributes.marginBottom }
                            onChange={ ( value ) =>
                                setAttributes( { marginBottom: value } )
                            }
                            min={ 0 }
                            max={ 5 }
                        />
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <Dropdown
                        renderToggle={ ( { isOpen, onToggle } ) => (
                            <ToolbarGroup>
                                <Button
                                    aria-expanded={ isOpen }
                                    onClick={ onToggle }
                                    icon={ getLayouts().find( ( layout ) => layout.value === deviceType ).icon }
                                />
                            </ToolbarGroup>
                        ) }
                        renderContent={ ( { onClose } ) => (
                            <MenuGroup>
                                { getLayouts().map( ( layout ) => (
                                    <MenuItem
                                        key={ layout.value }
                                        isSelected={ layout.value === deviceType }
                                        onClick={ () => this.setDeviceType( layout.value ) }
                                        icon={ layout.icon }
                                    >
                                        { layout.label }
                                    </MenuItem>
                                ) ) }
                            </MenuGroup>
                        ) }
                    />
                </BlockControls>
                { editDisplay }
            </>
        );
    }
}

export default compose( [
	withSelect( ( select, props ) => {

        return {
            backgroundData: ! props.attributes.backgroundFile ? null : select('core').getEntityRecord('postType', 'attachment', props.attributes.backgroundFile ),
            inner_blocks: select('core/block-editor').getBlocks(props.clientId),
            countColumns: select( 'core/block-editor' ).getBlockCount(props.clientId),
            blockVariations: select('core/blocks').getBlockVariations(props.name, 'block'),
            blockType: select('core/blocks').getBlockType(props.name)
        };
    } ),
] )( WpeContainer );