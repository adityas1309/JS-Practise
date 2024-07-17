
// Question: 30. Web worker manager
```javascript
class WorkerManager {
    constructor(workerScript, poolSize = 4) {
        this.workers = Array(poolSize).fill().map(() => new Worker(workerScript));
        this.queue = [];
        this.workerStates = Array(poolSize).fill(true);
        
        this.workers.forEach((worker, i) => {
            worker.onmessage = () => {
                this.workerStates[i] = true;
                this.processNext();
            };
        });
    }

    postMessage(data) {
        return new Promise(resolve => {
            this.queue.push({ data, resolve });
            this.processNext();
        });
    }

    processNext() {
        const availableWorker = this.workerStates.findIndex(state => state);
        if (availableWorker === -1 || !this.queue.length) return;
        
        this.workerStates[availableWorker] = false;
        const { data, resolve } = this.queue.shift();
        this.workers[availableWorker].postMessage(data);
        this.workers[availableWorker].onmessage = e => resolve(e.data);
    }
}

// Question: 33. Async middleware chain with context
```javascript
async function middlewareChain(context, middlewares) {
    let index = 0;
    const next = async () => {
        if (index < middlewares.length) {
            return middlewares[index++](context, next);
        }
    };
    return next();
}

// Usage:
middlewareChain({}, [
    async (ctx, next) => {
        ctx.user = await fetchUser();
        await next();
    },
    async (ctx) => {
        console.log(ctx.user);
    }
]);

// Question: 34. Immutable list implementation
```javascript
class ImmutableList {
    constructor(items) {
        this._data = Object.freeze([...items]);
    }

    push(item) {
        // Return new instance with added item
        return new ImmutableList([...this._data, item]);
    }

    pop() {
        return new ImmutableList(this._data.slice(0, -1));
    }

    get items() {
        return [...this._data];
    }
}
