
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
