
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

// Question: 45. Validation framework
```javascript
class Validator {
    constructor() {
        this.rules = [];
    }

    add(fn, message) {
        this.rules.push({ fn, message });
        return this;
    }

    validate(value) {
        return this.rules
            .filter(rule => !rule.fn(value))
            .map(rule => rule.message);
    }

    static required() {
        return value => !!value;
    }
}

// Usage:
const emailValidator = new Validator()
    .add(Validator.required(), 'Email is required')
    .add(v => v.includes('@'), 'Invalid email');
