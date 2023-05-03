const item = document.querySelectorAll('.mobile-menu__list__item')[0];
const link = document.querySelectorAll('.mobile-menu__list__item-link')[0];
const toggleMenuBtn = document.querySelector('.burger');
const toggleMenuBtnSpan = document.querySelectorAll('.burger span');
const menu = document.querySelector('.mobile-menu');
const menuShadow = document.querySelector('.menu-shadow');
const secondMenuItem = document.getElementsByClassName('mobile-menu__list__item-second__item');
const thridMenuItem = document.getElementsByClassName('mobile-menu__list__item-second__thrid-item');
const secondMenu = document.querySelector('.mobile-menu__list__item-second');
const fourthMenu = document.querySelectorAll('.mobile-menu__list__item-second__thrid-item__fourth');

item.addEventListener('click', () => {

    if (item.children[1].style.transform !== 'rotate(90deg)') {
        item.children[1].style.transform = 'rotate(90deg)';
        item.children[1].classList.remove('arrow-white');
        item.children[1].classList.add('gold-arrow');
        setTimeout(() => {
            secondMenu.style.overflow = 'visible';
        }, 500);
        secondMenu.style.maxHeight = '100%';
        link.style.color = '#BB8E5D';
    } else {
        item.children[1].style.transform = 'rotate(0)'; 
        item.children[1].classList.remove('gold-arrow');
        item.children[1].classList.add('arrow-white');
        secondMenu.style.maxHeight = '0';
        secondMenu.style.overflow = 'hidden';
        link.style.color = '#ffffff';
    }
});

const openCloseMenu = (item, e) => {
    // e.stopPorogation();
    // e.preventDefault();

    if (item.children[1].style.transform !== 'rotate(90deg)') {

        for (let i = 0; i < secondMenuItem.length; i++) {
            if (secondMenuItem[i] !== item) {
                secondMenuItem[i].style.maxHeight = '0';
                secondMenuItem[i].style.overflow = 'hidden';
                secondMenuItem[i].style.paddingBottom = '0';
            }
        }

        setTimeout(() => {

            item.nextElementSibling.style.overflow = 'visible';
        }, 500);

        item.nextElementSibling.style.maxHeight = '100%';
        item.nextElementSibling.style.paddingBottom = '20px';
        item.children[1].style.transform = 'rotate(90deg)';
        item.children[1].classList.remove('arrow-white');
        item.children[1].classList.add('gold-arrow');
        item.children[0].style.color = '#BB8E5D';

    } else {

        setTimeout(() => {
            for (let i = 0; i < secondMenuItem.length; i++) {
                if (secondMenuItem[i] !== item) {
                    secondMenuItem[i].style.maxHeight = '100%';
                    secondMenuItem[i].style.overflow = 'visible';
                    secondMenuItem[i].style.paddingBottom = '20px';
                }
    
            }
        }, 300);

        item.nextElementSibling.style.overflow = 'hidden';
        item.nextElementSibling.style.maxHeight = '0';
        item.nextElementSibling.style.paddingBottom = '0';
        item.children[1].style.transform = 'rotate(0)';
        item.children[1].classList.add('arrow-white');
        item.children[1].classList.remove('gold-arrow');
        item.children[0].style.color = '#ffffff';
    }
}

for (let i = 0; i < secondMenuItem.length; i++) {
    secondMenuItem[i].children[1].addEventListener('click', () => openCloseMenu(secondMenuItem[i]));
}

for (let i = 0; i < thridMenuItem.length; i++) {
    thridMenuItem[i].children[1].addEventListener('click', () => openCloseMenu(secondMenuItem[i]));
}

const toggleMenu = () => {
    console.log(menu.style.transform)
    if (menu.style.transform === 'translateX(100%)') {
        menu.style.transform = 'translateX(0)';
        menuShadow.style.display = 'block';
        toggleMenuBtn.style.justifyContent = 'center';
        toggleMenuBtnSpan[0].style.transform = 'translate(0, 100%) rotate(-45deg)';
        toggleMenuBtnSpan[1].style.transform = 'scale(0)'
        toggleMenuBtnSpan[2].style.transform = 'translate(0, -100%) rotate(45deg)';
        document.body.style.overflowY = 'hidden';
        return;
    } else if (menu.style.transform === 'translateX(0px)') {
        menu.style.transform = 'translateX(100%)';
        menuShadow.style.display = 'none';
        toggleMenuBtn.style.justifyContent = 'space-between';
        toggleMenuBtnSpan[0].style.transform = 'translate(0, 0) rotate(0)';
        toggleMenuBtnSpan[1].style.transform = 'scale(1)'
        toggleMenuBtnSpan[2].style.transform = 'translate(0, 0) rotate(0)';
        document.body.style.overflowY = 'scroll';
        return;
    }
    document.body.style.overflowY = 'hidden';
    menu.style.transform = 'translateX(0)';
    menuShadow.style.display = 'block';
    toggleMenuBtn.style.justifyContent = 'center';
    toggleMenuBtnSpan[0].style.transform = 'translate(0, 100%) rotate(-45deg)';
    toggleMenuBtnSpan[1].style.transform = 'scale(0)'
    toggleMenuBtnSpan[2].style.transform = 'translate(0, -100%) rotate(45deg)';
}


toggleMenuBtn.addEventListener('click', () => toggleMenu());
menuShadow.addEventListener('click', () => toggleMenu());