/*
 * Create a function that sums two arguments together.
 * If only one argument is provided, then return a function
 * that expects one argument and returns the sum.
 *
 * FreeCodeCamp
 *
 */

/**
 * Adds two numbers together or returns a function that adds the first argument to a second argument.
 *
 * @param {...number} args - The numbers to be added. If two numbers are provided, they will be added together. If only one number is provided, a function will be returned that adds the first number to a second number.
 * @return {(number|function)} - If two numbers are provided, the sum of the numbers. If only one number is provided, a function that adds the first number to a second number. If the arguments do not meet the required conditions, undefined is returned.
 */

const addTogether = (...args) => {
  const isNumber = (num) => typeof num === 'number';

  if (args.length === 2 && isNumber(args[0]) && isNumber(args[1])) {
    return args[0] + args[1];
  } else if (args.length === 1 && isNumber(args[0])) {
    const firstArg = args[0];

    const addSecondArg = (secondArg) => (isNumber(secondArg) ? firstArg + secondArg : undefined);

    return addSecondArg;
  } else {
    return undefined;
  }
};

// Test cases
console.log(addTogether(2, 3)); // Output: 5
var sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3)); // Output: 5
console.log(addTogether(2, '3')); // Output: undefined
console.log(addTogether(2)([3])); // Output: undefined
console.log(addTogether(5, undefined)); // Output: undefined
console.log(addTogether('4', '5')); // Output: undefined
