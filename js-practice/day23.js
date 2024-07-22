
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
