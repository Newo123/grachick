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

const openCloseMenu = (item) => {

    if (item.children[1].style.transform !== 'rotate(90deg)') {

        for (let i = 0; i < secondMenuItem.length; i++) {
            if (secondMenuItem[i] !== item) {
                secondMenuItem[i].style.maxHeight = '0';
                secondMenuItem[i].style.overflow = 'hidden';
                secondMenuItem[i].style.paddingBottom = '0';
            }
        }

        item.nextElementSibling.style.maxHeight = '100%';
        item.nextElementSibling.style.paddingBottom = '20px';
        item.children[1].style.transform = 'rotate(90deg)';
        item.children[1].classList.remove('arrow-white');
        item.children[1].classList.add('gold-arrow');
        item.children[0].style.color = '#BB8E5D';
    } else {

        for (let i = 0; i < secondMenuItem.length; i++) {
            if (secondMenuItem[i] !== item) {
                secondMenuItem[i].style.maxHeight = '100%';
                secondMenuItem[i].style.overflow = 'visible';
                secondMenuItem[i].style.paddingBottom = '20px';
            }
        }


        item.nextElementSibling.style.maxHeight = '0';
        item.nextElementSibling.style.paddingBottom = '0';
        item.children[1].style.transform = 'rotate(0)';
        item.children[1].classList.add('arrow-white');
        item.children[1].classList.remove('gold-arrow');
        item.children[0].style.color = '#ffffff';
    }
}

const openCloseMenuThrid = (item) => {

    if (item.children[1].style.transform !== 'rotate(90deg)') {

        for (let i = 0; i < thridMenuItem.length; i++) {
            if (thridMenuItem[i] !== item) {
                thridMenuItem[i].style.maxHeight = '0';
                thridMenuItem[i].style.overflow = 'hidden';
                thridMenuItem[i].style.paddingBottom = '0';
            }
        }

        item.nextElementSibling.style.maxHeight = '100%';
        item.nextElementSibling.style.paddingBottom = '20px';
        item.children[1].style.transform = 'rotate(90deg)';
        item.children[1].classList.remove('arrow-white');
        item.children[1].classList.add('gold-arrow');
        item.children[0].style.color = '#BB8E5D';
    } else {

        for (let i = 0; i < thridMenuItem.length; i++) {
            if (thridMenuItem[i] !== item) {
                thridMenuItem[i].style.maxHeight = '100%';
                thridMenuItem[i].style.overflow = 'visible';
                thridMenuItem[i].style.paddingBottom = '20px';
            }
        }


        item.nextElementSibling.style.maxHeight = '0';
        item.nextElementSibling.style.paddingBottom = '0';
        item.children[1].style.transform = 'rotate(0)';
        item.children[1].classList.add('arrow-white');
        item.children[1].classList.remove('gold-arrow');
        item.children[0].style.color = '#ffffff';
    }
}

for (let i = 0; i < secondMenuItem.length; i++) {
    secondMenuItem[i].addEventListener('click', () => openCloseMenu(secondMenuItem[i]));
}

for (let i = 0; i < thridMenuItem.length; i++) {
    thridMenuItem[i].addEventListener('click', () => openCloseMenuThrid(thridMenuItem[i]));
}

const toggleMenu = () => {
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

// export default toggleMenu;




document.addEventListener('DOMContentLoaded', () => {
    const secondMenuDesktop = document.getElementsByClassName('second__menu');

    if (secondMenuDesktop[2].offsetHeight >= 300) {
        let count = 0;
        const buttonTop = document.createElement('button');
        const buttonBot = document.createElement('button');
        const div = document.createElement('div');
        const div2 = document.createElement('div');

        div.style.width = '10px';
        div.style.height = '10px';
        div.style.borderLeft = '1px solid #BB8E5D';
        div.style.borderTop = '1px solid #BB8E5D';

        div2.style.width = '10px';
        div2.style.height = '10px';
        div2.style.borderLeft = '1px solid #BB8E5D';
        div2.style.borderTop = '1px solid #BB8E5D';

        buttonTop.style.position = 'absolute';
        buttonTop.style.top = '0';
        buttonTop.style.left = '0';
        buttonTop.style.right = '0';
        buttonTop.style.height = '20px';
        buttonTop.style.background = '#000000';
        buttonTop.style.border = 'none';
        buttonTop.style.cursor = 'pointer';
        buttonTop.style.display = 'flex';
        buttonTop.style.alignItems = 'center';
        buttonTop.style.justifyContent = 'center';
        buttonTop.appendChild(div)
        buttonTop.children[0].style.transform = 'rotate(45deg)'

        buttonBot.style.position = 'absolute';
        buttonBot.style.bottom = '0';
        buttonBot.style.left = '0';
        buttonBot.style.right = '0';
        buttonBot.style.height = '20px';
        buttonBot.style.background = '#000000';
        buttonBot.style.border = 'none';
        buttonBot.style.cursor = 'pointer';
        buttonBot.style.display = 'flex';
        buttonBot.style.alignItems = 'center';
        buttonBot.style.justifyContent = 'center';
        buttonBot.appendChild(div2)
        buttonBot.children[0].style.transform = 'rotate(-135deg)'


        buttonTop.addEventListener('click', () => {
            if (count < 0) {
                count += 41.8;
                for (let i = 0; i < secondMenuDesktop[2].children.length - 2; i++) {
                    secondMenuDesktop[2].children[i].style.transform = `translateY(${count}px)`
                }
            }
        })

        buttonBot.addEventListener('click', () => {


            if (count > -((secondMenuDesktop[2].children.length - 2) * 41.8) + 300) {
                count -= 41.8;
                for (let i = 0; i < secondMenuDesktop[2].children.length - 2; i++) {
                    secondMenuDesktop[2].children[i].style.transform = `translateY(${count}px)`
                }
            }
        })

        secondMenuDesktop[2].style.maxHeight = '320px';
        secondMenuDesktop[2].style.overflowY = 'hidden';
        secondMenuDesktop[2].appendChild(buttonTop);
        secondMenuDesktop[2].appendChild(buttonBot);
    }

});
