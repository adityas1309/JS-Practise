
// Question: 50. Find longest word

// Split and reduce to find maximum
function longestWord(str) {
    return str.split(/\s+/).reduce((longest, word) => 
        // Compare word lengths
        word.length > longest.length ? word : longest
    , '');
}
console.log(longestWord('The quick brown fox')); // 'quick'

// Question: 51. Sort array of numbers

// Ascending sort with compare function
function sortNumbers(arr) {
    // Numeric sort using subtraction
    return arr.sort((a, b) => a - b);
}
console.log(sortNumbers([3, 1, 4, 2])); // [1, 2, 3, 4]
