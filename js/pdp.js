new Swiper(".carousel__swiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0
      }
    }
  });

  new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    // loop: true,
    scrollbar: {
      el: '.hero-scrollbar',
      hide: true,
    },
    navigation: {
      nextEl: ".hero__right",
      prevEl: ".hero__left"
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });


const footerGift = document.querySelector('.footer__gift');
const footerHiddenText = document.querySelector('.footer__hidden--text');
// const productItem = document.querySelector('.product__select--item');

footerGift.addEventListener('click', function(){
    if(footerHiddenText.style.display === 'none'){
        footerHiddenText.style.display = 'block';
    }else{
        footerHiddenText.style.display = 'none';
    }
})

// productItem.addEventListener('click', function(){
//   if(productItem.style.opacity === 0.4){
//     productItem.style.opacity = 1;
//   }else{
//     productItem.style.opacity = 0.4;
//   }
// })

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