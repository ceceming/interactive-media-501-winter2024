$(document).ready(function () {
    const colors = ['#1d2f40', '#087f8c', '#f2dcc9', '#f28379', '#bf3b3b'];
    const numOfRectangles = Math.floor($('.foreground').width() / 60) * Math.floor($('.foreground').height() / 60);

    for (let i = 0; i < numOfRectangles; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        $('.foreground').append(`<div class="rectangle" style="background-color: ${color};"></div>`);
    }

    $('.rectangle').on('mouseenter', function () {
        $(this).addClass('open');
    }).on('mouseleave', function () {
        $(this).removeClass('open');
    });

    var $textContainer = $('#text-container');
    var text = $textContainer.text();
    var letters = text.split('');

    $textContainer.empty();

    $.each(letters, function (i, letter) {
        var color = colors[Math.floor(Math.random() * colors.length)];
        var $span = $('<span>').text(letter).css({
            'color': color
        });

        $textContainer.append($span);
    });
});

$(document).ready(function () {
    $(document).click(function () {
        location.reload();
    });
});

$(document).mousemove(function (e) {
    $('#mouse-circle').css({
        left: e.pageX - 50, 
        top: e.pageY - 50 
    }).fadeToggle('slow');
});
