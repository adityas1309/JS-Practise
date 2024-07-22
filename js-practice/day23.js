
// Question: 59. Lazy image loader
```javascript
class LazyImageLoader {
    constructor(selector = '[data-src]') {
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    this.observer.unobserve(img);
                }
            });
        });
        document.querySelectorAll(selector).forEach(img => 
            this.observer.observe(img)
        );
    }
}

// Question: 58. Two-way data binding
```javascript
function createBinder(initial = {}) {
    const proxy = new Proxy(initial, {
        set(target, prop, value) {
            target[prop] = value;
            document.querySelectorAll(`[data-bind="${prop}"]`).forEach(el => {
                el.value = value;
            });
            return true;
        }
    });

    document.querySelectorAll('[data-bind]').forEach(el => {
        el.addEventListener('input', e => {
            proxy[e.target.dataset.bind] = e.target.value;
        });
    });

    return proxy;
}
