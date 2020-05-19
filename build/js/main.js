$(".button-box").on("click", function (event) {
  event.preventDefault();
  $(".header__burger").toggleClass("active");
  $('.header__menu').toggleClass("active");
});

$('a.header__menuItem').on('click', function (event) { 
  event.preventDefault();
  $('.header__menu a').removeClass('active');
  $(this).addClass('active');
  
});
