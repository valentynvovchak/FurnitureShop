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

        autoplay: false,
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

$(document).ready(function(){
    $('.carousel_rooms').slick({
        dots: true,
        infinite: true,
//        centerMode: true,
//        centerPadding: '85px',
        slidesToShow: 2.9,
        slidesToScroll: 1,
        draggable: false,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        prevArrow: false,
        appendDots: $('#room_dots'),
        nextArrow: $('#room_arrow'),
        responsive: [
            {
                 breakpoint: 530,
                settings: {
              
                     slidesToShow: 1
                 }
            
            },
            {
                 breakpoint: 900,
                settings: {
              
                     slidesToShow: 1.6
                 }
            
            },
            {
                 breakpoint: 1494,
                settings: {
              
                     slidesToShow: 2.3
                 }
            
            },
             {
                 breakpoint: 1200,
                 settings: {
              
                     slidesToShow: 2
                 }
             }
    ]
        

    });
});

$(document).ready(function(){
    $('.carousel_tips').slick({
        centerMode: true,
        centerPadding: '5px',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        prevArrow: $('#tips_arrow_right'),
        appendDots: $('#tips_dots'),
        nextArrow: $('#tips_arrow_left'),
        responsive: [
             {
                 breakpoint: 400,
                 settings: {
              
                     slidesToShow: 1
                 }
             }
    ]});
});




