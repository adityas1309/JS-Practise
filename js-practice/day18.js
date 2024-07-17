
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

// Question: 32. Reactive streams with operators
```javascript
class ObservableStream {
    constructor(source) {
        this.subscribers = [];
        source(this._emit.bind(this));
    }

    _emit(value) {
        this.subscribers.forEach(fn => fn(value));
    }

    pipe(...operators) {
        // Chain operators sequentially
        return operators.reduce((obs, op) => op(obs), this);
    }

    subscribe(fn) {
        this.subscribers.push(fn);
        return () => {
            this.subscribers = this.subscribers.filter(f => f !== fn);
        };
    }
}

// Operator example:
const map = f => source => new ObservableStream(emit => {
    source.subscribe(val => emit(f(val)));
};

// Question: 31. Finite state machine implementation
```javascript
class StateMachine {
    constructor(initial) {
        this.state = initial;
        this.transitions = {};
    }
    
    addTransition(from, to, condition) {
        // Store transition rules {fromState: {condition: toState}}
        this.transitions[from] = this.transitions[from] || {};
        this.transitions[from][condition] = to;
    }

    dispatch(condition) {
        // Validate and execute state transition
        const next = this.transitions[this.state]?.[condition];
        if (next) this.state = next;
        return this.state;
    }
}

// Usage:
const fsm = new StateMachine('idle');
fsm.addTransition('idle', 'fetching', 'FETCH');

// Question: 35. Abortable timeout promise
```javascript
function abortableTimeout(delay) {
    const controller = new AbortController();
    const timeout = new Promise((_, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('Timeout'));
        }, delay);
        controller.signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error('Aborted'));
        });
    });
    return { timeout, abort: () => controller.abort() };
}

// Usage:
const { timeout, abort } = abortableTimeout(5000);
timeout.catch(console.error);
