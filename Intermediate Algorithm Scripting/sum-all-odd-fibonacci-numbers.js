/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe),
 * in a string to their corresponding HTML entities.
 *
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that
 * are less than or equal to num. The first two numbers in the Fibonacci sequence
 * are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 *
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than
 * or equal to 10 are 1, 1, 3, and 5.
 *
 * FreeCodeCamp
 * Author: PatNed
 */

/**
 * @param {int} num
 * @returns {int} total
 */

const sumFibs = (num) => {
  let fibSeq = [1, 1];
  let sum = 0;

  /**
   * Generate Fibonacci numbers
   * that are less than or equal to num.
   */

  for (let i = 0; i <= num; i++) {
    sum = fibSeq[i] + fibSeq[i + 1];
    sum <= num && fibSeq.push(sum);
  }

  /**
   * Sum of all odd Fibonacci numbers
   * that are less than or equal to num.
   */
  const total = fibSeq.reduce((acc, curVal) => {
    if (curVal % 2 !== 0) acc += curVal;
    return acc;
  });

  // console.log(fibSeq);
  // console.log('total', total);

  return total;
};

sumFibs(4); // should return 5.
// sumFibs(1); //should return a number.
// sumFibs(1000); // should return 1785.
// sumFibs(4000000); // should return 4613732.
// sumFibs(75024); // should return 60696.
// sumFibs(75025); // should return 135721.
