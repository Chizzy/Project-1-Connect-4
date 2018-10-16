let counter = 0
let column = $('.column')
let player1Count = 0
let player2Count = 0

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
          $('.player1').html(`${value} ⬤ <div class="score score1">0</div>`)
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
            $('.player2').html(`${value} <span>⬤</span> <div class="score score1">0</div>`)
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
                swal ("You win!")
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
                swal ("You win!")
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
                swal ("You win!")
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
                swal ("You win!")
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
                swal ("You win!")
                return true
            } else if (sameColor(findPink(col, row), findPink(col - 1, row + 1), findPink(col - 2, row + 2), findPink(col - 3, row + 3))) {
                console.log('diagonal')
                swal ("You win!")
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
                swal ("You win!")
                return true
            } else if (sameColor(findBlack(col, row), findBlack(col - 1, row + 1), findBlack(col - 2, row + 2), findBlack(col - 3, row + 3))) {
                console.log('diagonal')
                swal ("You win!")
                return true
            } else {
                continue
            }
        }
    }
}



// When someone wins


// if (winVert() || winHoriz() || winDiag()) {
//     counter++
//     if (counter % 2 === 0) {
//         let score = parseInt($('.score1').html())
//         score++
//         score.toString
//         $('.score1').html(score)
//     }
// }

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