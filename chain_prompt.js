function toKebabCase(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error('Invalid input: expected a non-empty string');
    }
    return input
        .toLowerCase()
        .replace(/[\s_-]+/g, '-')      // Replace spaces, underscores, hyphens with single hyphen
        .replace(/^-+|-+$/g, '');      // Trim leading/trailing hyphens
}

// Example usage:
// console.log(toKebabCase("Hello World")); // "hello-world"
// console.log(toKebabCase("Hello__   World--Again")); // "hello-world-again"
// toKebabCase(42); // throws Error