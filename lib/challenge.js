'use strict';

function any(arr, fun){
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return true;
    }
  }
  return false;
}

function none(arr, fun){
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i])) { return false; }
  }
  return true;
}

function all( arr, fun ){
  for(var i = 0; i < arr.length; i++) {
    if(!fun(arr[i])) {
      return false;
    }
  }
  return true;
}

function one(arr, fun){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      count++;
    }
  }

  return count === 1 ? true : false;
}
