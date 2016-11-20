'use strict';

// let endOfGame;
// // const vars {
// // gameOver:
// // };
//
//
// module.exports = {
// // vars,
// endOfGame,
//
// };

// display a clear new board on createNewGameSuccess == X ==> moved clearBoard fxn
// stop creategame from throwing an error if not signed in ==
// make board not clickable when board is first shown after signInSuccess == X
    // -- moved show board to creation of board
// figure out a way to access the index of the board for the updateGame function ==
// figure out a way to save the placement of an x or o in the board array for updateGame function ==
// turnNum doesn't reset after the board is cleared FIX IT ==
// turn clicks for divs on when new game ==

// EVERYTHING BROKEN - fixes and tests
// - commented out all of the game api code to make sure that the existing game logic, user authorization and scss was working == X
// - added a margin to the create new game button to seperate it from the board == X
// (idea) - have the board show up when a new game is created, instead of on signInSuccess == Y (x)  N ()
  // -- works inside of onCreateGame function as long as the handler files are required in index.js

// - eliminated the newGame function formerly used in logic.js
    // --still returns a game object in console, when explicitly returned

// (interesting idea) $('.col-xs-4').on('click',logic.putSymbol(squareLetter, squareId));
