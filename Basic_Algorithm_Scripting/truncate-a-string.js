function truncateString(str, num) {
  
  const strSize = str.length; 
  
  if(strSize > num){
    let subStr = str.slice(0, num);
    str = subStr.concat("...");
  }

  return str;
}

console.log(truncateString("Absolutely Longer", 2));
