
// Question: 57. Count words in string

// Word count using split
function countWords(str) {
    // Split on whitespace and count
    return str.trim().split(/\s+/).length;
}
console.log(countWords('Hello world')); // 2

// Question: 59. Generate random hex color

// Create 6-digit hex color
function randomHexColor() {
    // Generate random number and pad to 6 digits
    return '#' + Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, '0');
}
console.log(randomHexColor()); // #a1b2c3

// Question: 60. Check power of two

// Bitwise power of two check
function isPowerOfTwo(n) {
    // Powers of two have single 1 bit
    return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(16)); // true

// Question: 58. Validate URL format

// Basic URL validation with regex
function isValidURL(url) {
    // Check URL pattern
    const pattern = /^(https?:\/\/)[\w.-]+\.[a-z]{2,}(\/.*)?$/i;
    return pattern.test(url);
}
console.log(isValidURL('https://example.com')); // true

// Question: 1. Implement debounce function
```javascript
// Returns a debounced version of the input function
function debounce(func, delay) {
    let timeoutId;
    // Closure preserves timeoutId between calls
    return (...args) => {
        // Clear previous pending execution
        clearTimeout(timeoutId); 
        // Schedule new execution
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage example:
const debouncedSearch = debounce((query) => {
    console.log(`Searching: ${query}`);
}, 300);

// Question: 2. Deep clone objects/arrays
```javascript
// Recursive cloning for nested structures
function deepClone(obj) {
    // Handle primitives and null
    if (typeof obj !== 'object' || obj === null) return obj;
    
    // Create base clone
    const clone = Array.isArray(obj) ? [] : {};
    
    // Recursively copy properties
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
    return clone;
}

// Test case:
const original = { a: [1, { b: 2 }] };
const cloned = deepClone(original);
