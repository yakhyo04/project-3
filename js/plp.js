const footerGift = document.querySelector('.footer__gift');
const footerHiddenText = document.querySelector('.footer__hidden--text')

footerGift.addEventListener('click', function(){
    if(footerHiddenText.style.display === 'none'){
        footerHiddenText.style.display = 'block';
    }else{
        footerHiddenText.style.display = 'none';
    }
})


const cart = document.querySelector('.cart');
const cartClose = document.querySelector('.cart__close');
const cartOpen = document.querySelector('.cartOpen');
const cartOpen2 = document.querySelector('.cart-open');

const menu = document.querySelector('.header__submenu');
const menuClose = document.querySelector('.header__subitem--close--icon');
const menuOpen = document.querySelector('.header__menu');


const toggleMenu = () => {
    menu.classList.toggle('header__submenu--open');
}
menuClose.addEventListener('click', toggleMenu);
menuOpen.addEventListener('click', toggleMenu);


const toggleCart = () => {
  cart.classList.toggle('cart__open');
}

cartClose.addEventListener('click', toggleCart);
cartOpen.addEventListener('click', toggleCart);
cartOpen2.addEventListener('click', toggleCart);