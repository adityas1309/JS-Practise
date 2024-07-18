
// Question: 39. Memento pattern for undo/redo
```javascript
class HistoryManager {
    constructor() {
        this.states = [];
        this.position = -1;
    }

    push(state) {
        // Clear redo states when pushing new state
        this.states.splice(this.position + 1);
        this.states.push(JSON.stringify(state));
        this.position = this.states.length - 1;
    }

    undo() {
        return this.position > 0 
            ? JSON.parse(this.states[--this.position])
            : null;
    }

    redo() {
        return this.position < this.states.length - 1 
            ? JSON.parse(this.states[++this.position])
            : null;
    }
}

// Question: 36. Dependency graph resolver
```javascript
function resolveDependencies(graph) {
    const resolved = [];
    const visiting = new Set();
    
    function visit(node) {
        if (resolved.includes(node)) return;
        if (visiting.has(node)) throw new Error('Cycle detected');
        
        visiting.add(node);
        graph[node].forEach(visit);
        visiting.delete(node);
        resolved.push(node);
    }
    
    Object.keys(graph).forEach(visit);
    return resolved;
}

// Test:
const graph = {
    a: ['b'], 
    b: ['c'], 
    c: []
};
console.log(resolveDependencies(graph)); // ['c', 'b', 'a']

// Question: 40. Concurrent promise batcher
```javascript
async function batchPromises(items, processFn, batchSize = 10) {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        results.push(...await Promise.all(
            batch.map(item => processFn(item))
        ));
    }
    return results;
}

// Usage:
batchPromises(urls, fetchUrl, 5);

// Question: 38. Observable async iterator
```javascript
function createAsyncIterable() {
    const queue = [];
    let resolveNext;
    
    return {
        async *[Symbol.asyncIterator]() {
            while (true) {
                if (queue.length) yield queue.shift();
                else await new Promise(r => resolveNext = r);
            }
        },
        push(value) {
            queue.push(value);
            if (resolveNext) {
                resolveNext();
                resolveNext = null;
            }
        }
    };
}

// Usage:
const asyncIterable = createAsyncIterable();

// Question: 37. Binary heap implementation
```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this._bubbleUp(this.heap.length - 1);
    }

    extract() {
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._sinkDown(0);
        return min;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] <= this.heap[index]) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
            index = parent;
        }
    }
}
