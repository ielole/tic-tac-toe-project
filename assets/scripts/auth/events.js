'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');
//const all = require('./all-access');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure);
};

 const onSignIn = function (event) {
   let data = getFormFields(this);
   event.preventDefault();
   api.signIn(data)
     .then(ui.signInSuccess)
     .catch(ui.signInFailure);
 };

 const onChangePassword = function (event) {
   let data = getFormFields(this);
   event.preventDefault();
   api.changePassword(data)
     .then(ui.changePasswordSuccess)
     .catch(ui.changePasswordFailure);
};

 const onSignOut = function (event) {
   event.preventDefault();
   api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure);
    $('.playerMessages').text('');
 };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
};

// const notTilSignInSuccess = () => {
// $('#board').hide();
// };

module.exports = {
  addHandlers,
  // notTilSignInSuccess
};
