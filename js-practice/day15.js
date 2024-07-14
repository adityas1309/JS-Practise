
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
