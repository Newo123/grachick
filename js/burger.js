const item = document.querySelectorAll('.mobile-menu__list__item')[0];
const link = document.querySelectorAll('.mobile-menu__list__item-link')[0];
const toggleMenuBtn = document.querySelector('.burger');
const toggleMenuBtnSpan = document.querySelectorAll('.burger span');
const menu = document.querySelector('.mobile-menu');
const menuShadow = document.querySelector('.menu-shadow');

item.addEventListener('click', () => {

    if (item.children[2].style.transform !== 'rotate(90deg)') {
        item.children[2].style.transform = 'rotate(90deg)';
        item.children[2].classList.remove('arrow-white');
        item.children[2].classList.add('gold-arrow');
        link.style.color = '#BB8E5D';
    } else {
        item.children[2].style.transform = 'rotate(0)';
        item.children[2].classList.remove('gold-arrow');
        item.children[2].classList.add('arrow-white');
        link.style.color = '#ffffff';
    }
});

const toggleMenu = () => {
    console.log(menu.style.transform)
    if (menu.style.transform === 'translateX(100%)') {
        menu.style.transform = 'translateX(0)';
        menuShadow.style.display = 'block';
        toggleMenuBtn.style.justifyContent = 'center';
        toggleMenuBtnSpan[0].style.transform = 'translate(0, 100%) rotate(-45deg)';
        toggleMenuBtnSpan[1].style.transform = 'scale(0)'
        toggleMenuBtnSpan[2].style.transform = 'translate(0, -100%) rotate(45deg)';
        return;
    } else if (menu.style.transform === 'translateX(0px)') {
        menu.style.transform = 'translateX(100%)';
        menuShadow.style.display = 'none';
        toggleMenuBtn.style.justifyContent = 'space-between';
        toggleMenuBtnSpan[0].style.transform = 'translate(0, 0) rotate(0)';
        toggleMenuBtnSpan[1].style.transform = 'scale(1)'
        toggleMenuBtnSpan[2].style.transform = 'translate(0, 0) rotate(0)';
        return;
    }

    menu.style.transform = 'translateX(0)';
    menuShadow.style.display = 'block';
    toggleMenuBtn.style.justifyContent = 'center';
    toggleMenuBtnSpan[0].style.transform = 'translate(0, 100%) rotate(-45deg)';
    toggleMenuBtnSpan[1].style.transform = 'scale(0)'
    toggleMenuBtnSpan[2].style.transform = 'translate(0, -100%) rotate(45deg)';
}


toggleMenuBtn.addEventListener('click', () => toggleMenu());
menuShadow.addEventListener('click', () => toggleMenu());