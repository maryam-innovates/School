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


  // Toggle the accessibility panel visibility
  function togglePanel() {
    const panel = document.getElementById('accessibility-panel');
    if (panel.style.right === "0px") {
      panel.style.right = "-300px";
    } else {
      panel.style.right = "0px";
    }
  }

  // Font Size Control
  function changeFontSize(size) {
    const body = document.body;
    body.classList.remove("font-small", "font-medium", "font-large");

    if (size === "small") {
      body.classList.add("font-small");
    } else if (size === "medium") {
      body.classList.add("font-medium");
    } else if (size === "large") {
      body.classList.add("font-large");
    }
  }

  // Font Family Control
  function changeFontFamily(font) {
    document.body.style.fontFamily = font;
  }

  // Language Change
  const translations = {
    en: {
      heading: "Welcome to GGHS Tahir Model",
      description: "This website was created to help students and celebrate our school.",
    },
    ur: {
      heading: "تخیر ماڈل گرلز ہائی سکول میں خوش آمدید",
      description: "یہ ویب سائٹ طلباء کی مدد اور ہمارے اسکول کی تعریف کے لیے بنائی گئی ہے۔",
    },
  };

  function setLanguage(lang) {
    document.getElementById('heading').textContent = translations[lang].heading;
    document.getElementById('description').textContent = translations[lang].description;
  }

  // Dark Mode Toggle
  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }



