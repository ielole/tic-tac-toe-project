"use strict";

const store = require('../store.js');

//creatGameSuccess
const creatGameSuccess = (data) => {
  store.game = data.game;
  $('.messages').text('NEW GAME');
};

const failure = (error) => {
  $('.messages').text('game fail');
  console.error(error);
};



module.exports = {
  creatGameSuccess,
  failure,
};
