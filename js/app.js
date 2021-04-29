$(document).ready(function() {

    const swiper = new Swiper('.main-slider', {
        loop: true,
        // autoplay: {
        //     // delay: 3000,
        // },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        }
    });
    $( ".projects__tabs" ).tabs();
    const playButton =$("#video__play");
    const content = $ ('.video__content');
    playButton.on("click", function() {
        if (video.paused == true) {
        video.play();
        content.addClass('hidden');
 
    } else {
        video.pause();
        content.removeClass('hidden');

     }
    });
});
