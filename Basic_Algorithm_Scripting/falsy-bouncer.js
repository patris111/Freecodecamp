function bouncer(arr) {
  
  for(let i = 0; i < arr.length; i++){
   
    if(!!arr[i] == false){
     
      //Remove falsy from array
      arr.splice(i, 1);
      
      //Adjust increment value to match array's new size
      i -=1;
    }
    else{
      continue;
    }
  }
  
  return arr;
}

//console.log(bouncer([7, "ate", "", false, 9]));
//console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));