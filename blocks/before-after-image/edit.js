import classnames from 'classnames';
import ImageComponent from './image-component';
import small from './icons/small';
import expand from './icons/expand';
import blockIcon from './icon';

const { MediaPlaceholder, InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { PanelBody, ToolbarGroup } = wp.components;

export default ({ attributes: { image1, image2, imagesSize }, className, setAttributes }) => {
    const sizes = [
        { title: __('Grand', 'mmblocks'), icon: expand },
        { title: __('Petit', 'mmblocks'), icon: small },
    ];

    const controls = sizes.map(({ icon, title }, index) => ({
        icon,
        title,
        isActive: index === imagesSize,
        onClick: () => setAttributes({ imagesSize: index }),
    }));

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Paramètres', 'mmblocks')} initialOpen>
                    <p>{__('Changer la taille des images', 'mmblocks')}</p>
                    <ToolbarGroup
                        controls={controls}
                        label={__('Changer la taille des images', 'mmblocks')}
                        icon={blockIcon}
                    />
                </PanelBody>
            </InspectorControls>
            <section className={`${classnames(className)}--edit`}>
                <main>
                    {image1 ? (
                        <ImageComponent image={image1} sizeMode={1} />
                    ) : (
                        <MediaPlaceholder
                            icon={blockIcon}
                            accept="images/*"
                            onSelect={img => {
                                setAttributes({ image1: img });
                            }}
                        />
                    )}
                </main>
                <aside>
                    {image2 ? (
                        <ImageComponent image={image2} sizeMode={1} />
                    ) : (
                        <MediaPlaceholder
                            icon={blockIcon}
                            accept="images/*"
                            onSelect={img => {
                                setAttributes({ image2: img });
                            }}
                        />
                    )}
                </aside>
            </section>
        </Fragment>
    );
};
