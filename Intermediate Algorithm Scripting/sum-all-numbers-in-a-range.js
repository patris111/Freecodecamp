function sumAll(arr) {
  
  //Set in array the lowest number first 
  arr = arr.sort((a, b) => a - b);
  
  //Add all the numbers between the two numbers(not inclusive) 
  let sumInBetween = 0;
  
  for(let i = arr[0] + 1; i < arr[arr.length - 1]; i++){
    sumInBetween += i;
  }

  //Sum of the two numbers in the array
  const sum = arr.reduce((acc, cur) => acc + cur); 
  
  return sumInBetween + sum;
}

console.log(sumAll([4, 1]));
console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));