const burgerMenu = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');

burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('open');
});

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
});


