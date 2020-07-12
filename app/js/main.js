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
            prevArrow: '<button type = "button" class = "followers__btn followers__btn-prev"> <img src = "images/icons/chevron-left.svg" class="chevron"></button>',
            nextArrow: '<button type = "button" class = "followers__btn followers__btn-next"> <img  class="chevron" src = "images/icons/chevron-right.svg"></button>',
            slidesToScroll: 3,
            slidesToShow: 3,
        }

    );
    $(".rateYo").rateYo({
        rating: 5,
        starWidth: "15px",
        readOnly: true
    });




})