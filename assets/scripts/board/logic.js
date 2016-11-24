'use strict';

let boardValue;
let board = ['','','','','','','','',''];
let turnNum = 0;

//use turnNum to determine when to start checking for a win condition
const winnerCondition = function() {
    if (
      board[0] === 'x' && board[1] === 'x' && board[2] === 'x' ||
      board[3] === 'x' && board[4] === 'x' && board[5] === 'x' ||
      board[6] === 'x' && board[7] === 'x' && board[8] === 'x' ||
      board[0] === 'x' && board[3] === 'x' && board[6] === 'x' ||
      board[1] === 'x' && board[4] === 'x' && board[7] === 'x' ||
      board[2] === 'x' && board[5] === 'x' && board[8] === 'x' ||
      board[0] === 'x' && board[4] === 'x' && board[8] === 'x' ||
      board[2] === 'x' && board[4] === 'x' && board[6] === 'x' ) {
      $('.player-messages').text("Player X Wins!");
      return true;
      //console.log("Player X Wins!");
    } else if (
      board[0] === 'o' && board[1] === 'o' && board[2] === 'o'||
      board[3] === 'o' && board[4] === 'o' && board[5] === 'o'||
      board[6] === 'o' && board[7] === 'o' && board[8] === 'o'||
      board[0] === 'o' && board[3] === 'o' && board[6] === 'o'||
      board[1] === 'o' && board[4] === 'o' && board[7] === 'o'||
      board[2] === 'o' && board[5] === 'o' && board[8] === 'o'||
      board[0] === 'o' && board[4] === 'o' && board[8] === 'o'||
      board[2] === 'o' && board[4] === 'o' && board[6] === 'o' ) {
      $('.player-messages').text("Player O Wins!");
      return true;
      //console.log("Player O Wins!");
    } else if (turnNum === 9) {
      $('.player-messages').text("Cat's Game!");
      //console.log("Cat's Game");
      return true;
    }
};


// create a function to clear the board and associated array
const clearBoard = function() {
  board = ['','','','','','','','',''];
  turnNum = 0;

  $('#sqa').text('');
  $('#sqb').text('');
  $('#sqc').text('');
  $('#sqd').text('');
  $('#sqe').text('');
  $('#sqf').text('');
  $('#sqg').text('');
  $('#sqh').text('');
  $('#sqi').text('');

  $('#sqa').css('pointer-events', 'auto');
  $('#sqb').css('pointer-events', 'auto');
  $('#sqc').css('pointer-events', 'auto');
  $('#sqd').css('pointer-events', 'auto');
  $('#sqe').css('pointer-events', 'auto');
  $('#sqf').css('pointer-events', 'auto');
  $('#sqg').css('pointer-events', 'auto');
  $('#sqh').css('pointer-events', 'auto');
  $('#sqi').css('pointer-events', 'auto');

  $('.messages').text("");
  // console.log('all clear');
};

 //create a function which evaluates if the game is over
const gameOver = function() {
   if (winnerCondition()) {
    // console.log("Game over");
    return true;
  } else {
    return false;
  }
};

//function that makes unclicked squares not clickable if game is over
const boardLock = function() {
  if (gameOver()) {
     $('.col-xs-4').css('pointer-events', 'none');
  }
  return true;
};

// function to alternate placement of 'x' and 'o'
const putSymbol = function(squareLetter, squareId) {
  if (turnNum % 2 === 0) {
    $(squareLetter).text('x');
    board[squareId] = 'x';
    boardValue = 'x';
  }else {
    $(squareLetter).text('o');
    board[squareId] = 'o';
    boardValue = 'o';
  }
    turnNum += 1;
  //make squares not clickable after placing a symbol in the square
  $(squareLetter).css('pointer-events', 'none');
  if (turnNum >= 5) {
    winnerCondition();
    gameOver();
    boardLock();
  }
  return boardValue;
};

module.exports = {
  winnerCondition,
  gameOver,
  boardLock,
  clearBoard,
  putSymbol,
};
