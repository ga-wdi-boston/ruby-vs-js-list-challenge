'use strict';

const any = function (array,func) {
  for (var i = 0; i < array.length; i++) {
    if(func(array[i])) {
      return true;
    }
  }
  return false;
};

let ary1 = [1,3,5,7];
let ary2 = [1,2,3,4];
let func1 = i => i % 2 === 0;
let func2 = i => i > 6;

// Should print false, true, true, false.
console.log(any(ary1,func1));
console.log(any(ary2,func1));
console.log(any(ary1,func2));
console.log(any(ary2,func2));
