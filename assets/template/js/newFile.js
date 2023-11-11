$(document).ready(function() {


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


    $(".fancybox").fancybox();

    $('.where-tooltip').tooltip(); {
        placement: "left",
        title;
        "tooltip on left",
        template;
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>';
    };
});