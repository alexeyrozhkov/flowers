const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuTop = burgerMenu.querySelector('.top');
const burgerMenuBottom = burgerMenu.querySelector('.bottom')
const burgerTitle = document.querySelector('.burger-title');

const overlay= document.querySelector('.overlay');
const menuOverlay = overlay.querySelector('.menu');
const logo = overlay.querySelector('.logo');

const popup = document.querySelector('.popup');
const buttonOrder = document.querySelector('.order');


function overlayHidden() {
    overlay.classList.remove('overlay-colored--opened');
    menuOverlay.classList.remove('menu--opened');
    logo.classList.remove('logo-menu--opened');
    burgerMenu.classList.remove('burger--opened');
    burgerMenuTop.classList.remove('top-rotate');
    burgerMenuBottom.classList.remove('bottom-rotate');
    burgerTitle.classList.remove('burger-title-hidden');
}

function showOverlay() {
    overlay.classList.add('overlay-colored--opened');
    menuOverlay.classList.add('menu--opened');
    logo.classList.add('logo-menu--opened');
    burgerMenu.classList.add('burger--opened');
    burgerMenuTop.classList.add('top-rotate');
    burgerMenuBottom.classList.add('bottom-rotate');
    burgerTitle.classList.add('burger-title-hidden');
}

function showPopup() {
    popup.classList.add('overlay--opened');
    popup.classList.remove('overlay--closed');
}
function popupHidden() {
    popup.classList.remove('overlay--opened');
    popup.classList.add('overlay--closed');
}


burgerMenu.onclick = function() {
    if(overlay.classList.contains('overlay-colored--opened')) {
       overlayHidden();
    } else {
        showOverlay();
    }
}
buttonOrder.onclick =  function() {
    showPopup();
}
popup.onclick = function(e) {
    const target = e.target;
    const isPopup = target.classList.contains('popup-wrapper');
    const isClosedButton = target.closest('.popup-closed');
    console.log(target);
    if( isClosedButton || isPopup) {
        popupHidden();
    }
}