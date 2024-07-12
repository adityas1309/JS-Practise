
// Question: 7. Observable pattern implementation
```javascript
// Basic observer pattern implementation
class Observable {
    constructor() {
        this.subscribers = new Set();
    }

    subscribe(fn) {
        this.subscribers.add(fn);
        return () => this.unsubscribe(fn);
    }

    unsubscribe(fn) {
        this.subscribers.delete(fn);
    }

    notify(data) {
        // Notify all subscribers
        this.subscribers.forEach(fn => fn(data));
    }
}

// Usage:
const observable = new Observable();
const unsubscribe = observable.subscribe(console.log);

// Question: 4. Promise concurrency pool
```javascript
// Control parallel promise execution
async function promisePool(tasks, poolSize) {
    const results = [];
    const executing = [];
    
    for (const task of tasks) {
        // Create promise and track execution
        const p = Promise.resolve().then(task);
        results.push(p);
        
        // Manage pool size
        const e = p.then(() => executing.splice(executing.indexOf(e), 1));
        executing.push(e);
        
        // Wait when pool is full
        if (executing.length >= poolSize) {
            await Promise.race(executing);
        }
    }
    return Promise.all(results);
}

// Usage:
const tasks = [/* array of async functions */];
promisePool(tasks, 3);

// Question: 5. Currying function implementation
```javascript
// Converts function to curried version
function curry(fn) {
    return function curried(...args) {
        // Check if all arguments are provided
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            // Return partial application
            return (...args2) => curried.apply(this, args.concat(args2));
        }
    };
}

// Example usage:
const curriedAdd = curry((a, b) => a + b);
const addFive = curriedAdd(5);
