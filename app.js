var column = $('.column')
var player = $('.column .row').hasClass('pink')

// Switch between players
var changePlayer = () => {
    if (player == 'pink') {
        player = 'black'
    }
    else {
        player = 'pink'
    }
}

