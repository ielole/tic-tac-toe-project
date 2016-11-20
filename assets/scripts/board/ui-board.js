"use strict";
 $('#board').hide();
// const logic = require ('./logic.js');
const store = require('../store.js');
//
const success = (gameData) => {
  $('.messages').text('success');
  console.log(gameData);
};
//
// //creatGameSuccess
const createGameSuccess = (gameData) => {
//   // $('.col-xs-4').on('click');
  store.game = gameData.game;
//   logic.clearBoard();
  $('.messages').text('NEW GAME');
  console.log(gameData);
//   // let game_id = gameData.game.id;
//
//     // if (game_id === undefined) {
//     //   $('.col-xs-4').off('click');
//     // } else {
//     //   $('.col-xs-4').on('click');
//     // }
//   // return game_id;
};

//
const createGameFailure = () => {
  $('.messages').text('Please SIGN IN');
};

//
const updateGameSuccess = (gameData) => {
  store.gameData.game = gameData.game;
};

const getGamesSuccess = (gameData) => {
  $('.messages').text('NUMBER OF GAMES PLAYED = ' + gameData.games.length);
  console.log(gameData.games.length);
};

const failure = (error) => {
  $('.messages').text('game fail');
  console.error(error);
};
//
//
//
module.exports = {
  createGameSuccess,
  updateGameSuccess,
  success,
  failure,
  createGameFailure,
  getGamesSuccess,
};
