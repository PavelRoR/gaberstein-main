$(document).ready(function () {
        /* Якорь */
        $("a[href='#price']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    function cookClear(){
        $('.button-cookies-no').on('click', function(){
            localStorage.removeItem('cookNI','cookYesNI');
            $.fancybox.close( $('.modal-cookies'));
        });
    }
    function cookSet(){
        $('.button-cookies-yes').on('click', function(){
            localStorage.setItem('cookNI','cookYesNI');
            $.fancybox.close( $('.modal-cookies'));
        });
    }
    cookClear();
    cookSet();

    $('.button-cookies-yes').attr('disabled', !$('.check-cookies').prop('checked'));
    $('.check-cookies').change(function(){
        $('.button-cookies-yes').attr('disabled', !$('.check-cookies').prop('checked'));
    });
    if (!localStorage.getItem('cookNI','cookYesNI')){
        $.fancybox.open( $('.modal-cookies'));
        cookSet();
        cookClear();
    }

    // модалка
    $('.button-up').fancybox();
    // слайдер с видео-отзывами
    $('.revs-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        // adaptiveHeight: true,
        centerMode: true,
        // appendArrows: '.video-revs-arrows-1',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    // слайдер с текстовыми отзывами
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '40px',
        adaptiveHeight: true,
        centerMode: true,
        // appendArrows: '.video-revs-arrows-2',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.slick-dots').wrap('<div class="container container-revs">')
    $(".video-wrapper-video .play-button").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    });
    function imToVideo() {
        $('.video-wrapper-revs iframe').each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв"><div class="play-button play-button-rev"></div>');
        });
        $(".video-wrapper-revs img, .play-button-rev").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
        });
    }
    $('.revs-slider').on('swipe', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('afterChange', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('beforeChange', function (event, slick, direction) {
        imToVideo();
    });
    /* Видео */
    $(".video-wrapper-revs img, .play-button-rev").click(imToVideo());
    /*Конец документа*/
});