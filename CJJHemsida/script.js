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

// Den här koden hanterar menyns öppning och stängning via hamburgarikonen
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});