$(document).ready(function () {

    $('.tattoo').on('click', function (e) {
        e.preventDefault();

        $(this).addClass('activetattoo');

        $('#slider').attr('class', "");

        updatePic();
    });

    $('#close-slider').on('click', function () {

        $('#slider').attr('class', "hidden");

        $('.activetattoo').removeClass('activetattoo');
    });

    $('#left-img').on('click', function (e) {
        e.preventDefault();

        changeActive('left');
        updatePic();
    });

    $('#right-img').on('click', function (e) {
        e.preventDefault();

        changeActive('right');
        updatePic();
    });

    function changeActive(vector) {
        var active = $('.activetattoo').removeClass('activetattoo');
        if (vector === 'right') {
            active = active.next();
            if (active.length == 0) {
                $('.tattoo').first().addClass('activetattoo');
            } else {
                active.addClass('activetattoo');
            }
        } else {
            active = active.prev();
            if (active.length == 0) {
                $('.tattoo').last().addClass('activetattoo');
            } else {
                active.addClass('activetattoo');
            }
        }
    }

    function updatePic() {
        $('#slider-pic').attr('src', $('.activetattoo').attr('src'));
    }
});