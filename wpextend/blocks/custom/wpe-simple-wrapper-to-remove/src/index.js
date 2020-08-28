import { registerBlockType } from '@wordpress/blocks';

import {
    InnerBlocks,
    __experimentalBlock as Block
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import metadata from '../block.json';

registerBlockType( metadata.name, {
    title: metadata.title,
    attributes: metadata.attributes,
    supports: metadata.supports,
    edit: ( { attributes } ) => {

        return (
            <InnerBlocks
                __experimentalTagName={ Block[attributes.element] }
                __experimentalPassedProps={ {
                    className: attributes.class,
                } }
                renderAppender={ () => (
                    <InnerBlocks.ButtonBlockAppender />
                ) }
            />
        );
    },
    save: ( { attributes }) => {
        return (
            <div className={ attributes.class } >
                <InnerBlocks.Content />
            </div>
        );
    }
} );