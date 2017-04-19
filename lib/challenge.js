// Requirements

function any(arr, fun) {
  for(let i = 0; i < arr.length; i++) {
    if(fun(arr[i])) {
      return true;
    }
  }
  return false;
}


function none( arr, fun ) {
  for(let i = 0; i < arr.length; i++) {
    if(!fun(arr[i])) {
      return false;
    }
  }
  return true;
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
