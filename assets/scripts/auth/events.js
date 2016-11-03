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


const onAClick = function() {
    $('#sqa').text('x');
  console.log('CLICK');
};


let playerX;
let playerO;
const board = ['','','','','','','','',''];
let turnNum = 0;
//for every div on the board
// for (let i = 0; i <board.length; i++) {
//   //if the text is not blank
//   if (board[i] === )) {
//     turnNum = turnNum + 1;
//     //add one to turnNum
//   }
// }
//use turnNum to determine when to start checking for a win condition
const winnerCondition = function() {
  for (let i = 0; i < board.length; i++) {
    if ((turnNum >= 5) &&
      ((board[0] === 'x') &&
      (board[1] === 'x') &&
      (board[2] === 'x'))) {
        console.log('Player X Wins!');
      }
}
 };

//create a function which increments playerTurn called changePlayer
//use turnNum % to determine which player
let playerTurn;
  if (turnNum % 2 === 0) {
  playerTurn = 1;
    console.log(playerX);
  } else {
    playerTurn = 2;
    console.log(playerO);
  }

const putSymbol = function(squareLetter, squareId) {
  if (playerTurn === 1) {
    $(squareLetter).text('x');
    board[squareId] = 'x';
  }  else {
    $(squareLetter).text('o');
    board[squareId] = 'o';
  }
};


const onBClick = function() {
  putSymbol('#sqb', 1);
};



const onCClick = function() {
    $('#sqc').text('x');
  console.log('CLICK');
};

const onDClick = function() {
    $('#sqd').text('x');
  console.log('CLICK');
};

const onEClick = function() {
    $('#sqe').text('x');
  console.log('CLICK');
};

const onFClick = function() {
    $('#sqf').text('x');
  console.log('CLICK');
};

const onGClick = function() {
    $('#sqg').text('x');
  console.log('CLICK');
};

const onHClick = function() {
    $('#sqh').text('x');
  console.log('CLICK');
};

const onIClick = function() {
    $('#sqi').text('x');
  console.log('CLICK');
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
};
