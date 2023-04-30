function checkObj(obj, checkProp) {
  // Only change code below this line
  var prop = obj.hasOwnProperty(checkProp);

  if(prop){
    return obj[checkProp];
  }
  else{
     return "Not Found";
  }
 
  // Only change code above this line
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));