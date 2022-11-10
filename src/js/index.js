function toggleActive(obj) {
    obj.classList.toggle("active");
}

$(document).ready(function(){
    $('.carousel__images').slick({
        // normal options...
        dots: true,
        infinite: true,

        slidesToShow: 1.6,
        // slidesToShow: 2,
        slidesToScroll: 1,
        // speed: 800,

        // variableWidth: true,
        draggable: false,

        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnDotsHover: true,

        appendDots: $('#dots'),
        // dotsClass: $('#prev_arrow'),
        prevArrow: $('#prev_arrow'),
        nextArrow: $('#next_arrow'),

        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
});

