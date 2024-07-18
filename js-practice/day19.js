
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
