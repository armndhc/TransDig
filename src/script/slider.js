
document.addEventListener('DOMContentLoaded', function () {
    const dots = document.querySelectorAll('#slider-dots li');
    const sliderList = document.querySelector('.slider .list');
    const items = sliderList.querySelectorAll('.item');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let current = 0;
    const total = items.length;

    function updateDots(idx) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
    }

    function goToSlide(idx) {
        current = idx;
        sliderList.style.left = (-100 * current) + '%';
        updateDots(current);
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            goToSlide(idx);
        });
    });

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % total;
        goToSlide(current);
    });

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + total) % total;
        goToSlide(current);
    });

    setInterval(() => {
        nextBtn.click();
    }, 5000); // Cambio automático cada 5 segundos
    
    // Nuevo código para cambiar el texto descriptivo conforme a la imagen mostrada
    function nextSlide() {
    document.getElementById("texto-descriptivo").innerHTML = nuevoTexto;
    }
});
