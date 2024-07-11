
// Question: 57. Count words in string

// Word count using split
function countWords(str) {
    // Split on whitespace and count
    return str.trim().split(/\s+/).length;
}
console.log(countWords('Hello world')); // 2
