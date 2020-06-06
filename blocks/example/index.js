import icon from './icon';
import './style.scss';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

export default registerBlockType('customblocks/example', {
    title: __('Example Block', 'gutenbergCustomBlocks'),
    description: __('Example of react gutenberg block', 'gutenbergCustomBlocks'),
    category: 'custom-blocks',
    icon,
    keywords: [__('Example', 'gutenbergCustomBlocks')],
    supports: ['full', 'wide'],
    attributes: {},
    edit: props => {
        return <p>Gallery</p>;
    },
    save: prop => {
        return <p>Gallery</p>;
    },
});
