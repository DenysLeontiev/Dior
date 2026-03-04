document.addEventListener('DOMContentLoaded', () => {
    const fileUpload = document.getElementById('file-upload');
    const avatarContainer = document.querySelector('.avatar-container');
    const avatarPlaceholder = document.querySelector('.avatar-placeholder');

    fileUpload.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                // Remove placeholder content
                avatarPlaceholder.innerHTML = '';

                // Add new image
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';

                avatarPlaceholder.appendChild(img);
            };

            reader.readAsDataURL(file);
        }
    });
});
