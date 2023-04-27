/**
 *
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 *
 * FreeCodeCamp
 * Author: PatNed
 */

/**
 * @param {string} str
 * @returns {string} missingLetter
 */

const fearNotLetter = (str) => {
  const num = [...Array(26).keys()];
  const alphabet = num.map((x) => String.fromCharCode(x + 97));
  const start = alphabet.indexOf(str[0]);
  const end = alphabet.indexOf(str[str.length - 1]);
  const subAlphabet = alphabet.slice(start, end + 1);

  // Return only letters in alphabet that are not included in str.
  const missingLetter = subAlphabet.filter((letter) => !str.includes(letter));
  // console.log(missingLetter[0]);
  return missingLetter[0];
};

fearNotLetter('abce'); //should return the string d

// fearNotLetter('abcdefghjklmno'); //should return the string i
// fearNotLetter('stvwx'); //should return the string u
// fearNotLetter('bcdf'); //should return the string e
// fearNotLetter('abcdefghijklmnopqrstuvwxyz'); //should return undefined
