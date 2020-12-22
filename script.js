const burgerMenu = document.querySelector('.burger-wrapper');
const burgerMenuTop = burgerMenu.querySelector('.top');
const burgerMenuBottom = burgerMenu.querySelector('.bottom')
const burgerTitle = document.querySelector('.burger-title');

const overlay= document.querySelector('.overlay');
const menuOverlay = overlay.querySelector('.menu');
const logo = overlay.querySelector('.logo');

const popup = document.querySelector('.popup');
const buttonOrder = document.querySelector('.order');

const overlayColoredOpenedClass = 'overlay-colored--opened';
const menuOpenedClass = 'menu--opened';
const logoMenuOpenedClass = 'logo-menu--opened';
const burgerOpenedClass = 'burger--opened';
const topRotateClass = 'top-rotate';
const bottomRotateClass = 'bottom-rotate';
const burgerTitleHiddenClass = 'burger-title-hidden';

const overlayOpenedClass = 'overlay--opened';
const overlayClosedClass = 'overlay--closed';




function overlayHidden() {
    overlay.classList.remove(overlayColoredOpenedClass);
    menuOverlay.classList.remove(menuOpenedClass);
    logo.classList.remove(logoMenuOpenedClass);
    burgerMenu.classList.remove(burgerOpenedClass);
    burgerMenuTop.classList.remove(topRotateClass);
    burgerMenuBottom.classList.remove(bottomRotateClass);
    burgerTitle.classList.remove(burgerTitleHiddenClass);
}

function showOverlay() {
    overlay.classList.add(overlayColoredOpenedClass);
    menuOverlay.classList.add(menuOpenedClass);
    logo.classList.add(logoMenuOpenedClass);
    burgerMenu.classList.add(burgerOpenedClass);
    burgerMenuTop.classList.add(topRotateClass);
    burgerMenuBottom.classList.add(bottomRotateClass);
    burgerTitle.classList.add(burgerTitleHiddenClass);
}

function showPopup() {
    popup.classList.add(overlayOpenedClass);
    popup.classList.remove(overlayClosedClass);
}
function popupHidden() {
    popup.classList.remove(overlayOpenedClass);
    popup.classList.add(overlayClosedClass);
}



burgerMenu.onclick = function() {
    if(overlay.classList.contains(overlayColoredOpenedClass)) {
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
    if( isClosedButton || isPopup) {
        popupHidden();
    }
}


const catalogList = document.querySelectorAll('.list-item');

for(let i=0; i<catalogList.length; i++) {
    catalogList[i].onmouseenter = function() {
        let buttonList = catalogList[i].querySelector('.list-item-button');
        buttonList.classList.remove('button-hidden');
        buttonList.classList.add('button--show');
    }
}

for(let i=0; i<catalogList.length; i++) {
    catalogList[i].onmouseleave = function(e) {
        let target = e.target;
        let buttonhHidden = target.querySelector('.list-item-button');
        buttonhHidden.classList.remove('button--show');
        buttonhHidden.classList.add('button-hidden');
    }
}


