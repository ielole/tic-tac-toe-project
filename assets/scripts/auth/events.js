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

//const howManyClicks = function () {
  //for (let i = 1; i < 9; i++) {
  //  let numberOfClicks = i;
  //  if (numberOfClicks % 2 === 0) {
  //    $('#sqa').text('o');
  //  } else {
  //    $('#sqa').text('x');
   //console.log('CLICK');
//  }
//  }
//};
let board = ['#sqa','#sqb','#sqc','#sqd','#sqe','#sqf','#sqg','#sqh','#sqi'];
let clickNumber = [1,2,3,4,5,6,7,8,9];

const placeSymbol = function () {
  for (let i = 0; i < clickNumber.length; i++){
    if (clickNumber[i] % 2 === 0) {
      $(board[j]).text('o');
      } else {
      $(board[j]).text('x');
    }
  }
};

//const placeSymbol = function () {
  //for (let i = 0; i < clickNumber.length; i++){
    //if (clickNumber[i] % 2 === 0) {
      //$('#sqa').text('o');
      //} else {
      //$('#sqa').text('x');
    //}
  //}
//};

 //const onXClick = function() {
   //if (numberOfClicks % 2 === 0) {
     //$('#sqa').text('x');
   //} else {
   //$('#sqb').text('x');
  //console.log('CLICK');
//};





const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
   $('#sign-in').on('submit', onSignIn);
   $('#change-password').on('submit', onChangePassword);
   $('#sign-out').on('submit', onSignOut);
   $('board[j]').on('click', placeSymbol);
   //$('#sqb').on('click', onXClick);
   //$('#sqc').on('click', onXClick);
   //$('#sqd').on('click', onXClick);
   //$('#sqe').on('click', onXClick);
   //$('#sqf').on('click', onXClick);
  //$('#sqg').on('click', onXClick);
   //$('#sqh').on('click', onXClick);
   //$('#sqi').on('click', onXClick);

};

module.exports = {
  addHandlers,
};
