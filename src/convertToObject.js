'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const spl = sourceString.split(';');

  const css = {};

  for (const declaration of spl) {
    if (!declaration.trim()) {
      continue;
    }

    const [property, value] = declaration.split(':');

    if (property && value) {
      css[property.trim()] = value.trim();
    }
  }

  return css;
}

module.exports = convertToObject;
