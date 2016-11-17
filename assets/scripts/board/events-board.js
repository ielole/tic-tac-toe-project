'use strict';
// const getFormFields = require(`../../../lib/get-form-fields`);

//
const apiBoard = require('./api-board.js');
const uiBoard = require('./ui-board.js');

const onCreateGame = function (event) {
  event.preventDefault();
  apiBoard.createGame()
    .then(uiBoard.creatGameSuccess)
    .catch(uiBoard.failure);
};

const addGameHandler = () => {
  $('#create-game').on('click', onCreateGame);
};

module.exports = {
  addGameHandler,
};
