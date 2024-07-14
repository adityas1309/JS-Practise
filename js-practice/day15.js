
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

// Question: 14. Event Emitter class
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        (this.events[event] || (this.events[event] = [])).push(listener);
        return () => this.off(event, listener);
    }

    off(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(fn => fn !== listener);
    }

    emit(event, ...args) {
        (this.events[event] || []).forEach(fn => fn(...args));
    }
}

// Question: 16. Pub-Sub pattern implementation
```javascript
class PubSub {
    constructor() {
        this.subscribers = {};
    }

    subscribe(topic, callback) {
        (this.subscribers[topic] || (this.subscribers[topic] = [])).push(callback);
    }

    publish(topic, data) {
        (this.subscribers[topic] || []).forEach(fn => fn(data));
    }

    unsubscribe(topic, callback) {
        this.subscribers[topic] = (this.subscribers[topic] || []).filter(fn => fn !== callback);
    }
}
