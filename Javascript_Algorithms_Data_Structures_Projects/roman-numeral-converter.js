/*
 * FreeCodeCamp
 */

/**
 * Converts a given number to a Roman numeral.
 * @param {number} num - The number to convert.
 * @returns {string} - The Roman numeral representation of the input number.
 */
const convertToRoman = (num) => {
  // Define an array of objects representing Roman numeral values
  const romanNumerals = [
    { numeral: 'M', value: 1000 },
    { numeral: 'CM', value: 900 },
    { numeral: 'D', value: 500 },
    { numeral: 'CD', value: 400 },
    { numeral: 'C', value: 100 },
    { numeral: 'XC', value: 90 },
    { numeral: 'L', value: 50 },
    { numeral: 'XL', value: 40 },
    { numeral: 'X', value: 10 },
    { numeral: 'IX', value: 9 },
    { numeral: 'V', value: 5 },
    { numeral: 'IV', value: 4 },
    { numeral: 'I', value: 1 },
  ];

  // Initialize an empty string to store the Roman numeral representation
  let result = '';

  // Iterate through the Roman numeral values and build the result
  romanNumerals.forEach(({ numeral, value }) => {
    while (num >= value && num > 0) {
      result += numeral;
      num -= value;
    }
  });

  console.log(result);
  return result;
};

convertToRoman(45);
