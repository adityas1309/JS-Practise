
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

// Question: 13. Compose middleware functions
```javascript
function compose(middlewares) {
    return (context, next) => {
        let index = -1;
        const dispatch = (i) => {
            if (i <= index) return Promise.reject();
            index = i;
            let fn = middlewares[i] || next;
            if (!fn) return Promise.resolve();
            try {
                return Promise.resolve(
                    fn(context, () => dispatch(i + 1))
                );
            } catch (err) {
                return Promise.reject(err);
            }
        };
        return dispatch(0);
    };
}
