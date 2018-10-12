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

// Check for winning combinations vertically

const winVert = () => {
    for (let i = 0; i < 7; i++) {
        if ($('.column').children('.pink') || $('.column').children('.black') {
            counter++
            if (counter >= 4) {
                return true
                alert ('You won!')
            }
        } else {
            counter = 0
        }
    }
    return false
}