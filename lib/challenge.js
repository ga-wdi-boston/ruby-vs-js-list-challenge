'use strict';


function any(arr, fun){
  var x;
  var b = false;
    for(var i = 0; i < arr.length; i++){
        x = fun(arr[i]);
        if(x === true){
        b = true;
        }
    }
    return b;
}
