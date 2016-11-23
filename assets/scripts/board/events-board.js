'use strict';
 const logic = require('./logic.js');
// const allAccess = require('../auth/all-access.js');
const store = require('../store.js');
const apiBoard = require('./api-board.js');
const uiBoard = require('./ui-board.js');

const onCreateGame = function() {
  apiBoard.createGame(store.gameData)
    .then(uiBoard.createGameSuccess)
    .catch(uiBoard.createGameFailure);
    // logic.clearBoard();
    $('#board').show();
};

const onUpdatePlay = function(squareId, boardValue) {
    let gameData = {
      game: {
        cell: {
          index: squareId,
          value: boardValue
        },
        "over": false,
      }
    };
  console.log(gameData);
  store.gameData = gameData;
  apiBoard.updatePlay(gameData)
    .then(uiBoard.updateGameSuccess)
    .catch(uiBoard.failure);
};

const onGetGames = function() {
apiBoard.showIndex()
  .then(uiBoard.getGamesSuccess)
  .catch(uiBoard.getGamesFailure);
};

 const addGameHandler = () => {
  // when the create-game id is clicked, call the onCreateGame function
  $('#create-game').on('click', onCreateGame);
  $('#get-games').on('click', onGetGames);
 };

module.exports = {
  addGameHandler,
  onUpdatePlay,
  onGetGames,
};
