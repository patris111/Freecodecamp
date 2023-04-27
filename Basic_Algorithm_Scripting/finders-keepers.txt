function findElement(arr, func) {
  
  let num = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(func(arr[i]) == true){
      num = arr[i];
      break;
    }
    else{
      num = undefined;
    }
  }
  return num;
}

//console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
