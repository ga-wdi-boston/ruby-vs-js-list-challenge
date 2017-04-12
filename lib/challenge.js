// Requirements
const numbers = [1,2,3,4,5,6,7,8,9,10]
function any(element) {
  if (element === []){
    return false
  }else if (element !== []){
    return element > 5
  }
}
numbers.some(any)

function none(array) {
  return element > 5
}
numbers.every(none)
// Bonuses

function one(/* Your function parameters here. */) {
  // Your function body here.
}

function all(/* Your function parameters here. */) {
  // Your function body here.
}

// Do not change this.
module.exports = { all, any, none, one };
