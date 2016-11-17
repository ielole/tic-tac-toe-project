'use strict';
const config = require('../config.js');
const store = require('../store.js');

const createGame = () =>
    $.ajax ({
    url: config.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token, /* necessary to save games */
   }
  });

const showGame = (data) =>
    $.ajax ({
    url: config.host + '/games/' + store.game.id,
    method: 'GET',
    data,
    headers: {
      Authorization: 'Token token=' + store.game.token, /* necessary to save games */
   }
  });

  const showIndex = (data) =>
      $.ajax ({
      url: config.host + '/games/' + store.game.id,
      method: 'GET',
      data,
      headers: {
        Authorization: 'Token token=' + store.game.token, /* necessary to save games */
     }
    });

    const updatePlay = (data) =>
        $.ajax ({
        url: config.host + '/games/' + store.game.id,
        method: 'PATCH',
        data,
        headers: {
          Authorization: 'Token token=' + store.game.token, /* necessary to save games */
       }
      });

module.exports = {
  createGame,
  showGame,
  showIndex,
  updatePlay,
};
