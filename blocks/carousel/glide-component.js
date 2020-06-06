import PropType from 'prop-types';
import classnames from 'classnames';

const GlideComponent = props => {
    const { images, className, time, numberOfImages } = props;

    return (
        <div
            className={classnames(className)}
            data-time={time}
            data-number-of-images={numberOfImages}
        >
            <div className="glide">
                <nav className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        {images.map((img, key) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <li className="glide__slide" key={`glide_img_${key}`}>
                                <img
                                    src={img.carouselUrl}
                                    alt={img.alt}
                                    data-src={img.carouselUrl}
                                    data-alt={img.alt}
                                    data-id={img.id}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className="glide__arrows" data-glide-el="controls">
                    <button
                        type="button"
                        className="glide__arrow glide__arrow--left"
                        data-glide-dir="<"
                    >
                        prev
                    </button>
                    <button
                        type="button"
                        className="glide__arrow glide__arrow--right"
                        data-glide-dir=">"
                    >
                        next
                    </button>
                </nav>
            </div>
        </div>
    );
};

GlideComponent.propTypes = {
    images: PropType.array.isRequired,
    time: PropType.number.isRequired,
    numberOfImages: PropType.number.isRequired,
};

export default GlideComponent;
