/**
 * WordPress Dependencies
 */
const { addFilter } = wp.hooks; 


function addAttributesCoreGallery( settings ) {
	
	//check if object exists for old Gutenberg version compatibility
	if( typeof settings.attributes !== 'undefined' ){
	
		settings.attributes = Object.assign( settings.attributes, {
			monSuperAttribute:{ 
				type: 'boolean',
				default: true,
			}
		});
    
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'core/gallery',
	addAttributesCoreGallery
);



const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, ToggleControl } = wp.components;
 
const addAttributesCoreGallerywithInspectorControls =  createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        if( props.name == 'core/gallery' ) {

            const {
                attributes,
                setAttributes,
                isSelected,
            } = props;
    
            const {
                monSuperAttribute,
            } = attributes;        
    
            return (
                <Fragment>
                    <BlockEdit { ...props } />
                    <InspectorControls>
                        <PanelBody>
                            <ToggleControl
                                label='Mon super attribut'
                                checked={ !! monSuperAttribute }
                                onChange={ ( value ) =>
                                    setAttributes( { monSuperAttribute: value } )
                                }
                            />
                        </PanelBody>
                    </InspectorControls>
                </Fragment>
            );
        }

        return <BlockEdit { ...props } />;
    };
}, "withInspectorControl" );
 
addFilter(
    'editor.BlockEdit',
    'core/gallery',
    addAttributesCoreGallerywithInspectorControls
);
