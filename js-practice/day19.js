
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
