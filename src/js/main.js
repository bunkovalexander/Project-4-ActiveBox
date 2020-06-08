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
      $("a.header__menuItem").removeClass("active");
    }
    $(".header__burger").removeClass("active");
    $(".header__menu").removeClass("active");
  });

  /*SMOOTH SCROLL*/
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let elementId = $(this).data("scroll");
    // console.log(elementId);
    let elementOffset = $(elementId).offset().top;
    // console.log(elementOffset);
    $(".header__burger").removeClass("active");
    $(".header__menu").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: elementOffset,
      },
      300
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
    // $(this).addClass("active");
  });
  // SLIDER

  let slider = $(".rewiews");
  $(slider).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(window).on("scroll", function () {
    let scrollPosYY = $(window).scrollTop();
    let scrollWYY = $(this).scrollTop();
    // let scrollWYY = $(this).width();
    // console.log(scrollPosYY, scrollWYY, scrollWYY);
  });
});

/* SEXTION_SCROLL*/

var sections = $(".sect"),
  nav = $(".header__menu"),
  nav_height = nav.outerHeight(); //получили высоту блока навигации

$(window).on("scroll load resize", function () {
  var cur_pos = $(this).scrollTop(); // получили высоту от верха до верха окна

  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      let navFind = nav.find("a").removeClass("active");
      // console.log(navFind);

      sections.removeClass("active");

      $(this).addClass("active");
      let navData = nav.find('a[data-scroll="#' + $(this).attr("id") + '"]');

      navData.addClass("active");
      // console.log(navData);
    }
  });
  //});
  // nav.find("a").on("click", function () {
  //   var $el = $(this),
  //     id = $el.attr("data-scroll");

  //   $("html, body").animate(
  //     {
  //       scrollTop: $(id).offset().top - nav_height,
  //     },
  //     1000
  //   );

  //   return false;
});
