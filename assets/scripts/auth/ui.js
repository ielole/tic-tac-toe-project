'use strict';

const store = require('../store.js');

const success = (data) => {
  $('#messages').text('success');
  console.log(data);
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
};

const failure = (error) => {
  $('#messages').text('fail');
  console.error(error);
};



module.exports = {
  failure,
  success,
  signInSuccess,
};
// this file handles error conditions
//for implicit return only one expression (one line of code), otherwise need {}
// data = whole object --> to get token === store.token = data.user.token
//use something that already exists on line 12
