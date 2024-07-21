
// Question: 53. WebSocket reconnection manager
```javascript
class WSReconnect {
    constructor(url, { maxRetries = 5, backoff = 1000 } = {}) {
        this.url = url;
        this.retries = 0;
        this.backoff = backoff;
        this.maxRetries = maxRetries;
        this.connect();
    }

    connect() {
        this.ws = new WebSocket(this.url);
        this.ws.onclose = () => {
            if (this.retries++ < this.maxRetries) {
                setTimeout(() => this.connect(), this.backoff * this.retries);
            }
        };
    }
}

// Question: 52. Tree data structure implementation
```javascript
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    traverseDFS(cb) {
        cb(this.value);
        this.children.forEach(child => child.traverseDFS(cb));
    }

    traverseBFS(cb) {
        const queue = [this];
        while (queue.length) {
            const node = queue.shift();
            cb(node.value);
            queue.push(...node.children);
        }
    }
}
