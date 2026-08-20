document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;
    let interval;
    
    function showItem(index) {
        const offset = index * 33.333; // Each item is 33.333% wide
        carousel.style.transform = `translateX(-${offset}%)`;
        items.forEach((item, i) => {
            const video = item.querySelector('video');
            if (i === index) {
                video.play();
                video.loop = true;
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
        interval = setInterval(nextItem, 30000); // 30 seconds
    }

    nextButton.addEventListener('click', () => {
        nextItem();
        startAutoPlay();
    });

    prevButton.addEventListener('click', () => {
        prevItem();
        startAutoPlay();
    });

    items.forEach(item => {
        const video = item.querySelector('video');
        video.addEventListener('ended', () => {
            nextItem();
            startAutoPlay();
        });
    });

    showItem(currentIndex);
    startAutoPlay();

    
});