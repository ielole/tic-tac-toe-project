'use strict';

const onXClick = function() {
  console.log('CLICK');
};

const addboardHandler = () => {
$('#sqa').on('click', onXClick);
};

module.exports = {
  addboardHandler,
};
