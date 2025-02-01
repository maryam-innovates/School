// JavaScript for FAQ Toggle functionality
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const answer = toggle.closest('.faq-item').querySelector('.faq-answer');
        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";  // Show answer
            toggle.textContent = "−";  // Change to minus
        } else {
            answer.style.display = "none";  // Hide answer
            toggle.textContent = "+";  // Change to plus
        }
    });
});

// Get all the necessary DOM elements
const galleryImages = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeButton = document.querySelector('.close-btn');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

// Open the modal when an image is clicked
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = image.src;
        currentIndex = index;
    });
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Navigate to the previous image
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
});

// Navigate to the next image
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    modalImage.src = galleryImages[currentIndex].src;
});

// Function to animate numbers
function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 100); // Dynamic increment
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        element.textContent = current;
    }, 20); // Smooth animation speed
}

// Initializing counters
window.onload = function () {
    animateCounter(document.getElementById('grade-8'), 255);
    animateCounter(document.getElementById('grade-9'), 317);
    animateCounter(document.getElementById('grade-10'), 184);
    animateCounter(document.getElementById('grand-total'), 756);
};

// Typewriter Effect
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter-text");
    const text = "Our Students Enrollment 2024";
    textElement.innerHTML = ""; // Clear initial text
    let index = 0;
    const speed = 100; // Typing speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            textElement.innerHTML = text.replace(
                "2024",
                `<span class="highlight">2024</span>`
            );
        }
    }

    typeWriter();
});

answer.classList.toggle('visible');
toggle.textContent = answer.classList.contains('visible') ? "−" : "+";
