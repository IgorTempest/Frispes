$(document).ready(function() {

    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $(this).toggleClass("is-active");
        $('.menu_reg_block').toggleClass("menu_reg_block_open");
        $('.content').toggleClass("content_move");
        $('.logo').toggleClass("logo_move");
        $('.bg').toggleClass("bg_show");
    });


    $(".main-gal.owl-carousel").owlCarousel({
        autoplay: 5000,
        slideSpeed: 2000,
        items: 1,
        autoHeight: true,
        loop: true,
        nav: false,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        center: true,
        dots: true,
        responsiveClass: true,
        smartSpeed: 800,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                dots: false,
                nav: true
            },
            768: {}
        },
    });

    $('.spaces-slide-counter').text('1/' + $('.spaces-gal .spaces-slide').length);
    $(".spaces-gal.owl-carousel").owlCarousel({
        autoplay: true,
        slideSpeed: 2000,
        items: 3,
        autoHeight: true,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        center: true,
        dots: true,
        responsiveClass: true,
        smartSpeed: 800,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                nav: true
            },
            660: {
                items: 2,
                margin: 20,
                nav: true
            },
            991: {

            }
        }
    });


    $('.spaces-gal').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.spaces-slide-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true
    });

    $(function() {
        var owl = $('.features-slider.owl-carousel'),
            owlOptions = {
                slideSpeed: 2000,
                loop: true,
                margin: 0,
                responsiveClass: true,
                autoplay: true,
                smartSpeed: 800,
                items: 3,
                nav: true,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    530: {
                        items: 2
                    },
                    730: {
                        items: 3
                    }
                }
            };

        if ($(window).width() < 1100) {
            var owlActive = owl.owlCarousel(owlOptions);
        } else {
            owl.addClass('off');
        }

        $(window).resize(function() {
            if ($(window).width() < 1100) {
                if ($('.features-slider.owl-carousel').hasClass('off')) {
                    var owlActive = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if (!$('.features-slider.owl-carousel').hasClass('off')) {
                    owl.addClass('off').trigger('destroy.owl.carousel');
                    owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });
    });


    document.querySelector('ul.sidebar-menu').addEventListener("click", function(e) {
        e.preventDefault();
        if (e.target.tagName == 'A') {
            let clickedId = e.target.parentNode.id;
            let divs = document.querySelectorAll('div.picture>div');
            divs.forEach((el) => {
                el.classList.remove('visible');
                el.classList.add('invisible');
            });
            let targertEl = 'div.picture>div.' + clickedId;
            document.querySelector(targertEl).classList.add('visible');
        }
    });


    $('.sidebar-menu li').click(function(event) {
        $(this).addClass('click');
        $(".sidebar-menu li").not(this).removeClass("click");
    });


    $(".gallery-slider.owl-carousel").owlCarousel({
        autoplay: true,
        items: 3,
        slideSpeed: 2000,
        autoHeight: true,
        loop: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        center: true,
        dots: false,
        responsiveClass: true,
        smartSpeed: 800,
        responsive: {
            0: {
                margin: 15,
                center: false
            },
            350: {
                items: 3,
                margin: 30
            },
             1150: {
                items: 3,
                margin: 60
            }
        }
    });


    $(function() {
        var owl = $('.brands-slider.owl-carousel'),
            owlOptions = {
                slideSpeed: 2000,
                loop: true,
                margin: 0,
                responsiveClass: true,
                autoplay: true,
                smartSpeed: 800,
                items: 3,
                nav: false,
                navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
                responsive: {
                    0: {
                        items: 1
                    },
                    530: {
                        items: 2
                    },
                    730: {
                        items: 3
                    }
                }
            };

        if ($(window).width() < 1100) {
            var owlActive = owl.owlCarousel(owlOptions);
        } else {
            owl.addClass('off');
        }

        $(window).resize(function() {
            if ($(window).width() < 1100) {
                if ($('.brands-slider.owl-carousel').hasClass('off')) {
                    var owlActive = owl.owlCarousel(owlOptions);
                    owl.removeClass('off');
                }
            } else {
                if (!$('.brands-slider.owl-carousel').hasClass('off')) {
                    owl.addClass('off').trigger('destroy.owl.carousel');
                    owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
                }
            }
        });
    });


    $(".reviews-gal.owl-carousel").owlCarousel({
        autoplay: true,
        slideSpeed: 2000,
        items: 3,
        autoHeight: true,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        center: true,
        dots: true,
        responsiveClass: true,
        smartSpeed: 800,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                nav: true
            },
            660: {
                items: 2,
                margin: 20,
                nav: true
            },
            991: {

            }
        }
    });

});