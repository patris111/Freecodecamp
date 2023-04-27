function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let arg2Key = Object.keys(source);
  let match = 0;

  //Iterate through each objects in collection
  for(let i = 0; i < collection.length; i++){
    /*Check if current object has the same property and value
      than source
    */
    for(let j = 0; j < arg2Key.length; j++){
      if(collection[i].hasOwnProperty(arg2Key[j]) && 
        collection[i][arg2Key[j]] === source[arg2Key[j]]){
        match++;
      }
    }
    //Check if the all source's key/value were found in object 
    if(match === arg2Key.length){
      arr.push(collection[i]);
    }
    //Reinitialize for next object of collection
    match = 0;
  }
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));
/*
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
*/
/*
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
*/ 
/*
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
*/