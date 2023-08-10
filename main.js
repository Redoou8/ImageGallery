const images = document.querySelectorAll('.container img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            const overlayImage = document.createElement('img');
            overlayImage.src = image.src;
            overlayImage.classList.add('overlay-image');

            overlay.appendChild(overlayImage);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });
    });