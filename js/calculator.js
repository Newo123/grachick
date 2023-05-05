const type = document.querySelector('.calculate__container-content__btns-type-btn');
const dev = document.querySelector('.calculate__container-content__btns-development-btn');
const count = document.querySelector('.calculate__container-content__btns-count-btn');
const terms = document.querySelector('.calculate__container-content__btns-terms-btn');
const devList = document.querySelector('.calculate__container-content__btns-development-list');
const typeListItems = document.querySelectorAll('.calculate__container-content__btns-type-list__item');
const devListItems = document.querySelectorAll('.calculate__container-content__btns-development-list__item');
const reset = document.querySelector('.calculate__container-content__btns-reload');

const btns = [type, dev, count, terms];


const addCount = (child) => {
    count.children[0].innerText = child.innerText;

    terms.removeAttribute('disabled');
    terms.removeAttribute('style');
}

const addTerms = (child) => {
    terms.children[0].innerText = child.innerText;
}

document.addEventListener('DOMContentLoaded', () => {
    dev.setAttribute('disabled', '');
    dev.style.opacity = '.3';

    terms.setAttribute('disabled', '');
    terms.style.opacity = '.3';

    const countList = document.querySelector('.calculate__container-content__btns-count-list');
    const termsList = document.querySelector('.calculate__container-content__btns-terms-list');

    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        li.classList.add('calculate__container-content__btns-count-list__item');
        li.innerText = i * 10;
        li.addEventListener('click', () => {
            addCount(li)
        })
        countList.appendChild(li);
    }

    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        li.classList.add('calculate__container-content__btns-count-list__item');
        li.innerText = i * 10;
        li.addEventListener('click', () => {
            addTerms(li)
        })
        termsList.appendChild(li);
    }

});



const addMarketingList = () => {
    const marketing = [
        'Интернет магазин',
        'Лендинг',
        'Корпоративный сайт',
        'Сайт визитка',
        'Сайт каталог',
        'Бренд бук',
        'Логотип'
    ];

    const list = document.createElement('ul');
    list.classList.add('calculate__container-content__btns-development-list')

    for (let i = 0; i < marketing.length; i++) {
        let li = document.createElement('li');
        li.classList.add('calculate__container-content__btns-development-list__item');
        li.innerText = marketing[i];
        list.appendChild(li)
    }
    resetAll()
    return list;
}

const addBuhList = () => {
    const buh = [
        'Обслуживание',
        'Сопровождение',
        'Ведение бухгалтерии ООО',
        'Ведение бухгалтерии ИП',
        'Сдача отчетности',
        'Аудит'
    ];

    const list = document.createElement('ul');
    list.classList.add('calculate__container-content__btns-development-list')

    for (let i = 0; i < buh.length; i++) {
        let li = document.createElement('li');
        li.classList.add('calculate__container-content__btns-development-list__item');
        li.innerText = buh[i];
        list.appendChild(li)
    }
    resetAll()
    return list;
}

const addUrList = () => {
    const ur = [
        'Регистрация ИП',
        'Регистрация ООО',
        'Ликвидация ООО',
        'Регистрация фирмы в дубае',
        'Регистрация товарного знака',
        'Юридическое обслуживание',
        'Регистрация юр лица',
        'Адвокатские услуги',
        'Представление дел в суде',
        'Банкротство физ лиц',
        'Банкротство юр лиц',
        'Банкротство ООО',
        'Взыскание задолженности',
        'Списание долгов'
    ];

    const list = document.createElement('ul');
    list.classList.add('calculate__container-content__btns-development-list')

    for (let i = 0; i < ur.length; i++) {
        let li = document.createElement('li');
        li.classList.add('calculate__container-content__btns-development-list__item');
        li.innerText = ur[i];
        list.appendChild(li)
    }
    resetAll()
    return list;
}

const addKadrList = () => {
    const kadr = [
        'Ведение кадрового учета',
        'Расчет оплат сотрудников',
        'Кадровы споры'
    ];

    const list = document.createElement('ul');
    list.classList.add('calculate__container-content__btns-development-list')

    for (let i = 0; i < kadr.length; i++) {
        let li = document.createElement('li');
        li.classList.add('calculate__container-content__btns-development-list__item');
        li.innerText = kadr[i];
        list.appendChild(li)
    }
    resetAll()
    return list;
}

const addLicList = () => {

    const lic = [
        'Лицензия ФСБ на гостайну',
        'Лицензия фстэк',
        'Атомная лицензия',
        'Лицензия МЧС',
        'Лицензия на отходы',
        'Лицензия на криптографию',
        'Лицензия на утилизацию отходов'
    ];

    const list = document.createElement('ul');
    list.classList.add('calculate__container-content__btns-development-list')

    for (let i = 0; i < lic.length; i++) {
        let li = document.createElement('li');
        li.classList.add('calculate__container-content__btns-development-list__item');
        li.innerText = lic[i];
        list.appendChild(li)
    }
    resetAll()
    return list;
}

const addTextDev = (child) => {
    dev.children[0].innerText = child.innerText;

    const devs = document.querySelector('.calculate__container-content__btns-development-btn').children[0].innerText
    const types = document.querySelector('.calculate__container-content__btns-type-btn').children[0].innerText


    if (types !== 'Выбор' && devs !== 'Выбор') {
        const blockCount = document.querySelector('.calculate__container-content__btns-count');
        const blockTerms = document.querySelector('.calculate__container-content__btns-terms');
        document.querySelector('.calculate__container-content__btns').style.maxHeight = '2000px';
        setTimeout(() => {
            blockCount.style.display = 'block';
            blockTerms.style.display = 'block';
            reset.style.display = 'flex';
        }, 300)
    }

}

const addText = (child) => {

    if (child.classList[0] === typeListItems[0].classList[0]) {

        let newItem;

        if (child.innerText === 'Маркетинговые услуги') {
            newItem = addMarketingList()
        } else if (child.innerText === 'Бухгалтерские услуги') {
            newItem = addBuhList()
        } else if (child.innerText === 'Юридические услуги') {
            newItem = addUrList()
        } else if (child.innerText === 'Кадровые услуги') {
            newItem = addKadrList()
        } else if (child.innerText === 'Лицензирование') {
            newItem = addLicList()
        }

        document.querySelector('.calculate__container-content__btns-development').replaceChild(newItem, document.querySelector('.calculate__container-content__btns-development-list'));
        type.children[0].innerText = child.innerText;
        dev.removeAttribute('disabled');
        dev.removeAttribute('style');
        const newDevListItems = document.querySelectorAll('.calculate__container-content__btns-development-list__item');
        for (let i = 0; i < devListItems.length; i++) {
            newDevListItems[i].addEventListener('click', () => addTextDev(newDevListItems[i]));
        }

    }

    const devs = document.querySelector('.calculate__container-content__btns-development-btn').children[0].innerText
    const types = document.querySelector('.calculate__container-content__btns-type-btn').children[0].innerText


    if (types !== 'Выбор' && devs !== 'Выбор') {
        const blockCount = document.querySelector('.calculate__container-content__btns-count');
        const blockTerms = document.querySelector('.calculate__container-content__btns-terms');
        document.querySelector('.calculate__container-content__btns').style.maxHeight = '2000px';
        setTimeout(() => {
            blockCount.style.display = 'block';
            blockTerms.style.display = 'block';
            reset.style.display = 'flex';
        }, 300)
    }
}

for (let i = 0; i < typeListItems.length; i++) {
    typeListItems[i].addEventListener('click', () => addText(typeListItems[i]));
}


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
        newItem.style.maxHeight = '400px';
        newItem.style.overflowY = 'scroll';
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
    dev.setAttribute('disabled', '');
    dev.style.opacity = '.3';

    const blockCount = document.querySelector('.calculate__container-content__btns-count');
    const blockTerms = document.querySelector('.calculate__container-content__btns-terms');
    document.querySelector('.calculate__container-content__btns').removeAttribute('style');
    setTimeout(() => {
        blockCount.style.display = 'none';
        blockTerms.style.display = 'none';
        reset.style.display = 'none';
    }, 100)
}


type.addEventListener('click', () => toggle(type));
dev.addEventListener('click', () => toggle(dev));
count.addEventListener('click', () => toggle(count));
terms.addEventListener('click', () => toggle(terms));
reset.addEventListener('click', resetAll);