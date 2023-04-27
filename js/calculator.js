const type = document.querySelector('.calculate__container-content__btns-type-btn');
const dev = document.querySelector('.calculate__container-content__btns-development-btn');
const count = document.querySelector('.calculate__container-content__btns-count-btn');
const terms = document.querySelector('.calculate__container-content__btns-terms-btn');


const typeListItems = document.querySelectorAll('.calculate__container-content__btns-type-list__item');
const devListItems = document.querySelectorAll('.calculate__container-content__btns-development-list__item');
// const countListItems = document.querySelectorAll('.calculate__container-content__btns-count-list__item');
// const termsListItems = document.querySelectorAll('.calculate__container-content__btns-terms-list__item');

const reset = document.querySelector('.calculate__container-content__btns-reload');

const btns = [type, dev, count, terms];
const addText = (child) => {
    if (child.classList[0] === typeListItems[0].classList[0]) {

        type.children[0].innerText = child.innerText;

    } else if (child.classList[0] === devListItems[0].classList[0]) {

        dev.children[0].innerText = child.innerText;

    } else if (child.classList[0] === countListItems[0].classList[0]) {

        count.children[0].innerText = child.innerText;

    } else if (child.classList[0] === termsListItems[0].classList[0]) {

        terms.children[0].innerText = child.innerText;

    }
}

for (let i = 0; i < typeListItems.length; i++) {
    typeListItems[i].addEventListener('click', () => addText(typeListItems[i]));
}

for (let i = 0; i < devListItems.length; i++) {
    devListItems[i].addEventListener('click', () => addText(devListItems[i]));
}

// for (let i = 0; i < devListItems.length; i++) {
//     countListItems[i].addEventListener('click', () => addText(countListItems[i]));
// }

// for (let i = 0; i < devListItems.length; i++) {
//     termsListItems[i].addEventListener('click', () => addText(termsListItems[i]));
// }


document.addEventListener('click', (e) => {
    for (let i = 0; i < btns.length; i++) {
        if (e.srcElement.classList[0] !== btns[i].classList[0] && e.srcElement.classList[0] !== btns[i].nextElementSibling.classList[0]) {
            let newItem = btns[i].nextElementSibling;
            newItem.style.maxHeight = null;
            newItem.style.overflow = 'hidden';
            newItem.style.padding = '0';
            remove(btns[i]);
        }
    }
});

const toggleList = (item) => {

    let newItem = item.nextElementSibling;

    if (newItem.style.maxHeight) {
        newItem.style.maxHeight = null;
        newItem.style.overflow = 'hidden';
        newItem.style.padding = '0';
    } else {
        newItem.style.padding = '30px';
        newItem.style.maxHeight = '300%';
        newItem.style.overflow = 'visible';
    }
}

const toggle = (item) => {
    item.classList.toggle('active-btn');
    toggleList(item);
}

const remove = (item) => {
    item.classList.remove('active-btn');
}

const resetAll = () => {
    for (let i = 0; i < btns.length; i++) {
        btns[i].children[0].innerText = 'Выбор';
    }
}


type.addEventListener('click', () => toggle(type));
dev.addEventListener('click', () => toggle(dev));
count.addEventListener('click', () => toggle(count));
terms.addEventListener('click', () => toggle(terms));
reset.addEventListener('click', resetAll);