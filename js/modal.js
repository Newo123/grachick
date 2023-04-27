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
const circle = document.querySelector('.modal__circle');
const thank = document.querySelector('.thank')
let number = Math.ceil(Math.random() * 1000);

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
});


const closeModalWindow = () => {
    shadow.classList.remove('shadow-show');
    modalContainer.style.transform = 'translateX(-100%)';
    drum.style.transform = 'translateX(0)';
}

closeBtn.addEventListener('click', closeModalWindow);

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
    subBtn.classList.add('hover-btn');
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
    btnDrop[i].addEventListener('click', function() {
        this.classList.toggle('active-dropdown');

        let content = this.nextElementSibling;
    
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.overflow = 'hidden';
            content.style.padding = '0';
        } else {
            content.style.padding = '24px';
            content.style.maxHeight = '100%';
            content.style.overflow = 'visible';
        }
    });
}