// Select all gallery images and modal elements
const galleryImages = document.querySelectorAll('.gallery-img');
const modalOverlay = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Variable to keep track of the current image index
let currentImageIndex = -1;

// Open the modal with the clicked image
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        modalOverlay.style.display = 'flex'; // Show modal
        modalImage.src = img.src; // Set the image source to the clicked image
    });
});

// Close the modal
closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none'; // Hide modal
});

// Navigate to the previous image
prevBtn.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        modalImage.src = galleryImages[currentImageIndex].src; // Update image source
    }
});

// Navigate to the next image
nextBtn.addEventListener('click', () => {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
        modalImage.src = galleryImages[currentImageIndex].src; // Update image source
    }
});

// Close modal when clicking outside the modal content
modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
        modalOverlay.style.display = 'none'; // Hide modal if clicked outside content
    }
});


const backToTopBtn = document.getElementById('backToTop');

// Show/hide on scroll
window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

document.querySelectorAll('.faq-toggle').forEach((toggleBtn) => {
    toggleBtn.addEventListener('click', function () {
        const faqItem = this.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        const isOpen = faqItem.classList.contains('open');

        // Close all others if you want accordion behavior (optional)
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('open');
            item.querySelector('.faq-answer').style.maxHeight = null;
            item.querySelector('.faq-toggle').textContent = '+';
        });

        if (!isOpen) {
            faqItem.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + "px";
            this.textContent = '−'; // Change to minus when open
        } else {
            faqItem.classList.remove('open');
            answer.style.maxHeight = null;
            this.textContent = '+'; // Revert to plus when closed
        }
    });
});



// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
