"use strict";
const logic = require ('./logic.js')
const store = require('../store.js');

//creatGameSuccess
const creatGameSuccess = (gameData) => {
  // $('.col-xs-4').on('click');
  store.game = gameData.game;
  logic.clearBoard();
  $('.messages').text('NEW GAME');
  let game_id = gameData.game.id;

    // if (game_id === undefined) {
    //   $('.col-xs-4').off('click');
    // } else {
    //   $('.col-xs-4').on('click');
    // }
  return game_id;
};

const createGameFailure = () => {
  $('.messages').text('Please SIGN IN');
};

const updateGameSuccess = (data) => {

};



const failure = (error) => {
  $('.messages').text('game fail');
  console.error(error);
};



module.exports = {
  creatGameSuccess,
  updateGameSuccess,
  failure,
  createGameFailure,
};
