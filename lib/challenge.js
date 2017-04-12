// Requirements

function any(array, block) {
  return array.some(block)
}

function none(array, block) {
  return !array.some(block)
}

// Bonuses

function one(/* Your function parameters here. */) {
  // Your function body here.
}

function all(array, block) {
  return array.every(block)
}

// Do not change this.
module.exports = { all, any, none, one };
