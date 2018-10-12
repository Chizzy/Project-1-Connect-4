let column = $('.column')
let player ='pink'
let space = $('#space')
let counter = 0

// Switch between players and stack upward
$('.column').click(function() {
    counter++
    if (counter % 2 === 0) {
        $(this).children().not('.pink, .black').last().addClass('pink');
    } else {
        $(this).children().not('.pink, .black').last().addClass('black');
    }
});


