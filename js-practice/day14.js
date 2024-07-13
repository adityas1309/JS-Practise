
// Question: 11. Promise retry with backoff
```javascript
function retryWithBackoff(fn, retries = 3, delay = 1000) {
    return new Promise((resolve, reject) => {
        const attempt = (attemptCount) => {
            fn().then(resolve)
                .catch((err) => {
                    if (attemptCount >= retries) return reject(err);
                    // Exponential backoff delay
                    setTimeout(() => attempt(attemptCount + 1), delay * Math.pow(2, attemptCount));
                });
        };
        attempt(0);
    });
}

// Usage: 
retryWithBackoff(fetchData, 3);
