$(".header__top-closebtn").on("click", function(e) {
    e.preventDefault()
    $(this).toggleClass("header__top--open")
    $(".header__top-navigationbts").slideToggle()
});
$(".header__top-category").on("click", function(e) {
    e.preventDefault()
    $(".header__categorys").toggleClass("header__categorys--open")
    $(".cover").toggleClass("cover--open")
})
$(".header__categorys--closebtn").on("click", function(e) {
    e.preventDefault()
    $(".header__categorys").toggleClass("header__categorys--open")
    $(".cover").toggleClass("cover--open")
})
$(".cover").on("click", function(e) {
    e.preventDefault()
    $(".header__categorys").toggleClass("header__categorys--open")
    $(this).removeClass("cover--open")
})
$(".header__category-li").on("click", function(e) {
    if ($(this).children().children().hasClass("header__link-open--close")) {
        $(this).children().children().removeClass("header__link-open--close")
        $(this).next().slideUp()
    }   
    else {
    $(".header__category-li").children().children().removeClass("header__link-open--close")
    $(this).children().children().addClass("header__link-open--close")
    $(".header__category-li").next().slideUp()
    $(this).next().slideDown()

}
})
jQuery(function ($) {
    $(".top-sellers__main-slider").slick({
        slidesToShow : 3,
        arrows :false,
        dots : false,
        infinite: true,
        appendArrows: $(".top-sellers__bts"),
        responsive : [
            {
            breakpoint : 900,
            settings : {
                slidesToShow: 1
            }
        
        }],
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

    
})
$(function () {
    $(".updates__list").slick({
        slidesToShow : 3,
        arrows :false,
        dots : false,
        infinite: true,
        appendArrows: $(".updates__bts-box"),
        responsive : [
            {
            breakpoint : 900,
            settings : {
                slidesToShow: 2
            },
            },
            {
                breakpoint : 600,
                settings : {
                    slidesToShow: 1}}
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

    
})
$(".header__burger").on("click", function(e) {
    e.preventDefault()

})