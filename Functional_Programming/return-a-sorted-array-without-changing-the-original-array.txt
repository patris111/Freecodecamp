var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  const sortedArr = [...arr];
  return sortedArr.sort((a, b) => a - b);
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));
