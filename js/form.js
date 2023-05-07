const formBtn = document.querySelectorAll('.increase__container-card__btn');
const formShadow = document.querySelector('.form-shadow');
const form = document.querySelector('.increase__form');
const formClose = document.querySelector('.increase__form-close');
const btnInForm = document.querySelector('.increase__form-btn');
const formThinks = document.querySelector('.form-thinks');
const callback = document.querySelector('.online-hero__container-btn');

const openForm = () => {
    console.log(1)
    form.style.display = 'flex';
    formShadow.style.display = 'block';
}

const closeForm = () => {
    form.style.display = 'none';
    formShadow.style.display = 'none';
    formThinks.style.display = 'none';
}
callback.addEventListener('click', openForm);
for (let i = 0; i < formBtn.length; i++) {
    formBtn[i].addEventListener('click', openForm);
}

formShadow.addEventListener('click', closeForm);
formClose.addEventListener('click', closeForm);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    formThinks.style.display = 'flex';
    setTimeout(() => {
        formThinks.style.display = 'none';
        formShadow.style.display = 'none';
    }, 3000)
})
