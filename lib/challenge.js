// Requirements

function any(func) {
  return this.some(func || function(x) { return x })
}

// Create a method none? (JS none) that accepts an array
// and a block (JS: a function), and returns true if the
//  block (/function) returns true for none of the items in
//  the array. An empty list should return true.

function none(/* Your function parameters here. */) {
  // Ran out of time
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
