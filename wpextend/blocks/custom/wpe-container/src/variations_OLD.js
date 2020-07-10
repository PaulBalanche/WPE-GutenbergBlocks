/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import * as variationsImported from '../../../../json/wpe-container-config.json';


/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */
const variations = [
    {
        name: 'column-1',
        title: '1 column',
        attributes: { grid: '12' },
        innerBlocks: [
            { name: 'custom/wpe-column', attributes: { start: 1, width: 12 } }
        ],
        scope: [ 'block' ]
    },
    {
        name: 'column-2',
        icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
				/>
			</SVG>
		),
        title: '2 columns',
        attributes: { grid: '6-6' },
        innerBlocks: [
            { name: 'custom/wpe-column', attributes: { start: 1, width: 6 } },
            { name: 'custom/wpe-column', attributes: { start: 7, width: 6 } }
        ],
        scope: [ 'block' ]
    },
    {
        name: 'column-3',
        title: '3 columns',
        icon: (
			<SVG
				width="48"
				height="48"
				viewBox="0 0 48 48"
				xmlns="http://www.w3.org/2000/svg"
			>
				<Path
					fillRule="evenodd"
					d="M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
				/>
			</SVG>
        ),
        attributes: { grid: '4-4-4' },
        innerBlocks: [
            { name: 'custom/wpe-column', attributes: { start: 1, width: 4 } },
            { name: 'custom/wpe-column', attributes: { start: 5, width: 4 } },
            { name: 'custom/wpe-column', attributes: { start: 9, width: 4 } }
        ],
        scope: [ 'block' ]
    },
    {
        name: 'column-4',
        title: '4 columns',
        attributes: { grid: '3-3-3-3' },
        innerBlocks: [
            { name: 'custom/wpe-column', attributes: { start: 1, width: 3 } },
            { name: 'custom/wpe-column', attributes: { start: 4, width: 3 } },
            { name: 'custom/wpe-column', attributes: { start: 7, width: 3 } },
            { name: 'custom/wpe-column', attributes: { start: 10, width: 3 } }
        ],
        scope: [ 'block' ]
    },
    {
        name: 'column-6',
        title: '6 columns',
        attributes: { grid: '2-2-2-2-2-2' },
        innerBlocks: [
            { name: 'custom/wpe-column', attributes: { start: 1, width: 2 } },
            { name: 'custom/wpe-column', attributes: { start: 3, width: 2 } },
            { name: 'custom/wpe-column', attributes: { start: 5, width: 2 } },
            { name: 'custom/wpe-column', attributes: { start: 7, width: 2 } },
            { name: 'custom/wpe-column', attributes: { start: 9, width: 2 } },
            { name: 'custom/wpe-column', attributes: { start: 11, width: 2 } }
        ],
        scope: [ 'block' ]
    }
];

export default variationsImported.variations;
