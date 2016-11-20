'use strict';
 // const logic = require('./logic.js');
// const allAccess = require('../auth/all-access.js');
const store = require('../store.js');
const apiBoard = require('./api-board.js');
const uiBoard = require('./ui-board.js');

const onCreateGame = function() {
  $('#board').show();
  // logic.clearBoard();
  apiBoard.createGame(store.gameData)
    .then(uiBoard.createGameSuccess)
    .catch(uiBoard.createGameFailure);
};
//   // event.preventDefault();
//   // first call the newGame function in the logic.js file
//   logic.newGame();
//   // call the createGame function and pass it the data found in store.gameData
//   apiBoard.createGame(store.gameData)
//     // if the createGame function succeeds then call createGameSuccess function in the ui-board.js file
//     .then(uiBoard.createGameSuccess)
//     // if the createGame function DOESN'T succeed then call createGameFailure function in the ui-board.js file
//     .catch(uiBoard.createGameFailure);
// };
//

const onUpdatePlay = function(squareId, boardValue) {
// function(gameData) {
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

// const onUpdatePlay = function(gameData) {
//
// // function(squareId, boardValue) {
// //     gameData = {
// //       game: {
// //         cell: {
// //           index: squareId,
// //           value: boardValue
// //         },
// //         "over": store.gameData.game.over,
// //       }
// //     };
// //   };
//   // logic.updateGame();
//   apiBoard.updatePlay(gameData)
//     .then(uiBoard.success)
//     .catch(uiBoard.failure);
// };
//

const onGetGames = function() {
console.log('game gotten!');
};

 const addGameHandler = () => {
//   // when the create-game id is clicked, call the onCreateGame function
  $('#create-game').on('click', onCreateGame);
  $('#get-games').on('click', onGetGames);
 };
//
module.exports = {
  addGameHandler,
  onUpdatePlay,
  onGetGames,
};
