$(document).ready(function () {
    function cookClear(){
        $('.button-cookies-no').on('click', function(){
            localStorage.removeItem('cookSD','cookYesSD');
            $.fancybox.close( $('.modal-cookies'));
        });
    }
    function cookSet(){
        $('.button-cookies-yes').on('click', function(){
            localStorage.setItem('cookSD','cookYesSD');
            $.fancybox.close( $('.modal-cookies'));
        });
    }
    cookClear();
    cookSet();

    $('.button-cookies-yes').attr('disabled', !$('.check-cookies').prop('checked'));
    $('.check-cookies').change(function(){
        $('.button-cookies-yes').attr('disabled', !$('.check-cookies').prop('checked'));
    });
    if (!localStorage.getItem('cookSD','cookYesSD')){
        $.fancybox.open( $('.modal-cookies'));
        cookSet();
        cookClear();
    }
    $(function () {
        var check = $('.check', this),
            email = $('.input-mail', this),
            name = $('.input-name', this),
            message = $('.alert-message', this);
        $(".form").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert-message', this),
                reNone = /.+/,
                email = $('.input-mail', this),
                name = $('.input-name', this);
            if (!name.val().match(reNone)) {
                name.css('borderColor','red');
                message.text('Введите имя').slideDown(500);
                return false;
            }
            if (!email.val().match(reNone)) {
                email.css('borderColor','red');
                message.text('Введите email').slideDown(500);
                return false;
            }
            if (!check.prop("checked")) {
                check.next().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                check.next().children().css({
                    'color': 'red',
                    'transition': 'all .4s ease'
                });
                message.text('↙ Подтвердите соглашение').slideDown(500);
                return false;
            }
            if (email.val() && check) {

                // button.text('Отправляем...');
                // setTimeout(function () {
                //     button.text('Отправлено!');
                // }, 500);
                return true
            }
        });
        name.click(function () {
            name.css('borderColor','#000');
            message.slideUp(500);
        });
        email.click(function () {
            email.css('borderColor','#000');
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css({
                "color": "#4E4C4C",
                'transition': 'all .4s ease'
            });
            check.next().children().css({
                "color": "#4E4C4C",
                'transition': 'all .4s ease'
            });
            message.slideUp(500);
        });
    });
    // модалка
    $('.button-up').fancybox();
    // Видео
    $(".video-wrapper-video .play-button").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    });
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
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
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