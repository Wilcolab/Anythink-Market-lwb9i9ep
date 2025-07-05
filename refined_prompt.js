

/**
 * Normalizes input for case conversion functions.
 * - If the input is `null` or `undefined`, returns an empty string.
 * - If the input is a boolean, returns the string "true" or "false".
 * - If the input is a number, converts it to a string.
 * - If the input is an object (excluding null), throws a TypeError.
 * - Otherwise, returns the string representation.
 * @param {string|number|boolean|null|undefined} input
 * @returns {string}
 * @throws {TypeError} If the input is an object (excluding null).
 */
function normalizeInput(input) {
    if (input === null || input === undefined) return '';
    if (typeof input === 'object') throw new TypeError('Input must not be an object');
    if (typeof input === 'boolean') return input ? 'true' : 'false';
    return String(input);
}

/**
 * Converts the given input to a camelCase string.
 * Removes all non-alphanumeric characters, splits the string into words,
 * lowercases the first word, capitalizes the first letter of subsequent words,
 * and joins them without separators.
 * @function toCamelCase
 * @param {string|number|boolean|null|undefined} input - The value to convert to camelCase.
 * @returns {string} The camelCase representation of the input.
 * @throws {TypeError} If the input is an object (excluding null).
 */
function toCamelCase(input) {
    let str = normalizeInput(input);
    // Replace non-alphanumeric characters with spaces
    str = str.replace(/[^a-zA-Z0-9]+/g, ' ');
    // Trim and split by spaces
    const words = str.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return '';
    // Lowercase the first word, capitalize the first letter of the rest
    return words
        .map((word, idx) =>
            idx === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}


/**
 * Converts the given input to dot.case (lowercase words separated by dots).
 * Removes all non-alphanumeric characters, splits the string into words,
 * lowercases all words, and joins them with dots.
 * @function toDotCaseFormat
 * @param {string|number|boolean|null|undefined} input - The value to convert to dot.case.
 * @returns {string} The dot.case representation of the input.
 * @throws {TypeError} If the input is an object (excluding null).
 */
function toDotCaseFormat(input) {
    let str = normalizeInput(input);
    // Replace non-alphanumeric characters with spaces
    str = str.replace(/[^a-zA-Z0-9]+/g, ' ');
    // Trim and split by spaces
    const words = str.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return '';
    // Lowercase all words and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

/**
 * Converts the given input to kebab-case (lowercase words separated by hyphens).
 * Removes all non-alphanumeric characters, splits the string into words,
 * lowercases all words, and joins them with hyphens.
 * @function toKebabCaseFormat
 * @param {string|number|boolean|null|undefined} input - The value to convert to kebab-case.
 * @returns {string} The kebab-case representation of the input.
 * @throws {TypeError} If the input is an object (excluding null).
 */
function toKebabCaseFormat(input) {
    let str = normalizeInput(input);
    // Replace non-alphanumeric characters with spaces
    str = str.replace(/[^a-zA-Z0-9]+/g, ' ');
    // Trim and split by spaces
    const words = str.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return '';
    // Lowercase all words and join with hyphens
    return words.map(word => word.toLowerCase()).join('-');
}

module.exports = {
    normalizeInput,
    toCamelCase,
    toDotCaseFormat,
    toKebabCaseFormat,
    toKebabCase
};