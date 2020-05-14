( function( wp ) {
    var MyCustomButton = function( props ) {
        return wp.element.createElement(
            wp.blockEditor.RichTextToolbarButton, {
                icon: 'editor-code',
                title: 'Sample output',
                onClick: function() {
                    props.onChange( wp.richText.toggleFormat(
                        props.value,
                        { type: 'my-custom-format/sample-output' }
                    ) );
                },
                isActive: props.isActive,
            }
        );
    }
    wp.richText.registerFormatType(
        'my-custom-format/sample-output', {
            title: 'Sample output',
            tagName: 'samp',
            className: null,
            edit: MyCustomButton,
        }
    );
} )( window.wp );




function addListBlockClassName( settings, name ) {

    if ( name == 'custom/section' ) {
        return settings;
    }

    settings = lodash.assign( {}, settings, {
        parent: [ 'custom/section', 'core/media-text' ]
    } );

    return settings
}
 
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'my-plugin/class-names/list-block',
    addListBlockClassName
);