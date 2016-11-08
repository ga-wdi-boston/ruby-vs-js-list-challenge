//any function
function any(arr, fun){
  return arr.some(function (e,i,a) {
  let ret = fun(e,i);
  console.log(ret)
  return ret;
  });
}
