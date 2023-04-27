function frankenSplice(arr1, arr2, n) {
  
  const arr1Copy = arr1.slice(0);
  let arr2Copy = [...arr2];
  
  for(let i = arr1Copy.length - 1; i >= 0; i--){
    arr2Copy.splice(n, 0, arr1Copy[i]);
  }

  return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
