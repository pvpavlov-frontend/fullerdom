$(document).ready(function() {

    var $menu = $("#menu");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $menu.hasClass("def")) {
            $menu.fadeOut('fast', function() {
                $(this).removeClass("def")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 50 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast', function() {
                $(this).removeClass("fixed transbg")
                    .addClass("def")
                    .fadeIn('fast');
            });
        }
    });
    $(".dropdown-menu li a").click(function(e) {
        e.preventDefault();
        $(".dropdown-menu li a").removeClass('active');
        $(this).addClass('active');

        var selected = $(this).text();
        $(this).parents('.language').find('.dropdown-toggle').html(selected);
    });


    $('.slick-2').on('setPosition', function() {
        $(this).find('.slick-slide').height('auto');
        $(this).find('.slick-slide>div').height('100%');
        var slickTrack = $(this).find('.slick-track');
        var slickTrackHeight = $(slickTrack).height();
        $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });


    $(".wrap-catalog__desc .front").on("click", function(e) {
        e.preventDefault();
        // if (this != e.target) return;
        if (this != e.target) return;
        console.log('prevented');
    });
});