(function () {
    const toggle = document.querySelector('.nav__toggle');
    const menu = document.querySelector('.nav__menu');
    if (!toggle || !menu) return;

    function setOpen(open) {
        menu.classList.toggle('open', open);
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(!!open));
    }

    toggle.addEventListener('click', function (e) {
        e.stopPropagation();
        setOpen(!menu.classList.contains('open'));
    });

    // Cerrar al hacer click fuera del menú
    document.addEventListener('click', function (e) {
        if (!menu.classList.contains('open')) return;
        if (!menu.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('open')) setOpen(false);
    });

    // Cerrar al cambiar a ancho de escritorio
    window.addEventListener('resize', function () {
        if (window.innerWidth > 880 && menu.classList.contains('open')) setOpen(false);
    });
})();
