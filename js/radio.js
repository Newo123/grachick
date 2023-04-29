const radio = document.getElementsByClassName('filter__container-filter-center__tabs-tab');

const addRadio = (r, i) => {
    for (let j = 0; j < r.length; j++) {
        r[j].children[1].classList.remove('before');
        r[j].children[0].removeAttribute('checked');
    }

    r[i].children[1].classList.add('before');
    r[i].children[0].setAttribute('checked', 'checked');
}

for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener('click', () => addRadio(radio, i));
}