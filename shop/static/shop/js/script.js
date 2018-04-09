$(document).ready(function () {


    $('#vk-btn').append(VK.Share.button(false,{type: "round", text: "Поделиться"}));

    $('.m-slider').slick({

        dots: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: '<span class="carousel-control-prev-icon slick-prev arrow" aria-hidden="true"> < </span>',
        prevArrow: '<span class="carousel-control-next-icon slick-next arrow" aria-hidden="true"> > </span>',
        swipe: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    swipe: true,
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });



    $('.see').on('click',function()
            {
                var sr=$(this).attr('src');
                $('#mimg').attr('src',sr);
                $('#myModal').modal('show');
            });
});