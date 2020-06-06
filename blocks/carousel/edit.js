import classnames from 'classnames';
import Gallery from 'react-photo-gallery';
import icon from './icon';

const { __ } = wp.i18n;
const { MediaPlaceholder, InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { PanelBody, RangeControl } = wp.components;

export default ({ attributes: { images, time, numberOfImages }, className, setAttributes }) => {
    const onSelectImages = newImages => {
        const imgs = newImages.map(img => {
            const { id, alt, caption, sizes } = img;
            const { url: src, width, height } = sizes.medium || sizes.full;
            const { url: carouselUrl } = sizes.large || sizes.medium || sizes.full;

            return { src, carouselUrl, width, height, id, alt, caption };
        });

        setAttributes({ images: imgs });
    };

    const hasImages = !!images.length;
    const hasImagesWithId = hasImages && images.some(({ id }) => id);

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Paramètres du carousel', 'mmblocks')} initialOpen>
                    <RangeControl
                        label={__('Temps de défilement (s)', 'mmblocks')}
                        help={__('La valeur 0 désactive le défilement automatique.', 'mmblocks')}
                        value={time}
                        onChange={value => setAttributes({ time: value })}
                        min={0}
                        max={10}
                    />
                    <RangeControl
                        label={__("Nombre d'images visibles", 'mmblocks')}
                        value={numberOfImages}
                        onChange={value => setAttributes({ numberOfImages: value })}
                        min={1}
                        max={20}
                    />
                </PanelBody>
            </InspectorControls>
            <div className={`${classnames(className)}--edit`}>
                {images.length > 0 ? <Gallery photos={images} direction="column" /> : null}
                <MediaPlaceholder
                    addToGallery={hasImagesWithId}
                    labels={{
                        title: __('Carousel', 'mmblocks'),
                        instructions: __(
                            'Faites glisser des images, téléchargez de nouvelles images ou sélectionnez des fichiers dans votre bibliothèque.',
                            'mmblocks'
                        ),
                    }}
                    multiple
                    icon={icon}
                    accept="images/*"
                    onSelect={onSelectImages}
                    value={images}
                />
            </div>
        </Fragment>
    );
};
