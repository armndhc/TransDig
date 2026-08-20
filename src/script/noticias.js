let currentIndex = 0;
        const itemsPerPage = window.innerWidth <= 768 ? 1 : 3;
        const carousel = document.getElementById('newsCarousel');
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function updateCarousel() {
            const offset = -currentIndex * (100 / itemsPerPage);
            carousel.style.transform = `translateX(${offset}%)`;
            items.forEach((item, index) => {
                item.classList.toggle('active', index >= currentIndex && index < currentIndex + itemsPerPage);
            });
        }

        function moveCarousel(direction) {
            currentIndex += direction * itemsPerPage;
            if (currentIndex < 0) {
                currentIndex = totalItems - itemsPerPage;
            } else if (currentIndex >= totalItems) {
                currentIndex = 0;
            }
            updateCarousel();
        }

        window.addEventListener('resize', () => {
            const newItemsPerPage = window.innerWidth <= 768 ? 1 : 3;
            if (newItemsPerPage !== itemsPerPage) {
                currentIndex = 0;
                updateCarousel();
            }
        });

        updateCarousel();