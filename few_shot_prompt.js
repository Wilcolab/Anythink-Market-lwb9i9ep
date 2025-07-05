function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Example usage:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber

// Few-shot Prompt: Convert strings to camelCase
// Input: "hello world" => Output: "helloWorld"
// Input: "make it camel case" => Output: "makeItCamelCase"
// Input: "github copilot prompt" => Output: "githubCopilotPrompt"

function toCamelCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}