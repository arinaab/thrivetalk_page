'use strict';
document.addEventListener('DOMContentLoaded', () => {
    new WOW().init();

    const promoMenu = document.querySelector('.promo__menu'),
          hamburger = document.querySelector('.hamburger'),
          menuItem = document.querySelectorAll('.promo__menu__item');

    hamburger.addEventListener('click', () => {
        promoMenu.classList.toggle('promo__menu_active');
        hamburger.classList.toggle('hamburger_active');
        document.body.classList.toggle('overflow');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            promoMenu.classList.toggle('promo__menu_active');
            hamburger.classList.toggle('hamburger_active');
        });
    });
}); 
