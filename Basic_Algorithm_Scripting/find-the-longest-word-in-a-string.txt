function findLongestWordLength(str) {
  
  let words =  str.split(' ');
  let longestWord = '';
  
  for(let i = 0; i < words.length; i++){
    
    if(words[i].length > longestWord.length){
      
      longestWord = words[i];
    }
    else{
      
      continue;
    }
  }
  
  str = longestWord;
  
  return str.length;
}

console.log(findLongestWordLength("May the force be with you"));
