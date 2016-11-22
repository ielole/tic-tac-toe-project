'use strict';

const authEvents = require('./auth/events.js');
const gameLogic = require('./board/logic.js');
const gameEvents = require('./board/events-board');

//on document ready --> when DOM is finished being created
$(()=>{
  // $('.show-me-the-buttons').hide();
  authEvents.addHandlers();
  gameLogic.addboardHandler();
  gameEvents.addGameHandler();
});

// this file with the code above allows the code from the required files to
//-->show up on the webpage
