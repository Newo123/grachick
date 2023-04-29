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
    PAGE_WIDTH += -(slide[0].offsetWidth + GAP);

    if (-(slider.offsetWidth - (slide[0].offsetWidth)) >= PAGE_WIDTH) {
        PAGE_WIDTH = -(slider.offsetWidth - (slide[0].offsetWidth));
        next.setAttribute('disabled', '');
        next.style.opacity = '.6';
    } else {
        prev.removeAttribute('disabled');
        prev.style.opacity = '1';
    }

    slider.style.transform = `translateX(${PAGE_WIDTH}px)`;
});

prev.addEventListener('click', () => {
    PAGE_WIDTH += slide[0].offsetWidth + GAP;

    if (PAGE_WIDTH >= 0) {
        PAGE_WIDTH = 0;
        prev.setAttribute('disabled', '');
        prev.style.opacity = '.6';
    } else {
        next.removeAttribute('disabled');
        next.style.opacity = '1';
    }

    slider.style.transform = `translateX(${PAGE_WIDTH}px)`;
});