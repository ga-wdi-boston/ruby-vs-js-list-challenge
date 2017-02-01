// Requirements
'use strict'
const array = [];
function any(element, index, array) {
  return element % 2;
}

array.every(any);

function none(element, index, array) {
  return element % 2
}

array.find(none);
// Bonuses

function one(/* Your function parameters here. */) {
  // Your function body here.
}

function all(/* Your function parameters here. */) {
  // Your function body here.
}

// Do not change this.
module.exports = { all, any, none, one };
