$(function () {



    $('.header__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".filter-price__input").ionRangeSlider({
        type: "double",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });

    $('.menu__btn,  .header__menu a').on('click', function () {
        $('.header__menu').toggleClass('header__menu--active');
        $('.menu__btn').toggleClass('menu__btn--active');
        $('body').toggleClass('lock-scroll');
    });

    $('.header__btn-logout, .header__login-close').on('click', function () {
        $('.header__login').toggleClass('header__login--active');
        $('.header').toggleClass('header--active');
        $('body').toggleClass('lock-scroll--logout');
    });

    $('.shop__filter-btn, .shop__filter-close, .filter-price__btn').on('click', function () {
        $('.shop__filter').toggleClass('shop__filter--active');
        $('.header').toggleClass('header--active');

    });


    $(" .header__list-link, .header__top-logo").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    var mixer = mixitup('.shop__content-items');


    $('.select-style').styler();







});