'use strict';

const store = require('../store.js');

const success = (data) => {
  //$('.messages').text('success');
  console.log(data);
  $('#signOutModal').modal('hide');
  $('#signUpModal').modal('hide');
  $('#changePasswordModal').modal('hide');
};

const signInSuccess = (data) => {
  store.user = data.user;
   success(data);
   //$('.messages').text("You've' successfully signed in!");
   $('#signInModal').modal('hide');
  };

//const signOutSuccess = (data) => {
  //store.user = data.user;
  //success(data);
  //$('.messages').text("You've' successfully signed out!");
  //$('#signOutModal').modal('hide');
//};

const failure = () => {
  $('#messages').text('fail');
  //console.error(error);
};



module.exports = {
  failure,
  success,
  signInSuccess,
  //signOutSuccess,
};
