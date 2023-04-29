const btnMore = document.querySelector('.stock__container-btn');
const cards = document.querySelectorAll('.stock__container-card');
const containerMore = document.querySelector('.stock__container-cards');

let gap;
const COLIMN = 3;
const MAX_VISIBLE_CARDS = 12;



document.addEventListener('DOMContentLoaded', () => {
    gap = containerMore.offsetWidth < 480 ? 10 : 40;
    if (cards.length > MAX_VISIBLE_CARDS) {
        containerMore.style.maxHeight = `${(cards[0].offsetHeight * MAX_VISIBLE_CARDS / COLIMN) + (gap * COLIMN)}px`
    } else {
        btnMore.style.display = 'none';
    }

});

const more = () => {
    let height = containerMore.offsetHeight;
    containerMore.style.maxHeight = `${height + gap + cards[0].offsetHeight}px`;
    if (containerMore.offsetHeight + cards[0].offsetHeight >= ((cards.length / COLIMN - 1) * gap) + ((cards.length / COLIMN - 1) * cards[0].offsetHeight)) {
        btnMore.style.display = 'none';
        containerMore.style.maxHeight = '100%';
    }
}

btnMore.addEventListener('click', more);