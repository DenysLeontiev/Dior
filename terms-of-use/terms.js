document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = item.querySelector('.accordion-content');
            const iconUp = header.querySelector('.icon-up');
            const iconDown = header.querySelector('.icon-down');

            // Toggle active state
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                content.style.maxHeight = null;
                iconUp.style.display = 'none';
                iconDown.style.display = 'block';
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
                iconUp.style.display = 'block';
                iconDown.style.display = 'none';
            }
        });
    });

    // Initialize the open accordions on load
    document.querySelectorAll('.accordion-item.active').forEach(item => {
        const content = item.querySelector('.accordion-content');
        if (content) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
