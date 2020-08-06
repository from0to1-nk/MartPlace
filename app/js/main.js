$(function () {

    $('.featured__slider').slick({
            prevArrow: '<button type = "button" class = "featured__btn featured__btn-prev"> <img src = "images/icons/chevron-left.svg" class="chevron"></button>',
            nextArrow: '<button type = "button" class = "featured__btn featured__btn-next"> <img  class="chevron" src = "images/icons/chevron-right.svg"></button>',
            slidesToScroll: 1,
            slidesToShow: 1,
        }

    );
    $('.followers__slider').slick({
            prevArrow: '<button type = "button" class = "followers__btn followers__btn-prew"> <img  class="chevron" src = "images/icons/chevron-left.svg"></button>',
            nextArrow: '<button type = "button" class = "followers__btn followers__btn-next"> <img  class="chevron" src = "images/icons/chevron-right.svg"></button>',
            slidesToScroll: 3,
            slidesToShow: 3,

        }

    );
    $('.feedback__slider').slick({
        prevArrow: '<button type="button" class = "feedback__btn feedback__btn-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button type = "button" class = "feedback__btn feedback__btn-next lnr lnr-chevron-right"></button>',
        slidesToScroll: 2,
        slidesToShow: 2,
    });

    $('.menu__btn').on('click', function () {
        $('.header-menu__list').slideToggle()
    });

    $('.drop-down__pages').on('click', function () {
        $('.drop-down__mega-menu').toggleClass('active')
    });
    $('.drop-down__all').on('click', function () {
        $('.menu-all').toggleClass('active')
    });
    $('.drop-down__home').on('click', function () {
        $('.menu-home').toggleClass('active')
    });
    $('.drop-down__wordpress').on('click', function () {
        $('.menu-wordpress').toggleClass('active')
    });

    $('.header__btn-menu').on('click', function () {
        $('.header__top-interaction').toggleClass('active')
    });
    $('.user__box').on('click', function () {
        $('.user__menu').toggleClass('active')
    });
    $(".rateYo").rateYo({
        rating: 3.5,
        starWidth: "13px",
        readOnly: true,
        halfStar: true,
        spacing: "5px",
    });


    $(".featured-rateYo").rateYo({
        rating: 3.5,
        starWidth: "16px",
        readOnly: true,
        halfStar: true,
        spacing: "4px",
    });

    if (document.documentElement.clientWidth < 901) {
        $('.room__info-btn').on('click', function () {
            $('.user__menu').slideToggle()
        })

    };




    var mixer = mixitup('.products__box');

});