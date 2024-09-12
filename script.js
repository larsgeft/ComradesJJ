const navLinks = document.getElementById('nav-links');

// Hämta nödvändiga element
const formLightbox = document.getElementById('formLightbox');
const openFormBtn = document.getElementById('openFormBtn');
const closeBtn = document.querySelector('.close-btn');

// Öppna lightbox-formuläret när knappen trycks
openFormBtn.addEventListener('click', () => {
    formLightbox.style.display = 'block';
});

// Stäng lightboxen när användaren klickar på krysset
closeBtn.addEventListener('click', () => {
    formLightbox.style.display = 'none';
});

// Stäng lightboxen om användaren klickar utanför formuläret
window.addEventListener('click', (event) => {
    if (event.target === formLightbox) {
        formLightbox.style.display = 'none';
    }
});

    // Function to check if element is visible
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll and apply the 'show' class
    function handleScroll() {
        const flexBoxes = document.querySelectorAll('.teachersflexbox');
        flexBoxes.forEach(box => {
            if (isElementInViewport(box)) {
                box.classList.add('show');
            }
        });
    }

    // Run the scroll handler once on page load and on scroll
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
