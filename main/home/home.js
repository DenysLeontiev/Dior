document.addEventListener('DOMContentLoaded', () => {
    // Logic for collapsing sections
    const collapseBtns = document.querySelectorAll('.collapse-btn');

    collapseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.currentTarget.closest('.carousel-section');
            const carousel = section.querySelector('.cards-carousel');

            if (carousel.style.display === 'none') {
                carousel.style.display = 'block';
                e.currentTarget.style.transform = 'rotate(0deg)';
            } else {
                carousel.style.display = 'none';
                e.currentTarget.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Basic logic for carousel dots in hero
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all
            dots.forEach(d => d.classList.remove('active'));
            // Add to clicked
            dot.classList.add('active');

            // In a full implementation, this would shift the slide container
            console.log(`Switched to slide ${index + 1}`);
        });
    });
});
