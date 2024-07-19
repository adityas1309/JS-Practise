
// Question: 44. Mixin pattern implementation
```javascript
const LoggerMixin = Base => class extends Base {
    log(message) {
        console.log(`[${new Date().toISOString()}] ${message}`);
    }
};

class Service {
    constructor() {
        LoggerMixin(this.constructor);
    }
}

// Usage:
const service = new Service();
service.log('Initialized'); // Timestamped message

// Question: 45. Validation framework
```javascript
class Validator {
    constructor() {
        this.rules = [];
    }

    add(fn, message) {
        this.rules.push({ fn, message });
        return this;
    }

    validate(value) {
        return this.rules
            .filter(rule => !rule.fn(value))
            .map(rule => rule.message);
    }

    static required() {
        return value => !!value;
    }
}

// Usage:
const emailValidator = new Validator()
    .add(Validator.required(), 'Email is required')
    .add(v => v.includes('@'), 'Invalid email');

// Question: 42. Memoization with WeakMap
```javascript
function weakMemoize(fn) {
    const cache = new WeakMap();
    return (obj) => {
        if (!cache.has(obj)) {
            cache.set(obj, fn(obj));
        }
        return cache.get(obj);
    };
}

// Usage:
const memoizedObjProcessor = weakMemoize(obj => {
    return Object.keys(obj).join(',');
});

// Question: 41. Custom async iterator
```javascript
class AsyncRange {
    constructor(start, end, delay = 100) {
        this.start = start;
        this.end = end;
        this.delay = delay;
    }

    [Symbol.asyncIterator]() {
        return {
            current: this.start,
            last: this.end,
            async next() {
                await new Promise(resolve => 
                    setTimeout(resolve, this.delay)
                );
                
                return this.current <= this.last 
                    ? { done: false, value: this.current++ }
                    : { done: true };
            }
        };
    }
}

// Usage:
(async () => {
    for await (let num of new AsyncRange(1, 5)) {
        console.log(num); // Logs 1-5 with 100ms delay
    }
})();
