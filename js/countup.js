(function () {
    const els = document.querySelectorAll('.stat-number');
    if (!els.length) return;

    function animate(el, end, duration = 1200) {
        const start = 0;
        const range = end - start;
        const startTime = performance.now();
        function frame(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(start + range * progress);
            el.textContent = value.toLocaleString();
            if (progress < 1) requestAnimationFrame(frame);
            else el.textContent = end.toLocaleString();
        }
        requestAnimationFrame(frame);
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const to = parseInt(el.getAttribute('data-target'), 10) || 0;
                animate(el, to, 1400);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    els.forEach(el => observer.observe(el));
})();
