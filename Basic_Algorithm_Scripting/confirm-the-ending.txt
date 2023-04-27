function confirmEnding(str, target) {
 
  const endOfPos = str.length;
  const targetSize = target.length;
  const startPos = endOfPos - targetSize;
  const word = str.slice(startPos);
  
  if(word === target){
    return true;
  }
  else{
    return false;
  }
}

console.log(confirmEnding("Abstraction", "action"));
