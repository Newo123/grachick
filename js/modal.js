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
let number = Math.ceil(Math.random() * 1000);

// subBtn.addEventListener('click', () => {
//     circle.style.transform = `rotate(${number}deg)`;
//     number += Math.ceil(Math.random * 1000);
// });

subBtn.onclick = () => {
    circle.style.transform = `rotate(${number}deg)`;
    number += Math.ceil(Math.random * 1000);
}

window.addEventListener('DOMContentLoaded', () => {
    // subBtn.setAttribute('disabled', '');
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
    // subBtn.setAttribute('disabled', 'none');
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