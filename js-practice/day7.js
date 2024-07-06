
// Question: 34. Extract object keys as array

// Using Object.keys method
function getObjectKeys(obj) {
    // Return array of own property keys
    return Object.keys(obj);
}
console.log(getObjectKeys({name: 'John', age: 30})); // ['name', 'age']

// Question: 32. Calculate array average

// Using reduce for sum calculation
function arrayAverage(arr) {
    // Sum elements and divide by length
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}
console.log(arrayAverage([4, 2, 8, 6])); // 5
