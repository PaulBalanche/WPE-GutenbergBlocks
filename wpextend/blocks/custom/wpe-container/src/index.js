import { registerBlockType } from '@wordpress/blocks';
import {
    InnerBlocks,
    InspectorControls,
    MediaPlaceholder
} from '@wordpress/block-editor';
import {
    PanelBody,
    SelectControl,
    Button,
    RangeControl
} from '@wordpress/components';
import { withSelect } from '@wordpress/data';
import { withState } from '@wordpress/compose';
 
registerBlockType( 'custom/wpe-container', {
    title: 'Container',
    icon: <svg enable-background="new 0 0 24 24" height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><g><g><g><g><path d="M12,10.9c-0.1,0-0.2,0-0.2-0.1L3.5,6.1C3.4,6,3.3,5.8,3.3,5.6c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4S20.6,6,20.5,6.1l-8.2,4.7C12.2,10.8,12.1,10.9,12,10.9z M4.8,5.6L12,9.8l7.2-4.2L12,1.5      L4.8,5.6z"/></g><g><path d="M10.4,23.6c-0.1,0-0.2,0-0.2-0.1l-8.2-4.7c-0.2-0.1-0.3-0.3-0.3-0.4V8.9c0-0.2,0.1-0.3,0.2-0.4c0.2-0.1,0.3-0.1,0.5,0      l8.2,4.7c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.2,0.4C10.5,23.6,10.5,23.6,10.4,23.6z M2.7,18.1l7.2,4.2v-8.3L2.7,9.8      V18.1z"/></g><g><path d="M13.6,23.6c-0.1,0-0.2,0-0.2-0.1c-0.2-0.1-0.2-0.3-0.2-0.4v-9.5c0-0.2,0.1-0.3,0.2-0.4l8.2-4.7c0.2-0.1,0.3-0.1,0.5,0      c0.2,0.1,0.2,0.3,0.2,0.4v9.5c0,0.2-0.1,0.3-0.3,0.4l-8.2,4.7C13.8,23.6,13.7,23.6,13.6,23.6z M14.1,13.9v8.3l7.2-4.2V9.8      L14.1,13.9z"/></g></g></g></g></svg>,
    category: 'layout',
    // styles: [
    //     // Mark style as default.
    //     {
    //         name: 'default',
    //         label: 'Rounded',
    //         isDefault: true
    //     },
    //     {
    //         name: 'outline',
    //         label: 'Outline'
    //     },
    //     {
    //         name: 'squared',
    //         label: 'Squared'
    //     },
    // ],
    supports: {
        align: [ 'full', 'wide' ]
    },
    attributes: {
        align: {
            type: 'string'
        },
        backgroundFile: {
            type: 'number'
        },
        backgroundType: {
            type: 'string'
        },
        paddingTop: {
            type: 'string'
        },
        paddingBottom: {
            type: 'string'
        },
        marginTop: {
            type: 'string'
        },
        marginBottom: {
            type: 'string'
        }
    },
 
    edit: withSelect( ( select, props ) => {

        return {
            backgroundData: ! props.attributes.backgroundFile ? null : select( 'core' ).getEntityRecord('postType', 'attachment', props.attributes.backgroundFile )
        };
    } ) ( ( { attributes, setAttributes, className, backgroundData } ) => {

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


        // Section Padding Top
        switch( attributes.paddingTop ) {

            case 1:
                className += ' pt-smaller';
                break;

            case 2:
                className += ' pt-small';
                break;

            case 4:
                className += ' pt-medium';
                break;

            case 5:
                className += ' pt-big';
                break;

            case 6:
                className += ' pt-bigger';
                break;

            default:
                attributes.paddingTop = 3
        }

        // Section Padding Bottom
        switch( attributes.paddingBottom ) {

            case 1:
                className += ' pb-smaller';
                break;

            case 2:
                className += ' pb-small';
                break;

            case 4:
                className += ' pb-medium';
                break;

            case 5:
                className += ' pb-big';
                break;

            case 6:
                className += ' pb-bigger';
                break;

            default:
                attributes.paddingBottom = 3
        }

        // Section Margin Top
        switch( attributes.marginTop ) {
            
            case 1:
                className += ' mt-smaller';
                break;

            case 2:
                className += ' mt-small';
                break;

            case 3:
                className += ' mt-medium';
                break;

            case 4:
                className += ' mt-big';
                break;

            case 5:
                className += ' mt-bigger';
                break;

            default:
                attributes.marginTop = 0
        }

        // Section Margin Top
        switch( attributes.marginBottom ) {
            
            case 1:
                className += ' mb-smaller';
                break;

            case 2:
                className += ' mb-small';
                break;

            case 3:
                className += ' mb-medium';
                break;

            case 4:
                className += ' mb-big';
                break;

            case 5:
                className += ' mb-bigger';
                break;

            default:
                attributes.marginBottom = 0
        }

        // Render
        return (
            <>
                <InspectorControls>
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
                            min={ 1 }
                            max={ 6 }
                        />
                        <RangeControl
                            label="Padding Bottom"
                            value={ attributes.paddingBottom }
                            onChange={ ( value ) =>
                                setAttributes( { paddingBottom: value } )
                            }
                            min={ 1 }
                            max={ 6 }
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
                <div className={ className } style={ sectionStyle }>
                    <InnerBlocks />
                </div>
            </>
        );
    } ),
 
    save: () => {
        return <InnerBlocks.Content />;
    },
} );