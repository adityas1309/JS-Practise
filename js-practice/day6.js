
// Question: 29. Merge two arrays

// Concatenate arrays without duplicates
function mergeArrays(arr1, arr2) {
    // Combine and filter duplicates
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeArrays([1,2], [2,3])); // [1,2,3]
