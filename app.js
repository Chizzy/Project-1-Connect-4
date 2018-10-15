let counter = 0
let column = $('.column')

// Switch between players and stack upward
column.click(function () {
    counter++
    if (counter % 2 === 0) {
        $(this).children().not('.pink, .black').last().addClass('pink').html('0')
    } else {
        $(this).children().not('.pink, .black').last().addClass('black').html('1')
    }
});

// Highlights what column a player is on
column.mouseover(function () {
    $(this).css('background', 'gray')
})
column.mouseout(function () {
    $(this).css('background', 'silver')
})

// Check for same color (class)
const sameColor = (one, two, three, four) => {
    return (one === two && one === three && one === four && one !== undefined)
}

// Find the class (pink or black)
const classColor = (col, row) => {
    return (column.eq(col).find('.row').eq(row).hasClass('pink') || column.eq(col).find('.row').eq(row).hasClass('black'))
}

// Check for winning combinations vertically
const winVert = () => {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (sameColor(classColor(col, row), classColor(col + 1, row), classColor(col + 2, row), classColor(col + 3, row))) {
                console.log('vertical')
                return true
            } else {
                continue
            }
        }
    }
}

// Check for winning combinations horizontally
const winHoriz = () => {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (sameColor(classColor(col, row), classColor(col, row + 1), classColor(col, row + 2), classColor(col, row + 3))) {
                console.log('horizontal')
                return true
            } else {
                continue
            }
        }
    }
}


// Runs all functions to constantly check for winning combinations
$('.game').click(function () {
    winVert()
    winHoriz()
})