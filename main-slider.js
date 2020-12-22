function atLeastTablet() {
    const tabletVisible = document.querySelector(".tablet-visible");
    return !!tabletVisible.offsetWidth
}

function atLeastXl() {
    const xlVisible = document.querySelector(".xl-visible");
    return !!xlVisible.offsetWidth
}

const isMobile = !atLeastTablet();
const isTabletOrDesktop = atLeastTablet() && !atLeastXl();
const isXl = atLeastXl();

function renderBrideFlowersSlide() {
    return `<a href="./page-bride.html" class="list-item first">
      <h3 class="list-item-heading left">01</h3>
      <div class="list-item-wrapper">
        <p class="list-item-text">букет невесты и свадебное оформление</p>
        <button class="list-item-button button-hidden">смотреть работы</button>
      </div>
    </a>`;
}

function renderPartyFlowersSlide() {
    return `<a href="./page-party.html" class="list-item second">
      <h3 class="list-item-heading right">02</h3>
      <div class="list-item-wrapper">
        <p class="list-item-text">букеты на торжества</p>
        <button class="list-item-button button-hidden">смотреть работы</button>
      </div>
    </a>`
} 

function renderCompositionsSlide() {
    return `<a href="./page-composition.html" class="list-item third">
      <h3 class="list-item-heading right">03</h3>
      <div class="list-item-wrapper">
        <p class="list-item-text">композиции</p>
        <button class="list-item-button button-hidden">смотреть работы</button>
      </div>
    </a>`
}

function renderActivityFlowersSlide() {
    return `<a href="./page-activity.html" class="list-item fourth">
      <h3 class="list-item-heading right">04</h3>
      <div class="list-item-wrapper">
        <p class="list-item-text">оформление мероприятий</p>
        <button class="list-item-button button-hidden">смотреть работы</button>
      </div>
    </a>`
}

function renderMobileSlides() {
    const sliderInner = document.querySelector(".swiper-wrapper");
    const slides = `
        <div class="swiper-slide">
            ${renderBrideFlowersSlide()}
        </div>
        <div class="swiper-slide">
            ${renderPartyFlowersSlide()}
        </div>
        <div class="swiper-slide">
            ${renderCompositionsSlide()}
        </div>
        <div class="swiper-slide">
            ${renderActivityFlowersSlide()}
        </div>
    `
    sliderInner.innerHTML = slides;
}

function renderTabletAndDesktopSlides() {
    const sliderInner = document.querySelector(".swiper-wrapper");
    const slides = `
        <div class="swiper-slide">
            ${renderBrideFlowersSlide()}
            ${renderPartyFlowersSlide()}
        </div>
        <div class="swiper-slide">
            ${renderCompositionsSlide()}
            ${renderActivityFlowersSlide()}
        </div>
    `
    sliderInner.innerHTML = slides;
}

function initSlider() {
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })
}
if (isMobile) {
    renderMobileSlides();
    initSlider();
}
if (isTabletOrDesktop) {
    renderTabletAndDesktopSlides();
    initSlider();
}
