$(function () {

    $('.single-product__tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-product__tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    $('.featured__slider').slick({
            prevArrow: '<button type = "button" class = "featured__btn featured__btn-prev"> <img src = "images/icons/chevron-left.svg" class="chevron"></button>',
            nextArrow: '<button type = "button" class = "featured__btn featured__btn-next"> <img  class="chevron" src = "images/icons/chevron-right.svg"></button>',
            slidesToScroll: 1,
            slidesToShow: 1,
            responsive: [{
                breakpoint: 600,
                settings: {
                    dots: true
                }
            }]
        }


    );
    $('.followers__slider').slick({
            prevArrow: '<button type = "button" class = "followers__btn followers__btn-prew"> <img  class="chevron" src = "images/icons/chevron-left.svg"></button>',
            nextArrow: '<button type = "button" class = "followers__btn followers__btn-next"> <img  class="chevron" src = "images/icons/chevron-right.svg"></button>',
            slidesToScroll: 3,
            slidesToShow: 3,
            responsive: [{
                    breakpoint: 1100,
                    settings: {
                        slidesToScroll: 2,
                        slidesToShow: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        dots: true
                    }
                },

            ]
        }

    );
    $('.feedback__slider').slick({
        prevArrow: '<button type="button" class = "feedback__btn feedback__btn-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button type = "button" class = "feedback__btn feedback__btn-next lnr lnr-chevron-right"></button>',
        slidesToScroll: 2,
        slidesToShow: 2,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    infinite: true,

                }
            },

        ]
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
        spacing: "4px",
    });
    $(".single-product__rateYo").rateYo({
        rating: 4.5,
        starWidth: "16px",
        readOnly: true,
        halfStar: true,
        spacing: "4px",
    });


    $(".featured-rateYo").rateYo({
        rating: 3.5,
        starWidth: "15px",
        readOnly: true,
        halfStar: true,
        spacing: "3px",
    });
    $(".list-rateYo").rateYo({
        rating: 3.5,
        starWidth: "15px",
        readOnly: true,
        halfStar: true,
        spacing: "6px",
    });

    $('input[type="file"], input[type="radio"], select').styler();


    if (document.documentElement.clientWidth < 901) {
        $('.room__info-btn').on('click', function () {
            $('.user__menu').slideToggle()
        })

    };
    $('.category-filter__sort-one').on('click', function () {
        $('.category-filter__sort-one').toggleClass('open')
    });
    $('.category-filter__sort-two').on('click', function () {
        $('.category-filter__sort-two').toggleClass('open')
    });
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        from: 30,
        to: 300,
        prefix: "$",
        max: 600,
    });

    //category start
    $('.representation__grid').on('click', function () {
        $('.representation__grid').addClass('active');
        $('.category-page__item').removeClass('list');
        $('.representation__list').removeClass('active');
    });
    $('.representation__list').on('click', function () {
        $('.representation__list').addClass('active');
        $('.category-page__item').addClass('list');
        $('.representation__grid').removeClass('active');
    });
    //category end
    $('.category-filters__btn').on('click', function () {
        $('.category-page__aside').addClass('page__aside-visible')
    });
    $('.category-filters__btn').on('click', function () {
        $('.aside-back').addClass('visible')
    });
    $('.aside-back').on('click', function () {
        $('.aside-back').removeClass('visible');
        $('.category-page__aside').removeClass('page__aside-visible')
    });

    $('.aside__categories').on('click', function () {
        $('.aside__categories-list').slideToggle()
    });

    $('.aside__filter-products').on('click', function () {
        $('.aside__list').slideToggle()
    });
    $('.all-button').on('click', function () {
        $('.products__button-wrap').slideToggle()
    });
    $('.category-sorts__btn').on('click', function () {
        $('.category-filter__sort-one,.category-filter__sort-two').slideToggle()
    });
    var mixer = mixitup('.category-page__products,.products__box,.favorites__box,.products__box');

    // //pagination start
    // let arrowPrev = document.querySelector('.pagination-arrow__prew');
    // let arrowNext = document.querySelector('.pagination-arrow__next');
    // let pages = document.querySelectorAll('.pagination-page');

    // function activePagination() {
    //     pages[0].classList.contains('active') ? arrowPrev.classList.add('disabled') : arrowPrev.classList.remove('disabled');
    //     pages[pages.length - 1].classList.contains('active') ? arrowNext.classList.add('disabled') : arrowNext.classList.remove('disabled');

    //     for (let i = 0; i < pages.length; i++) {
    //         pages[i].addEventListener('click', activateClass)
    //     }

    //     function activateClass(e) {
    //         for (let i = 0; i < pages.length; i++) {
    //             pages[i].classList.remove('active');
    //         }
    //         e.currentTarget.classList.add('active');
    //         pages[0].classList.contains('active') ? arrowPrev.classList.add('disabled') : arrowPrev.classList.remove('disabled');
    //         pages[pages.length - 1].classList.contains('active') ? arrowNext.classList.add('disabled') : arrowNext.classList.remove('disabled');
    //     }
    // }


    // activePagination()
    // //pagination end



});