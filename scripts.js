document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    const video = this.querySelector('.flip-card-back video');
    if (video) {
      video.play();
    }
  });
});

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

// Smooth scroll to top
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      const isOpen = faqItem.classList.toggle('open');

      // Toggle +/− sign
      button.textContent = isOpen ? '−' : '+';
    });
  });

