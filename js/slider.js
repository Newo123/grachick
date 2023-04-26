const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    speed: 400,
    spaceBetween: 10,
    mousewheel: true,
    grabCursor: true,

    navigation: {
      nextEl: '.top',
      prevEl: '.bot',
    },

    loop: true,
});