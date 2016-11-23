'use strict';
const logic = require('../board/logic.js');
const store = require('../store.js');

 $('#board').hide();

const success = (data) => {
  $('.messages').text('success');
  console.log(data);
  // $('#changePasswordModal').modal('hide');
};

const signUpSuccess = () => {
  $(".messages").text("You've successfully created an account! Now you can sign in and play Tic-Tac-Toe!");
  $("#sign-up").trigger("reset");
  $("#signUpModal").modal("hide");
};

const signUpFailure = () => {
  $('.messages').text("Oops! Either, that email address already has an account or your passwords don't match. Try Again.");
  $("#sign-up").trigger("reset");
  $('#signUpModal').modal('hide');
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('.messages').text("You've successfully signed in!");
  $('#signInModal').modal('hide');
  $('.show-me-the-buttons').show();
  $("#sign-in").trigger("reset");
  $('.signed-in').show();
  $('.signed-out').hide();
  // $("#sign-in").trigger("reset");
  // logic.clearBoard();
  //  $('.col-xs-4').off('click');
  // $('#board').show();
  };

const signInFailure = () => {
  $(".messages").text("Oops, something went wrong. Try signing in again.");
  $("#sign-in").trigger("reset");
  $("#signInModal").modal("hide");
  };

const changePasswordSuccess = () => {
  $(".messages").text("Congrats! You've successfully changed your password.");
  $("#change-password").trigger("reset");
  $('#changePasswordModal').modal('hide');
};

const changePasswordFailure = () => {
  $(".messages").text("Oops, something went wrong. Try changing your password again.");
  $("#change-password").trigger("reset");
  $('#changePasswordModal').modal('hide');
};

const signOutSuccess = (data) => {
  //store.user = data.user;
  logic.clearBoard();
  success(data);
  $('.messages').text("You've successfully signed out!");
  $('#signOutModal').modal('hide');
  $('#board').hide();
  $('.show-me-the-buttons').hide();
  $('.signed-in').hide();
  $('.signed-out').show();
};

const failure = (error) => {
  $('.messages').text('Oops, try again.');
  console.error(error);
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
};
