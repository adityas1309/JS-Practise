
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
