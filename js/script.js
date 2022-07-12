const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
    
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const procents = document.querySelectorAll('.skills__progress-ok'),
    subrectangle = document.querySelectorAll('.skills__progress-subrectangle');

procents.forEach( (item, i) => {
    subrectangle[i].style.width = item.innerHTML;
});

