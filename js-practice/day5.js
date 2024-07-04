
// Question: 22. Replace character in string

// Replace all instances of a character
function replaceChar(str, oldChar, newChar) {
    // Use split and join method
    return str.split(oldChar).join(newChar);
}
console.log(replaceChar('hello', 'l', 'x')); // 'hexxo'
