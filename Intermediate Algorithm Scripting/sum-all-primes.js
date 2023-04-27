/**
 * A prime number is a whole number greater than 1 with exactly two divisors: 1 and
 * itself. For example, 2 is a prime number because it is only divisible by 1 and 2.
 * In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
 * Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or
 * equal to num.
 *
 * FreeCodeCamp
 * Author: PatNed
 */

/**
 * @param {number} num
 * @returns {number} total
 */

const sumPrimes = (num) => {
  let primes = [...Array(num + 1).keys()].slice(2);

  /**
   * Based on Sieve of Eratosthenes algorithm
   */

  for (let i = 2; i <= num; i++) {
    for (let j = i; j * i <= num; j++) {
      if (primes.indexOf(j * i) !== -1) {
        primes.splice(primes.indexOf(j * i), 1);
      }
    }
  }

  /**
   * Sum of all prime numbers
   * that are less than or equal to num.
   */

  const total = primes.reduce((acc, curVal) => acc + curVal, 0);

  // console.log('Total', total);

  return total;
};

// sumPrimes(10); // should return 17
// sumPrimes(50);
sumPrimes(977); // should return 73156
// sumPrimes(400);
