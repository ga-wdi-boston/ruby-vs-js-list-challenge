// Requirements
'use strict';

function any(list, callback) {
  if (list.some(callback)) {
    return true;
  }
  return false;
}

function none(list, callback) {
  if (any(list, callback)) {
    return false;
  }
  return true;
}

// Bonuses

function one(list, callback) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (callback(list[i])) {
      count++;
    }
  }
  if (count === 1) {
    return true;
  }
  return false;
}

function all(list, callback) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if(callback(list[i])) {
      count++;
    }
  }
  if (count === list.length) {
    return true;
  }
  return false;
}

// Do not change this.
module.exports = { all, any, none, one };
