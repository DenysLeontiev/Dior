document.addEventListener('DOMContentLoaded', () => {
    // Single delete buttons
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const item = e.currentTarget.closest('.notification-item');
            // Animate out before removing
            item.style.opacity = '0';
            setTimeout(() => {
                item.remove();
            }, 300);
        });
    });

    // Delete all button
    const deleteAllBtn = document.querySelector('.delete-all-btn');
    if (deleteAllBtn) {
        deleteAllBtn.addEventListener('click', () => {
            const list = document.querySelector('.notifications-list');
            const items = list.querySelectorAll('.notification-item');

            items.forEach((item, index) => {
                // Stagger the animation
                setTimeout(() => {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.remove();
                    }, 300);
                }, index * 100);
            });
        });
    }
});
