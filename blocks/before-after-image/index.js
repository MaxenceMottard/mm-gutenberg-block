import icon from '../carousel/icon';
import edit from './edit';
import save from './save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType('mmblocks/before-after-image', {
    title: __('Avant / Après', 'mmblocks'),
    description: __('Comparaison avant / après de déux images', 'mmblocks'),
    category: 'mm-blocks',
    icon,
    keywords: [__('Image', 'mmblocks'), __('Avant', 'mmblocks'), __('Après', 'mmblocks')],
    supports: ['full', 'wide'],
    attributes: {},
    edit,
    save,
});
