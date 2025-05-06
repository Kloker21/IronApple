const burgerMenu = document.querySelector('.burger');
const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');

burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('open');
});

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const orderNumber = Math.floor(Math.random() * 100) + 1;
    alert(`Вы успешно заказали товар, ваш номер заказа - ${orderNumber}`);
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
});


