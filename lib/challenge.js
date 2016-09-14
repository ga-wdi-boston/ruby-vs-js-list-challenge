'use strict';

const any = function(arr, fun){
  if (arr.length === 0){
    return false;
  } else {
    return arr.some(fun);
  }
};
