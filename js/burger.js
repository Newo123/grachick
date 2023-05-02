const item = document.querySelectorAll('.mobile-menu__list__item')[0];
const link = document.querySelectorAll('.mobile-menu__list__item-link')[0];

item.addEventListener('click', () => {

    if (item.children[1].style.transform !== 'rotate(90deg)') {
        item.children[1].style.transform = 'rotate(90deg)';
        item.children[1].classList.remove('arrow-white');
        item.children[1].classList.add('gold-arrow');
        link.style.color = '#BB8E5D';
    } else {
        item.children[1].style.transform = 'rotate(0)';
        item.children[1].classList.remove('gold-arrow');
        item.children[1].classList.add('arrow-white');
        link.style.color = '#ffffff';
    }
});