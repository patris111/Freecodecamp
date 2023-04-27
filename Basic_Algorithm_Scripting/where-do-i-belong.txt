function getIndexToIns(arr, num) {
  
  //sort array
  arr = arr.sort((a,b)=>a-b);
  let pos = 0;
  let postFound = false;
  
  for(let i = 0; i < arr.length; i++){
    
    if(num <= arr[i]){
      
      pos = i;
      postFound = true;
      break;
    }
    else if(postFound == false){
      
      pos = arr.length;
    }
  }

  return pos;
}

//console.log(getIndexToIns([40, 60], 50));
//console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
//console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
//console.log(getIndexToIns([3, 10, 5], 3));
//console.log(getIndexToIns([], 1));
//console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 5, 10], 15));