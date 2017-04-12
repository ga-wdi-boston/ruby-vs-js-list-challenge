// Requirements

function isAny (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) === true {
      return true
    }
  }
  return false
}

function any(arr, isAny) {
  return isAny(arr)
}

function isNone(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      return false
    }
  }
  return true
}

function none(arr, isNone) {
  return isNone(arr)
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
