/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */

/**
 * @param {Array} arr
 * @returns {Array} flatArray
 */

const steamrollArray = (arr) => {
  let flatArray = Array();
  arr.map((el) => {
    if (Array.isArray(el)) {
      const elReturned = steamrollArray(el);
      flatArray = flatArray.concat(elReturned);
    } else {
      flatArray.push(el);
    }
  });
  // console.log(flatArray);
  return flatArray;
};

// steamrollArray([[['a']], [['b']]]); // should return ["a", "b"].
// steamrollArray([[1]]);
steamrollArray([1, [2], [3, [[[4]]]]]);
