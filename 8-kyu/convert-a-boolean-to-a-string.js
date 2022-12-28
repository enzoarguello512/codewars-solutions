/**
 * Converts a boolean to a string
 * @param {boolean} b
 * @returns {string} The string representation of the boolean
 */
function booleanToString(b) {
  if (typeof b !== 'boolean') {
    throw new Error('The parameter b needs to be of type boolean');
  }

  return String(b);
}
