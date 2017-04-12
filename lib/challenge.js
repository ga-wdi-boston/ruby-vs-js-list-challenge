// Requirements

// Create an any? (JS: any) function that accepts an array and a block
// (JS: function), and returns true if the block (/function) returns true
// for any item in the array. If the array is empty, the function should return false.
function any(list, listFunc) {
  let result = false
  if (!list.length) {
    return result
  }
  for(let i = 0; i<list.length; i++) {
    if( listFunc(list[i]) ) {
        return result = true
    }
  }
  return result
}
// Create a method none? (JS none) that accepts an array and a block
// (JS: a function), and returns true if the block (/function)
// returns true for none of the items in the array. An empty list should return true.
function none(list, listFunc) {
  let result = true
  if (!list.length) {
    return result = true
  }
  for(let i = 0; i<list.length; i++) {
    if( !listFunc(list[i]) ) {
        continue
    }
    else {
      return return = false
    }
  }
  return result
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
