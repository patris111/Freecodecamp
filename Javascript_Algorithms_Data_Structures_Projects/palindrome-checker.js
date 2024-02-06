/*
 * FreeCodeCamp
 */

/**
 * Check if a string is a palindrome.
 * @param {string} str - The input string to be checked.
 * @returns {boolean} - True if the input string is a palindrome, false otherwise.
 */
const palindrome = function (str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the clean string is a palindrome
  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

palindrome('race car');
