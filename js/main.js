/***************************************************

==================== JS INDEX ======================

****************************************************

01. Sticky Js

02.  Scroll To Top Js

03. Data-Background Js

04. Nice Select Js

05. Dcotor SLider Active Js

****************************************************/

(function ($) {

    "use strict";


    // meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

    /*
    // One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
    	currentClass: 'active',
    	scrollOffset: top_offset,
    });
    */

    ////////////////////////////////////////////////////

    // 01. Sticky Js

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll < 245) {

            $("#header-sticky").removeClass("sticky");

        } else {

            $("#header-sticky").addClass("sticky");

        }
    });


    ////////////////////////////////////////////////////

    // 02. Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });



    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });


    ////////////////////////////////////////////////////

    // 03.  Data-Background Js

    $("[data-background]").each(function () {

        $(this).css("background-image", "url(" + $(this).attr("data-background") + " ) ")
    });



    ////////////////////////////////////////////////////

    // 04. Nice Select Js

    $('select').niceSelect();



    ////////////////////////////////////////////////////

    // 05. Doctor Slider Active Js

    $('.doctor-slide-active').slick({

        arrows: false,

        centerMode: true,

        centerPadding: '0px',

        prevArrow: '<button type="button" ><i class="fas fa-chevron-left"> </i></button>',

        nextArrow: '<button type="button" ><i class="fas fa-chevron-right"> </i></button>',

        dots: false,

        infinite: true,

        speed: 1000,

        slidesToShow: 3,

        slidesToScroll: 3,

        autoplay: true,

        autoplaySpeed: 1500,

        responsive: [

            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true

                }

			},

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true

                }

			},

            {

                breakpoint: 767,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			},

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			}

		]

    });


    /*

    // WOW active
    new WOW().init();
    */


})(jQuery);
