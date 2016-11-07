'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

 const onSignIn = function (event) {
   let data = getFormFields(this);
   event.preventDefault();
   api.signIn(data)
     .then(ui.signInSuccess)
     .catch(ui.failure);
 };

 const onChangePassword = function (event) {
   let data = getFormFields(this);
   event.preventDefault();
   api.changePassword(data)
     .then(ui.success)
     .catch(ui.failure);
};

 const onSignOut = function (event) {
   event.preventDefault();
   api.signOut()
     .then(ui.success)
     .catch(ui.failure);
 };


const board = ['','','','','','','','',''];
let turnNum = 0;

// use turnNum % to determine which player
//create a function which increments playerTurn called changePlayer
let playerTurn;
const changePlayer = function() {
    if (turnNum % 2 === 0) {
      playerTurn = 1;
  } else {
      playerTurn = 2;
  }
    turnNum += 1;
};

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
      console.log("Player X Wins!");
    } else if (
      board[0] === 'o' && board[1] === 'o' && board[2] === 'o'||
      board[3] === 'o' && board[4] === 'o' && board[5] === 'o'||
      board[6] === 'o' && board[7] === 'o' && board[8] === 'o'||
      board[0] === 'o' && board[3] === 'o' && board[6] === 'o'||
      board[1] === 'o' && board[4] === 'o' && board[7] === 'o'||
      board[2] === 'o' && board[5] === 'o' && board[8] === 'o'||
      board[0] === 'o' && board[4] === 'o' && board[8] === 'o'||
      board[2] === 'o' && board[4] === 'o' && board[6] === 'o' ) {
      console.log("Player O Wins!");
    } else if (turnNum === 9) {
      console.log("Cat's Game");
    }
};


//


const putSymbol = function(squareLetter, squareId) {
  if (playerTurn === 1) {
    $(squareLetter).text('x');
    board[squareId] = 'x';
  }  else {
    $(squareLetter).text('o');
    board[squareId] = 'o';
  }
  changePlayer();
  if (turnNum >= 5) {
    winnerCondition();
  }
};

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



const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
   $('#sign-in').on('submit', onSignIn);
   $('#change-password').on('submit', onChangePassword);
   $('#sign-out').on('submit', onSignOut);

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
  addHandlers,
  playerTurn,
  changePlayer,
  winnerCondition,
};
