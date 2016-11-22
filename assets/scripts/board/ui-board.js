"use strict";
// const logictwo = require('./logic.js');
const store = require('../store.js');

const success = (gameData) => {
  $('.messages').text('success');
  console.log(gameData);
};

const failure = (error) => {
  $('.messages').text('game fail');
  console.error(error);
};

//creatGameSuccess
const createGameSuccess = (gameData) => {
  // $('.col-xs-4').on('click');
  store.game = gameData.game;

  $('.playerMessages').text("");
  $('.messages').text('NEW GAME');
  // debugger;
  // logictwo.clearBoard();
  $('#board').show();
  console.log(gameData);
};

const createGameFailure = () => {
  $('.messages').text('Please SIGN IN to PLAY a game.');
};

const updateGameSuccess = (gameData) => {
  store.gameData.game = gameData.game;
};

const getGamesSuccess = (gameData) => {
  $('.messages').text('NUMBER OF GAMES PLAYED = ' + gameData.games.length);
  console.log(gameData.games.length);
};

const getGamesFailure = () => {
  $('.messages').text('Please SIGN IN to view NUM of Games PLAYED.');
};

module.exports = {
  success,
  failure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  getGamesSuccess,
  getGamesFailure,
};
