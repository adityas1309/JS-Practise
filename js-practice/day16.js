
// Question: 22. Promise.allSettled polyfill
```javascript
function allSettled(promises) {
    return Promise.all(promises.map(p => 
        Promise.resolve(p).then(
            value => ({ status: 'fulfilled', value }),
            reason => ({ status: 'rejected', reason })
        )
    ));
}

// Usage:
allSettled([Promise.resolve(1), Promise.reject('error')]);

// Question: 20. Scheduler with delayed tasks
```javascript
class Scheduler {
    constructor() {
        this.queue = [];
        this.isProcessing = false;
    }

    add(task, delay) {
        return new Promise(resolve => {
            this.queue.push({ task, delay, resolve });
            if (!this.isProcessing) this.process();
        });
    }

    async process() {
        this.isProcessing = true;
        while (this.queue.length) {
            const { task, delay, resolve } = this.queue.shift();
            await new Promise(r => setTimeout(r, delay));
            resolve(await task());
        }
        this.isProcessing = false;
    }
}

// Question: 21. Singleton pattern implementation
```javascript
class Singleton {
    static instance;
    
    constructor() {
        if (Singleton.instance) return Singleton.instance;
        // Initialize singleton instance
        this.data = {};
        Singleton.instance = this;
    }
    
    static getInstance() {
        if (!Singleton.instance) new Singleton();
        return Singleton.instance;
    }
}

// Usage:
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true

// Question: 23. Observer with Proxy
```javascript
function createObservable(target) {
    const observers = new Set();
    
    return new Proxy(target, {
        set(obj, prop, value) {
            // Notify observers on change
            const prev = obj[prop];
            obj[prop] = value;
            observers.forEach(fn => fn(prop, prev, value));
            return true;
        }
    });
}

// Usage:
const observable = createObservable({ count: 0 });

// Question: 19. Generate array permutations
```javascript
function permutations(arr) {
    const result = [];
    
    function permute(start) {
        if (start >= arr.length) {
            result.push([...arr]);
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            permute(start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]];
        }
    }
    
    permute(0);
    return result;
}
