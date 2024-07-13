
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

// Question: 12. LRU Cache implementation
```javascript
class LRUCache {
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        // Refresh key as most recently used
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        // Evict least recently used if over capacity
        if (this.cache.size > this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
    }
}
