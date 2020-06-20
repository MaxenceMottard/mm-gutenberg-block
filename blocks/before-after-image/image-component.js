import PropType from 'prop-types';

const ImageComponent = ({ image, sizeMode }) => {
    const { id, alt, sizes: imgSizes } = image;

    const sizes = [
        imgSizes.large || imgSizes.medium || imgSizes.full,
        imgSizes.medium || imgSizes.full,
    ];

    const { url } = sizes[sizeMode];

    return <img src={url} alt={alt} data-src={url} data-alt={alt} data-id={id} />;
};

ImageComponent.propTypes = {
    image: PropType.object.isRequired,
    sizeMode: PropType.number.isRequired,
};

export default ImageComponent;
