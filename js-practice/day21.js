
// Question: 46. Virtual proxy pattern
```javascript
class ImageProxy {
    constructor(url) {
        this.url = url;
        this.realImage = null;
    }

    load() {
        if (!this.realImage) {
            this.realImage = new Image();
            this.realImage.src = this.url;
        }
        return this.realImage;
    }
}

// Usage:
const proxy = new ImageProxy('large-image.jpg');
document.body.appendChild(proxy.load());

// Question: 48. Observable properties
```javascript
function observe(obj, prop, callback) {
    let value = obj[prop];
    
    Object.defineProperty(obj, prop, {
        get() { return value; },
        set(newVal) {
            const oldVal = value;
            value = newVal;
            callback(newVal, oldVal);
        }
    });
}

// Usage:
const user = { name: 'Alice' };
observe(user, 'name', (newVal, oldVal) => {
    console.log(`Name changed from ${oldVal} to ${newVal}`);
});

// Question: 47. Priority promise queue
```javascript
class PriorityPromiseQueue {
    constructor() {
        this.queue = [];
    }

    add(task, priority = 0) {
        this.queue.push({ task, priority });
        this.queue.sort((a, b) => b.priority - a.priority);
    }

    async run() {
        while (this.queue.length) {
            const { task } = this.queue.shift();
            await task();
        }
    }
}
