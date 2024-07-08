
// Question: 45. Calculate BMI

// BMI formula implementation
function calculateBMI(weight, height) {
    // Convert height to meters squared
    return weight / (height ** 2);
}
console.log(calculateBMI(70, 1.75).toFixed(1)); // 22.9
