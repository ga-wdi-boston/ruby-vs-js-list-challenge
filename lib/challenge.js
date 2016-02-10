function one(arr, fun){
 newArray = [];
  for (var i = 0; i < arr.length; i++){
    if (fun(arr[i]) === true){
      newArray.push(i);
    }
   }
  if (newArray.length === 1){
    return true;
  }
  else{
    return false;
  }
};


function none(arr, fun){
 newArray = [];
  for (var i = 0; i < arr.length; i++){
    if (fun(arr[i])){
      newArray.push(i);
    }
   }
  if (newArray.length === 0){
    return true;
  }
  else{
    return false;
  }
};

function all( arr, fun ){
 newArray = [];
 arrLength = arr.length
  for (var i = 0; i < arr.length; i++){
    if (fun(arr[i]) === true){
      newArray.push(i);
    }
   }
  if (newArray.length === arrLength){
    return true;
  }
  else{
    return false;
  }
};

function any(arr, fun){
 newArray = [];
 arrLength = arr.length
  for (var i = 0; i < arr.length; i++){
    if (fun(arr[i]) === true){
      newArray.push(i);
    }
   }
  if (newArray.length >= 1){
    return true;
  }
  else{
    return false;
  }
};
