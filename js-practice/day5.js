
// Question: 22. Replace character in string

// Replace all instances of a character
function replaceChar(str, oldChar, newChar) {
    // Use split and join method
    return str.split(oldChar).join(newChar);
}
console.log(replaceChar('hello', 'l', 'x')); // 'hexxo'

// Question: 23. Count vowels in string

// Count total vowels using regex
function countVowels(str) {
    // Match all vowels (case-insensitive)
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(countVowels('JavaScript')); // 3
