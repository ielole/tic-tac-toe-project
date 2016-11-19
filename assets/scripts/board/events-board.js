'use strict';
const logic = require('./logic.js');
const store = require('../store.js');
const apiBoard = require('./api-board.js');
const uiBoard = require('./ui-board.js');

const onCreateGame = function() {
  // event.preventDefault();
  logic.newGame();
  //logic.clearBoard();
  apiBoard.createGame(store.gameData)
    .then(uiBoard.creatGameSuccess)
    .catch(uiBoard.createGameFailure);
};

const onUpdatePlay = function() {
  logic.updateGame();
  apiBoard.updatePlay()
    .then(uiBoard.updateGameSuccess)
    .catch(uiBoard.failure);
};

const addGameHandler = () => {
  $('#create-game').on('click', onCreateGame);
};

module.exports = {
  addGameHandler,
  onUpdatePlay,
};
