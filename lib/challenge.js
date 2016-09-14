'use strict';

// const any = (arr, func) => {
//   for (let i = 0, max = arr.length; i < max; i++) {
//     if (func(arr[i])) {
//       return true;
//     }
//   }
//   return false;
// };

const any = (arr, func) => {
  arr.some(func);
};

const none = (arr, func) => {
  let result = arr.filter(func);
  if (result.length === 0) {
    return true;
  }
  return false;
};


module.exports = {
  any,
  none,
};



