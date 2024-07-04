
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

// Question: 25. Remove duplicates from array

// Using Set for unique values
function removeDuplicates(arr) {
    // Convert Set back to array
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3])); // [1,2,3]

// Question: 21. Calculate sphere volume

// Calculate sphere volume using formula
function sphereVolume(radius) {
    // V = (4/3)πr³
    return (4/3) * Math.PI * Math.pow(radius, 3);
}
console.log(sphereVolume(3).toFixed(2)); // 113.10

// Question: 24. Convert string to title case

// Title case transformation
function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(word => 
        // Capitalize first letter of each word
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}
console.log(toTitleCase('hello world')); // 'Hello World'
