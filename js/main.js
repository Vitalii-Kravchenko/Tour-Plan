const hotelSlider = new Swiper('.hotel-slider', {

  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
  },
});

const reviewsSlider = new Swiper('.reviews-slider', {

  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
  },
});

let menuButton = document.querySelector(".burger-menu");

menuButton.addEventListener("click", function() {
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--mobile_visible");
});