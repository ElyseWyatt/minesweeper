document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{
    row: 0,
    col: 0,
    isMine: false,
    hidden: true
  },
  {
    row: 0,
    col: 1,
    isMine: true,
    hidden: true
  },
  {
    row: 1,
    col: 0,
    isMine: false,
    hidden: true
  },
   {
     row: 1,
     col: 1,
     isMine: false,
     hidden: true
   },
   {
     row: 2,
     col: 0,
     isMine: false,
     hidden: true
   },
   {
     row: 2,
     col: 1,
     isMine: true,
     hidden: true
   },
   {
     row: 0,
     col: 2,
     isMine: false,
     hidden: true
   },
   {
     row: 1,
     col: 2,
     isMine: false,
     hidden: true
   },
   {
     row: 2,
     col: 2,
     isMine: false,
     hidden: true
   }
 ]
}


// nested for loops.
// .push() inserts in the object.





function startGame () {
  for (let i = 0; i < board.cells.length; i++ ) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }

document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)
// Don't remove this function call: it makes the game work!

  lib.initBoard()
}

//left and right Mouse?




// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?




//Define the checkForWin function. It should loop through all of board.cells.
 //For each cell, check to see if both .isMine and .isMarked are true. If any mine still exists that isn't marked, the player hasn't won yet and you can return out of the function.
 //If every mine is marked, but there are still cells with the hidden property set to true, the player hasn't won yet and you can return out of the function.





function checkForWin () {

  let goodCells = 0

  for (let i = 0; i < board.cells.length; i++) {
    const cell = board.cells[i]
    if (!cell.isMine && !cell.hidden){
      goodCells++
    }  

    if (cell.isMine && cell.isMarked){
      goodCells++
    }
  }

  if (goodCells === board.cells.length) {
    lib.displayMessage('You win!')
  }

//if (isMine === false && hidden === false)
//if (isMine === true && isMarked === true)



  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}




//In startGame, above lib.initBoard(), write a for loop. This should loop through the contents of board.cells. (Remember, board.cells is an array of objects.)











// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let count = 0
  let surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++
    }
  }
  return count
}
