'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);
};

 const onSignIn = function (event) {
   let data = getFormFields(this);
   event.preventDefault();
   api.signIn(data)
     .then(ui.signInSuccess)
     .catch(ui.failure);
 };

 const onChangePassword = function (event) {
   let data = getFormFields(this);
   event.preventDefault();
   api.changePassword(data)
     .then(ui.success)
     .catch(ui.failure);
};

 const onSignOut = function (event) {
   event.preventDefault();
   api.signOut()
     .then(ui.success)
     .catch(ui.failure);
 };

 const onXClick = function() {
  console.log('CLICK');
  return ('x');
 };




const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
   $('#sign-in').on('submit', onSignIn);
   $('#change-password').on('submit', onChangePassword);
   $('#sign-out').on('submit', onSignOut);
   $('#sqa').on('click', onXClick);
   $('#sqb').on('click', onXClick);
   $('#sqc').on('click', onXClick);
   $('#sqd').on('click', onXClick);
   $('#sqe').on('click', onXClick);
   $('#sqf').on('click', onXClick);
   $('#sqg').on('click', onXClick);
   $('#sqh').on('click', onXClick);
   $('#sqi').on('click', onXClick);

};

module.exports = {
  addHandlers,
};
