/**
 * Compare two arrays and return a new array with any items only found in one of
 * the two given arrays, but not both. In other words, return the symmetric
 * difference of the two arrays.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */

function diffArray(arr1, arr2) {
  //Compare arr1 against arr2
  const diffArr1 = arr1.filter((a) => arr2.indexOf(a) === -1);

  //Compare arr2 against arr1
  const diffArr2 = arr2.filter((a) => arr1.indexOf(a) === -1);

  const newArr = [...diffArr1, ...diffArr2];

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 2, 9, 6, 4, 5], [1, 7, 3, 4, 5]));
console.log(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]));
console.log(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']));
console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);
