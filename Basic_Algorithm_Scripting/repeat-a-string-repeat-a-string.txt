function repeatStringNumTimes(str, num) {
  
  const baseStr = str; 
  
  if(num <= 0){
    str = "";
  }
  else{
    for(let i = 0; i < num -1; i++){
      str = str.concat(baseStr); 
    }
  }
  return str;
}

console.log(repeatStringNumTimes("abc", 0));
