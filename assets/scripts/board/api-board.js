'use strict';
const config = require('../config.js');
const store = require('../store.js');

const createGame = (gameData) =>
    $.ajax ({
    url: config.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
   },
   gameData,
  });

// const showGame = (data) =>
//     $.ajax ({
//     url: config.host + '/games/' + store.game.id,
//     method: 'GET',
//     data,
//     headers: {
//       Authorization: 'Token token=' + store.game.token,
//    }
//   });
//
  const showIndex = (player_x) =>
      $.ajax ({
      url: config.host + '/games',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token, /* necessary to save games */
     },
     player_x,
    });

    const updatePlay = (gameData) =>
        $.ajax ({
        url: config.host + '/games/' + store.game.id,
        method: 'PATCH',
        data: gameData,
        headers: {
          Authorization: 'Token token=' + store.user.token, /* necessary to save games */
       }
      });
//
module.exports = {
  createGame,
  // showGame,
  showIndex,
  updatePlay,
};
