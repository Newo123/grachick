const slider = document.querySelector('.content__container-slider__swiper');
const next = document.querySelector('.content__container-slider__btns-right');
const prev = document.querySelector('.content__container-slider__btns-left');
const slide = document.querySelectorAll('.content__container-slider__swiper__slide');

let PAGE_WIDTH = 0;
let GAP = 40;

document.addEventListener('DOMContentLoaded', () => {
    if (slider.style.transform = ('translateX(0)')) {
        prev.setAttribute('disabled', '');
        prev.style.opacity = '.6';
    }
});

next.addEventListener('click', () => {

    if (PAGE_WIDTH === -(slide[0].offsetWidth * (slide.length - 2) + (slide.length - 2) * GAP)) {
        return;
    }

    PAGE_WIDTH += -(slide[0].offsetWidth + GAP);

    if (PAGE_WIDTH === -(slide[0].offsetWidth * (slide.length - 2) + (slide.length - 2) * GAP)) {
        next.setAttribute('disabled', '');
        next.style.opacity = '.6';
    }

    prev.removeAttribute('disabled');
    prev.style.opacity = '1';

    slider.style.transform = `translateX(${PAGE_WIDTH}px)`;

});

prev.addEventListener('click', () => {

    if (PAGE_WIDTH >= 0) {
        console.log(PAGE_WIDTH)
        return;
    }

    PAGE_WIDTH += slide[0].offsetWidth + GAP;

    if (PAGE_WIDTH === 0) {
        prev.setAttribute('disabled', '');
        prev.style.opacity = '.6';
    }
    next.removeAttribute('disabled');
    next.style.opacity = '1';

    slider.style.transform = `translateX(${PAGE_WIDTH}px)`;
});