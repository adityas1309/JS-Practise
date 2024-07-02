
// Question: 11. Celsius to Fahrenheit conversion

// Conversion formula implementation
function celsiusToFahrenheit(c) {
    // (C × 9/5) + 32
    return (c * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25)); // 77

// Question: 10. Find array maximum
function findArrayMax(arr) {
    return Math.max(...arr);
}
console.log(findArrayMax([5, 2, 9, 1])); // 9

// Question: 13. Simple interest calculator

// Mathematical formula implementation
function simpleInterest(p, r, t) {
    // SI = (P × R × T)/100
    return (p * r * t) / 100;
}
console.log(simpleInterest(1000, 5, 2)); // 100

// Question: 9. Calculate array sum
function arraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
console.log(arraySum([1, 2, 3, 4])); // 10
