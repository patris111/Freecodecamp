function spinalCase(str) {
  //Convert string to array. Split at dash or blank symbols
  let strCap = str.split(/[_\-\ ]/);
  
  //Capitalize each elements in array
  for(let i = 0; i < strCap.length; i++){
    strCap[i] = strCap[i].charAt(0).toUpperCase() + strCap[i].substring(1);
  }
  //Convert back to string
  strCap = strCap.join(' ');
  
  //Split according words starting with a capital letter
  let arrStr = strCap.trim().split(/(?=[A-Z])/);
 
  //Remove blank spaces on each items
  arrStr = arrStr.map(e => e.replace(/\s+/g,""));
  
  let formattedStr = arrStr.toString().toLowerCase().replace(/\,/g,"-");
  return formattedStr;
 
}

console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
