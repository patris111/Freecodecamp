/**
 * Apply the rot3 substitution cipher to the input string.
 *
 * @param {string} str - The input string to be encoded
 * @return {string} The encoded string
 */
const rot3 = (str) => {
  // Initialize an empty string to hold the result
  let result = '';

  // Loop through each character of the input string
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i); // Get the Unicode value of the character at index i

    // Apply the rot3 substitution cipher
    if (code >= 68 && code <= 90) {
      code -= 3;
    } else if (code <= 67 && code >= 65) {
      code += 23;
    }

    result += String.fromCharCode(code); // Append the transformed character to the result
  }
  console.log(result);

  return result; // Return the encoded string
};

rot3('L OLNH WR ZHDU KDWV'); // Should return I LIKE TO WEAR HATS
