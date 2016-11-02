'use strict';

const authEvents=require('./auth/events.js');

//on document ready --> when DOM is finished being created
$(()=>{
  authEvents.addHandlers();
});
