'use strict';

const authEvents = require('./auth/events.js');
// const gameLogic = require('./board/logic.js');
const gameEvents = require('./board/events-board');

//on document ready --> when DOM is finished being created
$(()=>{
  authEvents.addHandlers();
  // gameLogic.addboardHandler();
  gameEvents.addGameHandler();
  $('.signed-in').hide();
});

// this file with the code above allows the code from the required files to
//-->show up on the webpage
