/**
 *
 * Check if the predicate (second argument) is truthy on all elements of a
 * collection (first argument).In other words, you are given an array collection
 * of objects. The predicate pre will be an object property and you need to
 * return true if its value is truthy. Otherwise, return false.
 *
 * In JavaScript, truthy values are values that translate to true when
 * evaluated in a Boolean context.
 *
 * FreeCodeCamp
 * Author: PatNed
 */

/**
 * A function that checks if all objects in an array have a truthy value
 * at a specified property index.
 *
 * @param {Array} collection - The collection of objects to check.
 * @param {number} pre - The property index to check for truthiness.
 * @returns {boolean} - `true` if all objects have a truthy value at the
 *   specified property index, `false` otherwise.
 */

const truthCheck = (collection, pre) => {
  // Use the `every()` method to test if all objects in the `collection`
  // array have a truthy value at the specified `pre` property index.
  // The `Boolean()` constructor is used to convert the value at the
  // `pre` property index to a boolean value, ensuring that we correctly
  // handle values that are not necessarily boolean values.

  return collection.every((obj) => Boolean(obj[pre]));
};

console.log(
  truthCheck(
    [
      { name: 'Quincy', role: 'Founder', isBot: false },
      { name: 'Naomi', role: '', isBot: false },
      { name: 'Camperbot', role: 'Bot', isBot: true },
    ],
    'role'
  )
);
