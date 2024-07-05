
// Question: 29. Merge two arrays

// Concatenate arrays without duplicates
function mergeArrays(arr1, arr2) {
    // Combine and filter duplicates
    return [...new Set([...arr1, ...arr2])];
}
console.log(mergeArrays([1,2], [2,3])); // [1,2,3]

// Question: 31. FizzBuzz implementation

// Classic FizzBuzz logic with modulus
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        // Check divisibility rules
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        console.log(output || i); // Default to number if empty
    }
}
fizzBuzz(5); // 1, 2, Fizz, 4, Buzz

// Question: 26. Check array inclusion

// Custom includes function
function arrayIncludes(arr, element) {
    // Use indexOf check
    return arr.indexOf(element) !== -1;
}
console.log(arrayIncludes([1,2,3], 2)); // true

// Question: 30. Sum of digits in number

// Convert number to string for processing
function sumDigits(num) {
    return String(num).split('').reduce(
        (sum, digit) => sum + Number(digit), 0
    );
}
console.log(sumDigits(123)); // 6

// Question: 27. Capitalize first letter

// Capitalize first character
function capitalize(str) {
    // Handle empty string case
    return str.length > 0 
        ? str[0].toUpperCase() + str.slice(1) 
        : '';
}
console.log(capitalize('test')); // 'Test'

// Question: 28. Reverse array elements

// Manual array reversal
function reverseArray(arr) {
    const reversed = [];
    // Iterate from end to start
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1,2,3])); // [3,2,1]
