
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
