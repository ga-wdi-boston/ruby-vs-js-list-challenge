// Requirements
'use strict';

function any(arr, callback) {
  if (arr.length === 0) {
    return false;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  }
}

function none(arr, callback) {
  if (arr.length === 0) {
    return true;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return false;
      }
    }
    return true;
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
