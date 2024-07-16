
// Question: 27. Graph BFS traversal
```javascript
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    const result = [];
    
    while (queue.length) {
        const node = queue.shift();
        if (!visited.has(node)) {
            visited.add(node);
            result.push(node);
            queue.push(...graph[node].filter(n => !visited.has(n)));
        }
    }
    return result;
}

// Adjacency list format:
const graph = { A: ['B', 'C'], B: ['D'], C: [], D: [] };

// Question: 28. Async middleware pipeline
```javascript
async function pipeline(middlewares, initial) {
    return middlewares.reduce(
        (acc, middleware) => acc.then(val => middleware(val)),
        Promise.resolve(initial)
    );
}

// Usage:
const middlewares = [
    val => val * 2,
    val => new Promise(r => setTimeout(() => r(val + 3), 100))
];

// Question: 26. Circular buffer implementation
```javascript
class CircularBuffer {
    constructor(capacity) {
        this.buffer = new Array(capacity);
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    push(item) {
        this.buffer[this.tail] = item;
        this.tail = (this.tail + 1) % this.buffer.length;
        this.size = Math.min(this.size + 1, this.buffer.length);
    }

    pop() {
        if (this.size === 0) return null;
        const item = this.buffer[this.head];
        this.head = (this.head + 1) % this.buffer.length;
        this.size--;
        return item;
    }
}

// Question: 25. Trie data structure implementation
```javascript
class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEnd = true;
    }
}

// Question: 24. Dependency injection container
```javascript
class Container {
    constructor() {
        this.services = new Map();
    }
    
    register(name, factory) {
        this.services.set(name, { factory, instance: null });
    }
    
    get(name) {
        const service = this.services.get(name);
        if (!service.instance) {
            service.instance = service.factory(this);
        }
        return service.instance;
    }
}

// Usage:
const container = new Container();
container.register('api', c => new ApiService());
