document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('#slider-dots li');
    const sliderEl = document.querySelector('.slider');
    const sliderList = document.querySelector('.slider .list');

    // Si el slider no existe en esta página, no hacemos nada
    if (!sliderList || !sliderEl) return;

    const items = sliderList.querySelectorAll('.item');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let current = 0;
    const total = items.length;

    // Le dice al CSS cuántas fotos hay, para que .list y cada .item
    // puedan calcular su ancho correctamente (ver slider.css).
    sliderList.style.setProperty('--items', total);

    // Ajusta la altura del contenedor a la proporción real de la foto
    // activa, para que el slider se "acople" a la imagen sin huecos.
    function updateSliderHeight() {
        const activeImg = items[current] ? items[current].querySelector('img') : null;
        if (!activeImg) return;

        const applyHeight = () => {
            if (!activeImg.naturalWidth) return;
            const ratio = activeImg.naturalHeight / activeImg.naturalWidth;
            sliderEl.style.height = (sliderEl.offsetWidth * ratio) + 'px';
        };

        if (activeImg.complete) {
            applyHeight();
        } else {
            activeImg.addEventListener('load', applyHeight, { once: true });
        }
    }

    function updateDots(idx) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
    }

    function goToSlide(idx) {
        current = idx;
        sliderList.style.left = (-100 * current) + '%';
        updateDots(current);
        updateSliderHeight();
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            goToSlide(idx);
        });
    });

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            current = (current + 1) % total;
            goToSlide(current);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            current = (current - 1 + total) % total;
            goToSlide(current);
        });
    }

    // Cambio automático cada 5 segundos
    let autoplay = setInterval(() => {
        current = (current + 1) % total;
        goToSlide(current);
    }, 5000);

    // Pausa el autoplay si el usuario interactúa manualmente,
    // para que no "pelee" con sus clics
    function resetAutoplay() {
        clearInterval(autoplay);
        autoplay = setInterval(() => {
            current = (current + 1) % total;
            goToSlide(current);
        }, 5000);
    }

    [prevBtn, nextBtn, ...dots].forEach(el => {
        if (el) el.addEventListener('click', resetAutoplay);
    });

    // Altura inicial y recálculo al cambiar el tamaño de la ventana
    updateSliderHeight();
    window.addEventListener('resize', updateSliderHeight);
});