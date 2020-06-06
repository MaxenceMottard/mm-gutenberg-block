import GlideComponent from './glide-component';

export default ({ attributes: { images, time, numberOfImages } }) => {
    return <GlideComponent images={images} time={time} numberOfImages={numberOfImages} />;
};
