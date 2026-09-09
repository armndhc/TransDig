document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carousel-container-pc');
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;
    let interval;

    // Refuerza los atributos anti-fullscreen por si el HTML los pierde
    items.forEach(item => {
        const video = item.querySelector('video');
        if (video) {
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.setAttribute('disablepictureinpicture', '');
            video.muted = true; // requerido para autoplay en iOS
        }
    });

    // Ajusta el alto del contenedor a la proporción REAL del video que
    // se está mostrando (cada video puede tener dimensiones distintas).
    function updateContainerRatio(item) {
        const video = item.querySelector('video');
        if (!video) return;

        if (video.videoWidth && video.videoHeight) {
            container.style.setProperty('--video-ratio', `${video.videoWidth} / ${video.videoHeight}`);
        } else {
            video.addEventListener('loadedmetadata', () => {
                container.style.setProperty('--video-ratio', `${video.videoWidth} / ${video.videoHeight}`);
            }, { once: true });
        }
    }

    function showItem(index) {
        const offset = index * 100;
        carousel.style.transform = `translateX(-${offset}%)`;

        items.forEach((item, i) => {
            const video = item.querySelector('video');
            if (!video) return;

            if (i === index) {
                video.play().catch(() => {});
                video.loop = true;
                updateContainerRatio(item);
            } else {
                video.pause();
                video.currentTime = 0;
                video.loop = false;
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    function startAutoPlay() {
        clearInterval(interval);
        interval = setInterval(nextItem, 30000);
    }

    window.addEventListener('resize', () => {
        showItem(currentIndex);
    });

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextItem();
            startAutoPlay();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevItem();
            startAutoPlay();
        });
    }

    items.forEach(item => {
        const video = item.querySelector('video');
        if (video) {
            video.addEventListener('ended', () => {
                nextItem();
                startAutoPlay();
            });
        }
    });

    showItem(currentIndex);
    startAutoPlay();
});