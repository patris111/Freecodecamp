/* Pig Latin is a way of altering English Words. The rules are as follows:
 * If a word begins with a consonant, take the first consonant or consonant 
 * cluster, move it to the end of the word, and add ay to it.
 * If a word begins with a vowel, just add way at the end. 

JavaScript Algorithms and Data Structures / Intermediate Algorithm Scripting
FreeCodeCamp
Author: PatNed
*/

/**
 * @param {string} str
 * @returns {string}
 */

const translatePigLatin = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // Copy of str
  let strCopy = str;
  // Has no vowels at all
  if (str.match(/[aeiou]/g) === null) {
    return str.concat('ay');
  }
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    // Has a vowel
    if (vowels.includes(element)) {
      break;
    }
    // Has a consonant
    else {
      strCopy = strCopy.concat(element).substring(1);
    }
  }
  str === strCopy ? (str = strCopy.concat('way')) : (str = strCopy.concat('ay'));

  return str;
};

let pigLatinWord = translatePigLatin('california');

console.log(pigLatinWord);

// translatePigLatin("california") should return the string aliforniacay
// translatePigLatin("glove") should return the string oveglay
// translatePigLatin("algorithm") should return the string algorithmway.
// translatePigLatin("rhythm") should return the string rhythmay.
