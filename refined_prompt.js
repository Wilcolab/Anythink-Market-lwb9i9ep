/**
 * Converts a given string to camelCase format.
 *
 * Splits the input string by spaces, hyphens, or underscores, removes empty segments,
 * and transforms the first word to lowercase and subsequent words to capitalized form.
 *
 * @param {string} input - The string to convert to camelCase. Must be a non-empty string.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws an error if the input is not a non-empty string.
 *
 * @example
 * toCamelCase("  hello-world_test string "); // returns "helloWorldTestString"
 * toCamelCase("Example_string"); // returns "exampleString"
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * Splits the input string by spaces, hyphens, or underscores, removes empty segments,
 * and joins the words using dots, converting all characters to lowercase.
 *
 * @param {string} input - The string to convert to dot.case. Must be a non-empty string.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} Throws an error if the input is not a non-empty string.
 *
 * @example
 * toDotCase("  hello-world_test string "); // returns "hello.world.test.string"
 * toDotCase("Example_string"); // returns "example.string"
 */
function toCamelCase(input) {
    if (typeof input !== 'string' || input == null) {
        throw new Error("Input must be a non-empty string");
    }
    const trimmed = input.trim();
    if (!trimmed) {
        throw new Error("Input must be a non-empty string");
    }
    const words = trimmed
        .split(/[\s\-_]+/)
        .filter(Boolean);

    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("  hello-world_test string ")); // "helloWorldTestString"
// toCamelCase(123); // throws Error

function toDotCase(input) {
    if (typeof input !== 'string' || input == null) {
        throw new Error("Input must be a non-empty string");
    }
    const trimmed = input.trim();
    if (!trimmed) {
        throw new Error("Input must be a non-empty string");
    }
    return trimmed
        .split(/[\s\-_]+/)
        .filter(Boolean)
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase("  hello-world_test string ")); // "hello.world.test.string"
// toDotCase(123); // throws Error

