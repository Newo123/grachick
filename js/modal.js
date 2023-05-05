const closeBtn = document.querySelector('.modal__content-close');
const modal = document.querySelector('.modal');
const shadow = document.querySelector('.shadow');
const modalContainer = document.querySelector('.modal-container');
const openBtn = document.querySelector('.drum__btn');
const drumClose = document.querySelector('.drum__close');
const drum = document.querySelector('.drum');
const dropList = document.querySelector('.modal__content-dropbtn');
const listItem = document.getElementsByClassName('modal__content-droplist__item');
const btnDrop = document.getElementsByClassName('modal__content-dropbtn');
const list = document.querySelector('.modal__content-droplist');
const subBtn = document.querySelector('.modal__content-submit');
const subBtnTwo = document.querySelector('.modal__content-submit-two');
const circle = document.querySelector('.modal__circle');
const thank = document.querySelector('.thank')
const burgerBtn = document.querySelector('.mobile-menu__info-socials-btn');
let number = Math.ceil(Math.random() * 1000);


subBtnTwo.addEventListener('click', () => {

    if (subBtnTwo.innerHTML === 'Вращать колесо') {
        circle.style.transform = `rotate(${number}deg)`;
        number += Math.ceil(Math.min(360, Math.random * 1000) ? Math.min(360, Math.random * 1000) : 460);
        const input = document.createElement('input');
        document.querySelector('.modal__content').replaceChild(input, dropList);

        input.classList.add('modal__content-input')

        document.querySelector('.modal__content-input').setAttribute('placeholder', '+7 (000) 000-00-00');
        document.querySelector('.modal__content-input').setAttribute('type', 'tel');
        document.querySelector('.modal__content-input').setAttribute('name', 'tel');
        document.querySelector('.modal__content-input').setAttribute('data-validate-field', 'tel');
        document.querySelector('.modal__content-input').setAttribute('title', 'Используйте числовой формат ввода!');
        document.querySelector('.modal__content-input').setAttribute('id', 'telefon');

        let tel = document.getElementById('telefon');
        let maskOptions = {
            mask: '+7 (000) 000-00-00',
            lazy: false,
        }
        let mask = IMask(tel, maskOptions);

        subBtnTwo.setAttribute('disabled', '');
        subBtnTwo.style.opacity = '0.5';
        subBtnTwo.innerHTML = 'Отправить';

        setTimeout(() => {
            subBtnTwo.removeAttribute('disabled');
            subBtnTwo.style.opacity = '1';
        }, 3000);

    } else if (subBtnTwo.innerHTML === 'Отправить') {
        modal.style.display = 'none';
        thank.style.display = 'flex';

        setTimeout(() => {
            closeModalWindow();
        }, 2000);
        //subBtnTwo отправка на сервер номер телефона
    }
});


subBtn.addEventListener('click', () => {

    if (subBtn.innerHTML === 'Вращать колесо') {
        circle.style.transform = `rotate(${number}deg)`;
        number += Math.ceil(Math.random * 1000);
        const input = document.createElement('input');
        document.querySelector('.modal__content').replaceChild(input, dropList);

        input.classList.add('modal__content-input')

        document.querySelector('.modal__content-input').setAttribute('placeholder', '+7 (000) 000-00-00');
        document.querySelector('.modal__content-input').setAttribute('type', 'tel');
        document.querySelector('.modal__content-input').setAttribute('name', 'tel');
        document.querySelector('.modal__content-input').setAttribute('data-validate-field', 'tel');
        document.querySelector('.modal__content-input').setAttribute('title', 'Используйте числовой формат ввода!');
        document.querySelector('.modal__content-input').setAttribute('id', 'telefon');

        let tel = document.getElementById('telefon');
        let maskOptions = {
            mask: '+7 (000) 000-00-00',
            lazy: false,
        }
        let mask = IMask(tel, maskOptions);

        subBtn.setAttribute('disabled', '');
        subBtn.classList.remove('hover-btn');
        subBtn.innerHTML = 'Отправить';

        setTimeout(() => {
            subBtn.removeAttribute('disabled');
            subBtn.classList.add('hover-btn');
        }, 3000);

    } else if (subBtn.innerHTML === 'Отправить') {
        modal.style.display = 'none';
        thank.style.display = 'flex';

        setTimeout(() => {
            closeModalWindow();
        }, 2000);
        //subBtn отправка на сервер номер телефона
    }
});

window.addEventListener('DOMContentLoaded', () => {
    subBtn.setAttribute('disabled', '');
    subBtnTwo.setAttribute('disabled', '');
});


const closeModalWindow = () => {
    shadow.classList.remove('shadow-show');
    modalContainer.style.transform = 'translateX(-100%)';
    drum.style.transform = 'translateX(0)';
}

closeBtn.addEventListener('click', closeModalWindow);

burgerBtn.addEventListener('click', () => {
    toggleMenu();
    drum.style.transform = 'translateX(200%)';
    setTimeout(() => {
        shadow.classList.add('shadow-show');
    }, 300)
    modalContainer.style.transform = 'translateX(0)';
})

openBtn.addEventListener('click', () => {
    drum.style.transform = 'translateX(200%)';
    setTimeout(() => {
        shadow.classList.add('shadow-show');
    }, 300)
    modalContainer.style.transform = 'translateX(0)';
});

shadow.addEventListener('click', () => {
    closeModalWindow();
});

drumClose.addEventListener('click', () => {
    drum.style.display = 'none';
});

subBtn.addEventListener('click', () => {

});

const Undis = () => {
    subBtn.removeAttribute('disabled');
    subBtnTwo.removeAttribute('disabled');
    subBtn.classList.add('hover-btn');
    subBtnTwo.style.opacity = '1';

}


for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener('click', () => {
        dropList.children[0].textContent = listItem[i].textContent;
        Undis();
        list.style.maxHeight = null;
        list.style.overflow = 'hidden';
        list.style.padding = '0';
        document.querySelector('.modal__content-dropbtn').classList.remove('active-dropdown');
    });
}


for (let i = 0; i < btn.length; i++) {
    btnDrop[i].addEventListener('click', function () {
        this.classList.toggle('active-dropdown');

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.overflow = 'hidden';
            content.style.padding = '0';
        } else {
            content.style.padding = '24px';
            content.style.maxHeight = '200%';
            content.style.overflow = 'visible';
        }
    });
}