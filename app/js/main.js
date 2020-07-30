$(function () {
    var mixer = mixitup('.products__box');
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


})