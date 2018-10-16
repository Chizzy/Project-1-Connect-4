let counter = 0
let column = $('.column')
let player1 = ($('.player1 .name')).eq(0).text()
let player2 = ($('.player2 .name')).eq(0).text()
let player1Score = 0
let player2Score = 0

// Switch between players and stack upward
column.click(function () {
    counter++
    if (counter % 2 === 0) {
        $(this).children().not('.pink, .black').last().addClass('pink')
    } else {
        $(this).children().not('.pink, .black').last().addClass('black')
    }
});

// Highlights what column a player is on
column.mouseover(function () {
    $(this).css('background', 'gray')
})
column.mouseout(function () {
    $(this).css('background', 'silver')
})

// Ask for players' name and dom manipulation
    swal ({
        title: "Player 1's Name",
        content: 'input',
        input: 'text',
        closeOnClickOutside: false,
        closeModal: false,
      })
      .then((value) => {
          $('.player1 .name').html(`${value} ⬤`)
      })

        .then((value) => {
            swal ({
                title: "Player 2's Name",
                content: 'input',
                input: 'text',
                closeOnClickOutside: false,
                closeModal: false,
              })
          .then((value) => {
            $('.player2 .name').html(`${value} <span>⬤</span>`)
          })
        }) 
   
// Check for same color (class)
const sameColor = (one, two, three, four) => {
    one === true
    two === true
    three === true
    four === true
    return (one && two && three && four && one !== undefined)
}

// Find the class (pink or black)
const findPink = (col, row) => {
    return (column.eq(col).find('.row').eq(row).hasClass('pink'))
}
const findBlack = (col, row) => {
    return (column.eq(col).find('.row').eq(row).hasClass('black'))
}

// Check for winning combinations horizontally
const winHoriz = () => {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 6; row++) {
            if (sameColor(findPink(col, row), findPink(col + 1, row), findPink(col + 2, row), findPink(col + 3, row))) {
                console.log('horizontal')
                swal (($('.player2 .name')).eq(0).text().replace('⬤', '') + " wins!")
                // Adds point to winner
                player2Score++
                $('.player2 .score').html(player2Score)
                return true
            } else {
                continue
            }
        }
    }

    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 6; row++) {
            if (sameColor(findBlack(col, row), findBlack(col + 1, row), findBlack(col + 2, row), findBlack(col + 3, row))) {
                console.log('horizontal')
                swal (($('.player1 .name')).eq(0).text().replace('⬤', '') + " wins!")
                // Adds point to winner
                player1Score++
                $('.player1 .score').html(player1Score)
                return true
            } else {
                continue
            }
        }
    }
}

// Check for winning combinations vertically
const winVert = () => {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            if (sameColor(findPink(col, row), findPink(col, row + 1), findPink(col, row + 2), findPink(col, row + 3))) {
                console.log('vertical')
                swal (($('.player2 .name')).eq(0).text().replace('⬤', '') + " wins!")
                // Adds point to winner
                player2Score++
                $('.player2 .score').html(player2Score)
                return true
            } else {
                continue
            }
        }
    }

    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            if (sameColor(findBlack(col, row), findBlack(col, row + 1), findBlack(col, row + 2), findBlack(col, row + 3))) {
                console.log('vertical')
                swal (($('.player1 .name')).eq(0).text().replace('⬤', '') + " wins!")
                // Adds point to winner
                player1Score++
                $('.player1 .score').html(player1Score)
                return true
            } else {
                continue
            }
        }
    }
}

// Check for winning combinations diagonally
const winDiag = () => {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 6; row++) {
            if (sameColor(findPink(col, row), findPink(col + 1, row + 1), findPink(col + 2, row + 2), findPink(col + 3, row + 3))) {
                console.log('diagonal')
                swal (($('.player2 .name')).eq(0).text().replace('⬤', '') + " wins!")
                // Adds point to winner
                player2Score++
                $('.player2 .score').html(player2Score)
                return true
            } else if (sameColor(findPink(col, row), findPink(col - 1, row + 1), findPink(col - 2, row + 2), findPink(col - 3, row + 3))) {
                console.log('diagonal')
                swal (($('.player2 .name')).eq(0).text().replace('⬤', '') + " wins!")
                // Adds point to winner
                player2Score++
                $('.player2 .score').html(player2Score)
                return true
            } else {
                continue
            }
        }
    }

    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 6; row++) {
            if (sameColor(findBlack(col, row), findBlack(col + 1, row + 1), findBlack(col + 2, row + 2), findBlack(col + 3, row + 3))) {
                console.log('diagonal')
                swal (($('.player1 .name')).eq(0).text().replace('⬤', '') + " wins!")
                // Adds point to winner
                player1Score++
                $('.player1 .score').html(player1Score)
                return true
            } else if (sameColor(findBlack(col, row), findBlack(col - 1, row + 1), findBlack(col - 2, row + 2), findBlack(col - 3, row + 3))) {
                console.log('diagonal')
                swal (($('.player1 .name')).eq(0).text().replace('⬤', '') + " wins!")
                // Adds point to winner
                player1Score++
                $('.player1 .score').html(player1Score)
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
    winDiag()
})

// Clear board
$('#clear').click (function () {
    $('.column .row').removeClass('pink black')
})

// Restart entire game
$('#restart').click (function () {
    location.reload()
})