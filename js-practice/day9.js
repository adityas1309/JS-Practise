
// Question: 45. Calculate BMI

// BMI formula implementation
function calculateBMI(weight, height) {
    // Convert height to meters squared
    return weight / (height ** 2);
}
console.log(calculateBMI(70, 1.75).toFixed(1)); // 22.9

// Question: 42. Flatten nested arrays

// Recursive flattening using reduce
function flattenArray(arr) {
    return arr.reduce((acc, item) => {
        // Handle nested arrays recursively
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}
console.log(flattenArray([1,[2,[3]]])); // [1,2,3]
