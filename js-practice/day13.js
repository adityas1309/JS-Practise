
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
