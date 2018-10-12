let column = $('.column')
let player ='pink'
let space = $('#space')
let counter = 0

// Switch between players
$('.column .row').click(function (e) {
    $(this).css('background-color', 'pink')
    counter++
    if (counter % 2 === 0 ) {
        $(this).css('background-color', 'pink')
    }
    else {
        $(this).css('background-color', 'black')
    }
})

