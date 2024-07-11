
// Question: 57. Count words in string

// Word count using split
function countWords(str) {
    // Split on whitespace and count
    return str.trim().split(/\s+/).length;
}
console.log(countWords('Hello world')); // 2

// Question: 59. Generate random hex color

// Create 6-digit hex color
function randomHexColor() {
    // Generate random number and pad to 6 digits
    return '#' + Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, '0');
}
console.log(randomHexColor()); // #a1b2c3
