'use strict';
const logic = require('../board/logic.js');
const store = require('../store.js');

 $('#board').hide();

const success = (data) => {
  $('.messages').text('success');
  console.log(data);
  //$('#signOutModal').modal('hide');
  $('#signUpModal').modal('hide');
  $('#changePasswordModal').modal('hide');
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('.messages').text("You've successfully signed in!");
  $('#signInModal').modal('hide');
  $('.show-me-the-buttons').show();
  $('.signed-in').show();
  $('.signed-out').hide();
  // logic.clearBoard();
  //  $('.col-xs-4').off('click');
  // $('#board').show();
  };

const signOutSuccess = (data) => {
  //store.user = data.user;
  logic.clearBoard();
  success(data);
  $('.messages').text("You've successfully signed out!");
  $('#signOutModal').modal('hide');
  // $('#board').hide();
  $('.show-me-the-buttons').hide();
  $('.signed-in').hide();
  $('.signed-out').show();
  // return true;
  // $('#create-game').off('click');

};

const failure = (error) => {
  $('.messages').text('fail');
  console.error(error);
};



module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
};
