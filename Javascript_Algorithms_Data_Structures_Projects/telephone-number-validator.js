/*
 * FreeCodeCamp
 */

/**
 * Checks if the given string is a valid telephone number.
 * @param {string} str - The string to be checked.
 * @returns {boolean} - True if the string is a valid telephone number, false otherwise.
 */
const telephoneCheck = (str) => {
  // Regular expression to match valid telephone numbers
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  // Return true if the string matches the regex, otherwise return false
  return regex.test(str);
};
