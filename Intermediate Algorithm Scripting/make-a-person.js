/*
 * FreeCodeCamp
 */

/**
 * Creates a new Person object with the given first and last names.
 *
 * @param {string} first - The first name of the person.
 * @param {string} last - The last name of the person.
 */
const Person = function (first, last) {
  let firstName = first;
  let lastName = last;

  /**
   * Returns the full name of the person.
   *
   * @return {string} The full name of the person.
   */
  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };

  /**
   * Retrieves the first name.
   *
   * @return {string} The first name.
   */
  this.getFirstName = function () {
    return firstName;
  };

  /**
   * Retrieves the last name.
   *
   * @return {string} The last name.
   */
  this.getLastName = function () {
    return lastName;
  };

  /**
   * Sets the first name.
   *
   * @param {string} newFirst - The new first name.
   * @return {undefined} No return value.
   */
  this.setFirstName = function (newFirst) {
    if (typeof newFirst === 'string') {
      firstName = newFirst;
    }
  };

  /**
   * Set the last name of the object.
   *
   * @param {string} newLast - The new last name to be set.
   */
  this.setLastName = function (newLast) {
    if (typeof newLast === 'string') {
      lastName = newLast;
    }
  };

  /**
   * Sets the full name of the person.
   *
   * @param {string} newFirst - The new first name.
   * @param {string} newLast - The new last name.
   */
  this.setFullName = function (newFirst, newLast) {
    if (typeof newFirst === 'string' && typeof newLast === 'string') {
      firstName = newFirst;
      lastName = newLast;
    }
  };
};
