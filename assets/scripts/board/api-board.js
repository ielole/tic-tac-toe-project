'use strict';
const config = require('../config.js');
const store = require('../store.js');

const showGames = (data) =>
    $.ajax ({
    url: config.host + '/change-password/' + store.game.id,
    method: 'POST',
    data,
    headers: {
      Authorization: 'Token token=' + store.game.token, /* necessary to save games */
   }
  });

module.exports = {
  showGames,
};
