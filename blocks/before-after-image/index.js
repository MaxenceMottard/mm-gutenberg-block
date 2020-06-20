import './style.scss';
import icon from './icon';
import edit from './edit';
import save from './save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType('mmblocks/before-after-image', {
    title: __('Avant / Après', 'mmblocks'),
    description: __('Comparaison avant / après de deux images', 'mmblocks'),
    category: 'mm-blocks',
    icon,
    keywords: [__('Image', 'mmblocks'), __('Avant', 'mmblocks'), __('Après', 'mmblocks')],
    supports: ['full', 'wide'],
    attributes: {
        image1: {
            type: 'object',
            default: null,
        },
        image2: {
            type: 'object',
            default: null,
        },
        imagesSize: {
            type: 'number',
            default: 1,
        },
    },
    edit,
    save,
});
