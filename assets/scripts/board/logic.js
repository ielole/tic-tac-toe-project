'use strict';
const boardEvents = require('./events-board.js');
// const allAccess = require('../auth/all-access.js');
// const store = require('../store.js');
// let gameData = {};
let endOfGame;
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
      $('.playerMessages').text("Player X Wins!");
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
      $('.playerMessages').text("Player O Wins!");
      return true;
      //console.log("Player O Wins!");
    } else if (turnNum === 9) {
      $('.playerMessages').text("Cat's Game!");
      //console.log("Cat's Game");
      return true;
    }
};


//   //create a function which creates a newGame
//   // create a game object
//   const newGame = function() {
//     gameData = {
//     game: {
//       cells: board,
//       over: false,
//       player_x: {
//         id: store.user_id,
//         email: store.user.email
//       },
//       player_o: {}
//     }
//   };
//   store.gameData = gameData;
//   // for (let i = 0; i < board.length; i++) {
//   //   board[i] = '';
// // };
// };
//
// //figure out how to refer to the squares in general
// const updateGame = function(squareId, boardValue) {
//   gameData = {
//     game: { cell:
//       { index: squareId,
//         value: boardValue
//       }
//     }
//   };
// };

// create a function to clear the board and associated array
const clearBoard = function() {
  for (let i = 0; i < board.length; i++) {
    board[i] = '';
  }
  $('.col-xs-4').text('');
  // turnNum = 0;
};

 //create a function which evaluates if the game is over
const gameOver = function() {
   if (winnerCondition()) {
     //clearBoard();
    console.log("Game over");
    // store.gameData.game.over = true;
    endOfGame = true;
    return endOfGame;
  } else {
    endOfGame = false;
    // store.gameData.game.over = false;
    return endOfGame;
  }

};



//function that makes unclicked squares not clickable if game is over
const boardLock = function() {
  if (gameOver()) {
     $('.col-xs-4').off('click');
  }
  // store.gameData.game.over = true;
};
// causes gameOver to run second time?




// function to alternate placement of 'x' and 'o'
const putSymbol = function(squareLetter, squareId) {
  // to be able to click in a square you need to have a game id
  // on createGameSuccess return the current game id to me
  if (turnNum % 2 === 0) {
  // (playerTurn === 'player X') {
    $(squareLetter).text('x');
    board[squareId] = 'x';
    boardValue = 'x';
    boardEvents.onUpdatePlay(squareId, boardValue);
    // store.gameData.game.cell.index = squareId;
    // store.gameData.game.cell.value = 'x';
    // store.gameData.index;
  }else {
  // if (playerTurn === 'player O') {
    $(squareLetter).text('o');
    board[squareId] = 'o';
    boardValue = 'o';
    boardEvents.onUpdatePlay(squareId, boardValue);
    // store.gameData.game.cell.index = squareId;
    // store.gameData.game.cell.value = 'o';
    // store.gameData.index;
  }
    turnNum += 1;
  //make squares not clickable after placing a symbol in the square
     $(squareLetter).off('click');
  //  the ABOVE makes board squares unclickable after createGameSuccess
  // if (turnNum >= 5) {
    winnerCondition();
    gameOver();
    boardLock();
  // }
  // console.log(store.gameData.game.index);
};

// make squares clickable
const onAClick = function() {
  putSymbol('#sqa', 0);
};

const onBClick = function() {
  putSymbol('#sqb', 1);
};

const onCClick = function() {
    putSymbol('#sqc', 2);
};

const onDClick = function() {
    putSymbol('#sqd', 3);
};

const onEClick = function() {
    putSymbol('#sqe', 4);
};

const onFClick = function() {
  putSymbol('#sqf', 5);
};

const onGClick = function() {
  putSymbol('#sqg', 6);
};

const onHClick = function() {
  putSymbol('#sqh', 7);
};

const onIClick = function() {
  putSymbol('#sqi', 8);
};

const addboardHandler = () => {
  $('#sqa').on('click', onAClick);
  $('#sqb').on('click', onBClick);
  $('#sqc').on('click', onCClick);
  $('#sqd').on('click', onDClick);
  $('#sqe').on('click', onEClick);
  $('#sqf').on('click', onFClick);
  $('#sqg').on('click', onGClick);
  $('#sqh').on('click', onHClick);
  $('#sqi').on('click', onIClick);
};

module.exports = {
  addboardHandler,
  winnerCondition,
  gameOver,
  boardLock,
  // newGame,
  // updateGame,
  clearBoard,
};
