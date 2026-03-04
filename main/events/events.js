document.addEventListener('DOMContentLoaded', () => {
    // Basic calendar day selection logic
    const calItems = document.querySelectorAll('.cal-item');

    calItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent clicking disabled dates
            if (item.classList.contains('disabled')) return;

            // Remove active class from all
            calItems.forEach(i => i.classList.remove('active'));

            // Add to clicked
            item.classList.add('active');

            // Here you would normally fetch new event data for the selected date
            // For now, it just simulates the UI interaction
        });
    });

    // Enroll button click simulation
    const enrollBtn = document.querySelector('.enroll-btn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', () => {
            enrollBtn.textContent = 'ENROLLED';
            enrollBtn.style.backgroundColor = '#C4759B'; // Pink
            enrollBtn.style.color = '#fff';
            enrollBtn.style.pointerEvents = 'none'; // Disable further clicks
        });
    }
});
