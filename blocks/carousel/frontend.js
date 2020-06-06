import Glide from '@glidejs/glide';

const glideEl = document.querySelector('.wp-block-mmblocks-carousel .glide');

if (glideEl) {
    const { time, numberOfImages: perView } = glideEl.parentElement.dataset;

    new Glide(glideEl, {
        type: 'carousel',
        startAt: 0,
        perView,
        autoplay: time && time !== 0 ? time * 1000 : false,
        breakpoints: {},
    }).mount();
}
