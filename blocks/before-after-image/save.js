import ImageComponent from './image-component';

export default ({ attributes: { image1, image2, imagesSize } }) => (
    <section data-image-size={imagesSize}>
        <main>
            <ImageComponent image={image1} sizeMode={imagesSize} />
        </main>
        <aside>
            <ImageComponent image={image2} sizeMode={imagesSize} />
        </aside>
    </section>
);
