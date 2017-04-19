// Requirements

function any(array, function) {
  if (array.length === 0) {
    return false
  }
  for (var i = 0; i < array.length; i++) {
    if (function(i) === true) {
      return true
    }
  }
  return false
}

function none(array, function) {
  if (array.length === 0) {
    return true
  }
  for (var i = 0; i < array.length; i++) {
    if (function(i) === true) {
      return false
    }
  }
  return true
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
