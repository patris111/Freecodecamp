/**
 * Find the smallest common multiple of the provided parameters that
 * can be evenly divided by both, as well as by all sequential numbers
 * in the range between these parameters.
 * The range will be an array of two numbers that will not necessarily
 * be in numerical order.
 * For example, if given 1 and 3, find the smallest common multiple of
 * both 1 and 3 that is also evenly divisible by all numbers between 1
 * and 3. The answer here would be 6.
 *
 * FreeCodeCamp
 * Author: PatNed
 */

/**
 * Returns the smallest common multiple
 * @param {Array} arr
 * @returns {number} multiple
 */

const smallestCommons = (arr) => {
  let multiple,
    index = 1,
    isMultiple = false,
    count = 0;

  // If first index of array is bigger than the second one,
  // reverse array in place
  if (arr[0] > arr[1]) arr = arr.reverse();

  // All the numbers from the range of the array passed in the
  // function parameters. [1, 4] => [1, 2, 3, 4]
  let numbers = [...Array(arr[arr.length - 1] + 1).keys()].slice(arr[0]);

  while (isMultiple === false) {
    multiple = numbers[numbers.length - 1] * index;

    numbers.map((el) => {
      // Keep track of the amount of numbers evenly divisible
      // by the multiple
      if (multiple % el === 0) count++;
    });
    // If the count is equal to the size of the array numbers,
    // all the numbers in this array were evenly divisible by
    // the multiple
    if (count === numbers.length) {
      isMultiple = true;
    }
    index++;
    count = 0;
  }
  // console.log(multiple);
  return multiple;
};

// smallestCommons([3, 4]); // should return 12.
smallestCommons([1, 5]); // should return a number.
// smallestCommons([1, 5]); // should return 60.
// smallestCommons([5, 1]); // should return 60.
// smallestCommons([2, 10]); // should return 2520.
// smallestCommons([1, 13]); // should return 360360.
// smallestCommons([23, 18]); // should return 6056820.
