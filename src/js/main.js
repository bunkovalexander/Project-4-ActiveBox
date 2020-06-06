$(document).ready(function () {
  /*FIXED HEADER*/

  $(window).on("scroll load resize", function () {
    let header = $("nav");
    let advantages = $(".header");
    let advantagesH = advantages.outerHeight();
    let scrollPos = $(window).scrollTop();
    let scrollW = $(this).scrollTop();
    let navH = $("nav").outerHeight();
    let difference = advantagesH - navH * 2;

    if (scrollW > difference) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
    $(".header__burger").removeClass("active");
    $(".header__menu").removeClass("active");
  });

  /*SMOOTH SCROLL*/
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    console.log(elementId);
    let elementOffset = $(elementId).offset().top - 100;
    console.log(elementOffset);
    $(".header__burger").removeClass("active");
    $(".header__menu").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      1200
    );
  });

  $(".button-box").on("click", function (event) {
    event.preventDefault();
    $(".header__burger").toggleClass("active");
    $(".header__menu").toggleClass("active");
  });

  $("a.header__menuItem").on("click", function (event) {
    event.preventDefault();
    $(".header__menu a").removeClass("active");
    $(this).addClass("active");
  });
  // SLIDER

  let slider = $(".rewiews");
  $(slider).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    // autoplay: true,
    autoplaySpeed: 2000,
  });
});
