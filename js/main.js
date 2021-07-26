$(document).ready(function () {
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

  let menuButton = $(".burger-menu");
  var body = $("body");

  menuButton.on("click", function() {
    $(".navbar-bottom").toggleClass("navbar-bottom--mobile_visible");

    if(body.css("overflow") == "hidden") {
      body.css({"overflow":"auto"});
    } else {
      body.css({"overflow":"hidden"});
    }
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");

    
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();

    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");

    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(document).on('keydown', function(event) {
    if (event.keyCode == 27) {
        closeModal(event);
    }
  });

  $(document).on('click', function(event) {
    $.each(event.target.classList, function(i, key) {
      if (key == "modal__overlay--visible") {
        closeModal(event);
      }
    });
  });

  $(".form--validate").each(function() {
    $(this).validate({
      errorClass: "validate-error",
      messages: {
        name: "Please specify your name",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
        emailSubscribe: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
      },
    });
  });

  $(".newsletter-form").validate({
      errorClass: "validate-newsletter",
      messages: {
        emailSubscribe: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        },
      },
    });

});