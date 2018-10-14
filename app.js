let counter = 0
let column = $('.column')
let row = $('.row')

// Switch between players and stack upward
column.click(function() {
    counter++
    if (counter % 2 === 0) {
        $(this).children().not('.pink, .black').last().addClass('pink').html('0')
    } else {
        $(this).children().not('.pink, .black').last().addClass('black').html('1')
    }
});

// Highlights what column a player is on
column.mouseover(function() {
    $(this).css('background', 'gray')
})
column.mouseout(function() {
    $(this).css('background', 'silver')
})

// Check for winning combinations vertically
let array = []

const winVert = () => {
    for (let i = 0; i <= $('.column .row').length; i++) {
        // $('.column .row').eq(i).text()
        // console.log($('.column .row').eq(0))
        array.push(parseInt($('.column .row').eq(i).text().pop()))
    }
    
}
console.log(array)

// const winVert = () => {
//     for (let i = 0; i < 7; i++) {
//         if ($('.column').children('.pink') || $('.column').children('.black') {
//             counter++
//             if (counter >= 4) {
//                 return true
//                 alert ('You won!')
//             }
//         } else {
//             counter = 0
//         }
//     }
//     return false
// }