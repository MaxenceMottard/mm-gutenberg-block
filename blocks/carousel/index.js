import './style.scss';
import icon from './icon';
import save from './save';
import edit from './edit';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
export default registerBlockType('mmblocks/carousel', {
    title: __('Carousel', 'mmblocks'),
    description: __("Carousel d'image", 'mmblocks'),
    category: 'mm-blocks',
    icon,
    keywords: [__('Carousel', 'mmblocks'), __('Image', 'mmblocks')],
    supports: ['full', 'wide'],
    attributes: {
        images: {
            type: 'array',
            default: [],
        },
        time: {
            type: 'number',
            default: 0,
        },
        numberOfImages: {
            type: 'number',
            default: 3,
        },
    },
    edit,
    save,
});
