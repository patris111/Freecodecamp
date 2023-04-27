function titleCase(str) {
  
  let words = str.split(' ');
  let wordCapitalized = "";
  
  for(let i = 0; i < words.length; i++){

    let firstLetter = words[i][0].toUpperCase();
    
    let otherLetters = words[i];
    
    otherLetters = otherLetters.substring(1).toLowerCase();
    
    wordCapitalized += ' ' + firstLetter + otherLetters;
  }

  str = wordCapitalized.trim();
  return str;
}

console.log(titleCase("I'm a little tea pot"));
//console.log(titleCase("sHoRt AnD sToUt"));
