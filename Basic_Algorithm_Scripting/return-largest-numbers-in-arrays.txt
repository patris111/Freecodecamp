function largestOfFour(arr) {
  
  let biggest = -100000000;
  let largestNum = [];
 
  for(let i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] > biggest){
        biggest = arr[i][j];
      }
      else{
        continue;
      }
    }
    largestNum.push(biggest);
    biggest = -100000000
  }
  arr = largestNum;
  return arr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
