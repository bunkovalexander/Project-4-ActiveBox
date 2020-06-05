$(document).ready(function () {
  let header = $("nav");
  let advantages = $(".header");
  let advantagesH = advantages.outerHeight();
  // console.log(advantagesH);

  let scrollPos = $(window).scrollTop();
  // kjhkhl

  $(window).on("scroll load resize", function () {
    let scrollW = $(this).scrollTop();
    let navH = $("nav").outerHeight();
    let difference = advantagesH - navH * 2;
    // console.log(advantagesH);
    // console.log(navH);
    // console.log(difference);
    // console.log(scrollW);

    if (scrollW > difference) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // header.addClass("fixed");

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
  // console.log("rabotaet");
});
