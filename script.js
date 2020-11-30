const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuTop = burgerMenu.querySelector('.top');
const burgerMenuBottom = burgerMenu.querySelector('.bottom')
const burgerTitle = document.querySelector('.burger-title');

const overlay= document.querySelector('.overlay');
const menuOverlay = overlay.querySelector('.menu');
const logo = overlay.querySelector('.logo');



function overlayHidden() {
    overlay.classList.remove('overlay--opened');
    menuOverlay.classList.remove('menu--opened');
    logo.classList.remove('logo-menu--opened');
    burgerMenu.classList.remove('burger--opened');
    burgerMenuTop.classList.remove('top-rotate');
    burgerMenuBottom.classList.remove('bottom-rotate');
    burgerTitle.classList.remove('burger-title-hidden');
}

function showOverlay() {
    overlay.classList.add('overlay--opened');
    menuOverlay.classList.add('menu--opened');
    logo.classList.add('logo-menu--opened');
    burgerMenu.classList.add('burger--opened');
    burgerMenuTop.classList.add('top-rotate');
    burgerMenuBottom.classList.add('bottom-rotate');
    burgerTitle.classList.add('burger-title-hidden');
}


burgerMenu.onclick = function() {
    if(overlay.classList.contains('overlay--opened')) {
       overlayHidden();
    } else {
        showOverlay();
    }
    
}