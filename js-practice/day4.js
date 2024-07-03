
// Question: 19. Check string length

// Compare length against limit
function checkStringLength(str, max) {
    // Return boolean comparison
    return str.length <= max;
}
console.log(checkStringLength('hello', 5)); // true

// Question: 18. Calculate rectangle area

// Basic geometry calculation
function rectangleArea(width, height) {
    // Multiply dimensions
    return width * height;
}
console.log(rectangleArea(5, 4)); // 20

// Question: 20. Count string occurrences

// Count specific character in string
function countOccurrences(str, char) {
    let count = 0;
    // Iterate through characters
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}
console.log(countOccurrences('programming', 'm')); // 2

// Question: 15. Generate multiplication table

// Loop-based table generation
function multiplicationTable(num) {
    // Iterate from 1 to 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}
multiplicationTable(5); // Prints 5's table

// Question: 17. Sum of even numbers in range

// Accumulate even numbers between start-end
function sumEvenInRange(start, end) {
    let sum = 0;
    // Iterate through range
    for (let i = start; i <= end; i++) {
        // Check evenness
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenInRange(1, 10)); // 30

// Question: 16. Fibonacci sequence generator

// Iterative Fibonacci implementation
function fibonacci(n) {
    // Initialize sequence array
    const seq = [0, 1];
    // Add previous two numbers
    for (let i = 2; i < n; i++) {
        seq[i] = seq[i-1] + seq[i-2];
    }
    return seq.slice(0, n);
}
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
