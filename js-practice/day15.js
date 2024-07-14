
// Question: 15. Flatten nested arrays (iterative)
```javascript
function flattenIterative(arr) {
    const stack = [...arr];
    const result = [];
    while (stack.length) {
        const next = stack.pop();
        Array.isArray(next) 
            ? stack.push(...next) 
            : result.unshift(next);
    }
    return result;
}
