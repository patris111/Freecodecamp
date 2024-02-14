/*
 * FreeCodeCamp
 */

/**
 * Applies the ROT13 substitution cipher to the input string.
 *
 * @param {string} str - the input string to be encoded
 * @return {string} the encoded string
 */
const rot13 = (str) => {
  // Initialize an empty string to hold the result
  let result = '';

  // Loop through each character of the input string
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i); // Get the Unicode value of the character at index i

    // Apply the ROT13 substitution cipher
    if (code >= 65 && code <= 77) {
      code += 13;
    } else if (code >= 78 && code <= 90) {
      code -= 13;
    }

    result += String.fromCharCode(code); // Append the transformed character to the result
  }

  return result; // Return the encoded string
};

rot13('SERR PBQR PNZC');
