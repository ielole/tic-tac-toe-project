'use strict';

const authEvents = require('./auth/events.js');
const boardUiBoard = require('./board/ui-board.js');
const gameEvents = require('./board/events-board');

//on document ready --> when DOM is finished being created
$(()=>{
  authEvents.addHandlers();
  boardUiBoard.addboardHandler();
  gameEvents.addGameHandler();

});

// this file with the code above allows the code from the required files to
//-->show up on the webpage
