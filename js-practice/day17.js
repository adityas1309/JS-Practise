
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
