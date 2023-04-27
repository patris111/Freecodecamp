function chunkArrayInGroups(arr, size) {
  
  let twoDimArr = [];
  let subArr = [];
  
  //Number of iterations for the outer for loop
  let nbOfSubArr = Math.ceil(arr.length / size);
  
  for(let i = 0; i < nbOfSubArr; i++){
    
    for(let j = 0; j < size; j++){
      
      if(arr[j] == undefined){
        break;
      }
      else{
        subArr.push(arr[j]);    
      }
    }
    twoDimArr.push(subArr);
    
    //Clear array
    subArr = [];
    
    //Remove X numbers of elements of array. X = size.
    for(let k = 0; k < size; k++){
      arr.shift();
    }
    
  }
  return twoDimArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
//console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
