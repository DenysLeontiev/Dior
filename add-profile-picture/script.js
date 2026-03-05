document.addEventListener('DOMContentLoaded', () => {
    const fileUpload = document.getElementById('file-upload');
    const avatarContainer = document.getElementById('avatar-container');
    const avatarPlaceholder = document.getElementById('avatar-placeholder');
    const selectBtn = document.getElementById('select-btn');
    const laterBtn = document.getElementById('later-btn');

    // Open file picker via button or avatar click / keyboard
    const openFilePicker = () => fileUpload.click();

    selectBtn.addEventListener('click', openFilePicker);
    avatarContainer.addEventListener('click', openFilePicker);
    avatarContainer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openFilePicker();
        }
    });

    // Navigate to home on "Later"
    laterBtn.addEventListener('click', () => {
        window.location.href = '../main/home/index.html';
    });

    // Preview selected image inside the avatar circle
    fileUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            avatarPlaceholder.innerHTML = '';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Profile picture preview';
            img.className = 'avatar-preview';

            avatarPlaceholder.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});
