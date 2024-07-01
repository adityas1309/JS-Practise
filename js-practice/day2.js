
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

// Question: 6. Check prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); // true
