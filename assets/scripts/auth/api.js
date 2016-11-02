'use strict';

const config = require('../config.js');
const store = require('../store.js');

const signUp = (data) =>
  $.ajax ({
    url: config.host + '/sign-up',
    method: 'POST',
    data,
  });
   /*new Promise(function (resolve, reject) {
    console.log(data);  -->to see what data looks like
   showed that the success error message works correctly <--
    if (Math.random() > 0.5) {
      resolve('in signUp');
    } else {
      let error = new Error('Random');
      error.data = data;
      reject(error);
    }
  }); */


  const signIn = (data) =>
     $.ajax ({
       url: config.host + '/sign-in',
       method: 'POST',
       data,
     });

     const changePassword = (data) =>
       $.ajax ({
         url: config.host + '/change-password/' + store.user.id,
         method: 'PATCH',
         data,
         headers: {
           Authorization: 'Token token=' + store.user.token, /* necessary to save games */
         }
       });

       const signOut = () =>
         $.ajax ({
           url: config.host + '/sign-out/' +store.user.id,
           method: 'DELETE',
           headers: {
             Authorization: 'Token token=' + store.user.token,
           }
         });


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
};
// Math.random returns a random number
// could check to make sure that password and password_confirmation ===
// => {} expects a return DO NOT put {} outside of an ajax request
//store.user === null; to clear user from store
