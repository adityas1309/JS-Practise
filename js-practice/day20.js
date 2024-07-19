
// Question: 44. Mixin pattern implementation
```javascript
const LoggerMixin = Base => class extends Base {
    log(message) {
        console.log(`[${new Date().toISOString()}] ${message}`);
    }
};

class Service {
    constructor() {
        LoggerMixin(this.constructor);
    }
}

// Usage:
const service = new Service();
service.log('Initialized'); // Timestamped message
