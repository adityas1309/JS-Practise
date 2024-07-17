
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
