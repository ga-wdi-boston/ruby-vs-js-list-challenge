// Requirements

'use strict';

const any = function (array, yolo) {
  for (let i = 0, max = array.length; i < max; i++) {
    if (array === []) {
      return false;
    } else if (yolo() === array[i]) {
      return true;
    }
  }
};

function none(array, yolo) {
  for (let i = 0, max = array.length; i < max; i++) {
    if (array === []) {
      return true;
    } else if (yolo() === array[i]) {
      return false;
    } else {
      return true;
    }
  }
}

// Bonuses

function one(/* Your function parameters here. */) {
  // Your function body here.
}

function all(/* Your function parameters here. */) {
  // Your function body here.
}

// Do not change this.
module.exports = { all, any, none, one };
