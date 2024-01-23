
$(document).ready(function () {
  // Ваш файл JavaScript (ES6 модуль)



  $(".header__top-closebtn").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("header__top--open");
  $(".header__top-navigationbts").slideToggle();
});
$(" .header__top-filters").on("click", function(e) {
  e.preventDefault()
  $(".header__categorys-list").css("display", "none")
  $(".shop__filters").css("display", "flex")
})
$(".header__top-category").on("click", function(e) {
  e.preventDefault()
  $(".header__categorys-list").css("display", "flex")
  $(".shop__filters").css("display", "none")
})
$(".header__top-category, .header__top-filters").on("click", function (e) {
  e.preventDefault();
  $(".header__categorys").addClass("header__categorys--open");
  $(".cover").toggleClass("cover--open");
  $(".header__categorys--closebtn").toggleClass("header__link-open");
});
$(".header__categorys--closebtn").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("header__link-open");
  $(".header__categorys").toggleClass("header__categorys--open");
  $(".cover").toggleClass("cover--open");
});
$(".cover").on("click", function (e) {
  e.preventDefault();
  $(".header__categorys").toggleClass("header__categorys--open");
  $(this).removeClass("cover--open");
});
$(".header__category-li").on("click", function (e) {
  if ($(this).children().children().hasClass("header__link-open--close")) {
    $(this).children().children().removeClass("header__link-open--close");
    $(this).next().slideUp();
  } else {
    $(".header__category-li")
      .children()
      .children()
      .removeClass("header__link-open--close");
    $(this).children().children().addClass("header__link-open--close");
    $(".header__category-li").next().slideUp();
    $(this).next().slideDown();
  }
});
jQuery(function ($) {
  $(".top-sellers__main-slider").slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    infinite: true,
    appendArrows: $(".top-sellers__bts"),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".top-sellers__btn-prev").on("click", function (e) {
    e.preventDefault();
    $(".top-sellers__main-slider").slick("slickPrev");
  });
  
  $(".top-sellers__btn-next").on("click", function (e) {
    e.preventDefault();
    $(".top-sellers__main-slider").slick("slickNext");
    $slickSlider.slick("slickPrev");
    $slickSlider.slick("slickNext");
  });
});
$(function () {
  $(".updates__list").slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    infinite: true,
    appendArrows: $(".updates__bts-box"),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".updates__btn--prev").on("click", function (e) {
    e.preventDefault();
    $(".updates__list").slick("slickPrev");
  });
  
  $(".updates__btn--next").on("click", function (e) {
    e.preventDefault();
    $(".updates__list").slick("slickNext");
    $slickSlider.slick("slickPrev");
    $slickSlider.slick("slickNext");
  });
});
$(".header__burger").on("click", function (e) {
  e.preventDefault();
});

$(".header__top-theme").on("click", function(e) {
  e.preventDefault();
  const theme = $(".theme");
  const profileTheme = $(".profiletheme")
  let themeStatus 
  if (theme.attr('href') === 'css/lighttheme.css') {
    theme.removeAttr('href');
    theme.attr('href', 'css/darktheme.css');
  } else {
    theme.removeAttr('href');
    theme.attr('href', 'css/lighttheme.css');
  }
  if (theme.attr('href') === 'css/lighttheme.css') {
    profileTheme.removeAttr('href');
    profileTheme.attr('href', 'css/darktheme.css');
    
    themeStatus = "dark"
  }
  else {
    profileTheme.removeAttr('href');
    profileTheme.attr('href', 'css/lighttheme.css');
    themeStatus = "light"
  }})
  
  
  var mixer = mixitup(".shop__info-grid");
  })
  $(".header__top-link--shop").on("click", function(e){
    e.preventDefault();
    $(".main").css("display", "none")
    $(".header__inner").css("display", "none")
    $(".shop").css("display", "block")
    $(".header__top-filters").css("display", "flex")
  })