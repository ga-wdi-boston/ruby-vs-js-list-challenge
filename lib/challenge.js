// Requirements

function any(array, callback) {
  return array.some(e => callback)
}

function none(array, callback) {
  return !array.some(e => callback)
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
