True for Any?
const block = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === undefined) {
      return false;
    }
  }
  return true;
}

const trueforAny = function (arr, block) {
  if (block(arr)) {
    return true;
  }else {
    return false;
  }
}

True or None?
const block2 = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      return false;
    }
  }
  return true;
}

const trueOrNone = function (arr, block) {
  if (block2(arr)) {
    return true;
  }else {
    return false;
  }
}
