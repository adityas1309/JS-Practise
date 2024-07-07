
// Question: 41. Count element occurrences

// Create frequency counter using reduce
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        // Increment count for each element
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}
console.log(countOccurrences(['a','b','a','c'])); // {a:2, b:1, c:1}

// Question: 36. Convert string to array of words

// Split on whitespace characters
function stringToWordArray(str) {
    // Use split with regex for multiple spaces
    return str.split(/\s+/);
}
console.log(stringToWordArray('Hello world JS')); // ['Hello', 'world', 'JS']
