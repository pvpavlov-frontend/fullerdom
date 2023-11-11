$(document).ready(function() {
    // jQuery.scrollSpeed(1920, 800);

    $(".navbar-nav a").on('click', function() {
        console.log('click');
        $("#navbar").collapse('hide');
    });

    $('.slick-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });
    $('.slick-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });


    $(".fancybox").fancybox();

    new WOW().init();

});