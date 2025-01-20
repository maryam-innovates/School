// Optional: For image navigation or other functionalities
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.gallery-images img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            // Lightbox or modal can be added here for full-size images
            alert('Image clicked: ' + img.alt);
        });
    });
});
