const btn = document.getElementsByClassName('questions__container-block__card-content__title-btn');
const arrow = document.getElementsByClassName('drop__container-button');


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        this.classList.toggle('active-collapse-btn');

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.marginBottom = '0';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.marginBottom = '50px';
        }
    });
}


for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', function() {
        this.firstElementChild.classList.toggle('active-drop');
        let content = this.previousElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.marginBottom = '0';
            content.style.marginTop = '0';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.marginBottom = '10px';
            content.style.marginTop = '20px';
        }

    });
    
}
