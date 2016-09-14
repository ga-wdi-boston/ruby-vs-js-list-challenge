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

module.exports = any;



