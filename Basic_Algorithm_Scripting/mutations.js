function mutation(arr) {

  const firstElStr = arr[0].toLowerCase();
  const secondElStr = arr[1].toLowerCase();
  let sameLetters = false;

  loop:
  for(let i = 0; i < secondElStr.length; i++){
    for(let j = 0; j < firstElStr.length; j++){
      if(secondElStr[i] == firstElStr[j]){
        
        sameLetters = true;
        break;
      }
      else{
        sameLetters = false;
      }
      if(j == firstElStr.length -1 && sameLetters == false){
        
        break loop;
      }
    }
  }
  return sameLetters;
}

console.log(mutation(["hello", "hey"]));
//console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
//console.log(mutation(["Tiger", "Zebra"]));
//console.log(mutation(["ate", "date"]));
//console.log(mutation(["Noel", "Ole"]));
