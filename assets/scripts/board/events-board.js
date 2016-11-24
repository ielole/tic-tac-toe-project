'use strict';
const logic = require('./logic.js');
const apiBoard = require('./api-board.js');
const uiBoard = require('./ui-board.js');

const onCreateGame = function() {
  apiBoard.createGame()
    .then(uiBoard.createGameSuccess)
    .catch(uiBoard.createGameFailure);
};

const onUpdatePlay = function(cell) {
    let data = {
      game: {
        cell
        },
        "over": false,
      };
  // console.log(data);
  apiBoard.updatePlay(data)
    .then(uiBoard.updateGameSuccess)
    .catch(uiBoard.failure);
};

const onGetGames = function() {
  apiBoard.showIndex()
    .then(uiBoard.getGamesSuccess)
    .catch(uiBoard.getGamesFailure);
};

// make squares clickable
const onAClick = function() {
  let index = 0;
  let value = logic.putSymbol('#sqa', index);
  onUpdatePlay({index, value});
};

const onBClick = function() {
  let index = 1;
  let value = logic.putSymbol('#sqb', index);
  onUpdatePlay({index, value});
};

const onCClick = function() {
  let index = 2;
  let value = logic.putSymbol('#sqc', index);
  onUpdatePlay({index, value});
};

const onDClick = function() {
  let index = 3;
  let value = logic.putSymbol('#sqd', index);
  onUpdatePlay({index, value});
};

const onEClick = function() {
  let index = 4;
  let value = logic.putSymbol('#sqe', index);
  onUpdatePlay({index, value});
};

const onFClick = function() {
  let index = 5;
  let value = logic.putSymbol('#sqf', index);
  onUpdatePlay({index, value});
};

const onGClick = function() {
  let index = 6;
  let value = logic.putSymbol('#sqg', index);
  onUpdatePlay({index, value});
};

const onHClick = function() {
  let index = 7;
  let value = logic.putSymbol('#sqh', index);
  onUpdatePlay({index, value});
};

const onIClick = function() {
  let index = 8;
  let value = logic.putSymbol('#sqi', index);
  onUpdatePlay({index, value});
};

const addGameHandler = () => {
  $('#sqa').on('click', onAClick);
  $('#sqb').on('click', onBClick);
  $('#sqc').on('click', onCClick);
  $('#sqd').on('click', onDClick);
  $('#sqe').on('click', onEClick);
  $('#sqf').on('click', onFClick);
  $('#sqg').on('click', onGClick);
  $('#sqh').on('click', onHClick);
  $('#sqi').on('click', onIClick);
  // when the create-game id is clicked, call the onCreateGame function
  $('#create-game').on('click', onCreateGame);
  $('#get-games').on('click', onGetGames);
 };

module.exports = {
  addGameHandler,
};
