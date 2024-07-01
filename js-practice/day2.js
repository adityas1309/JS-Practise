
// Question: 5. Calculate factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120

// Question: 7. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // 'olleh'
