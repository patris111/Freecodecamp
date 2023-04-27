function destroyer(arr) {

  for(let i = 1; i < arguments.length; i++){
    let arg = arguments[i];
    for(let j = 0; j < arr.length; j++){
      if(arr[j] === arg){
        arr.splice(j, 1);
        //Step one index back to compensate for item removed from array
        j--;
      }
    }
  }
  return arr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
