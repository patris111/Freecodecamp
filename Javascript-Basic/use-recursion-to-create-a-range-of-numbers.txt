function rangeOfNumbers(startNum, endNum) {
  
  if(endNum < startNum){
    
    //Base case
    return[];
  }
  else{
    
    //Recursive case
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
};


console.log(rangeOfNumbers(4, 4));
