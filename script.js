document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    Promise.all([
        fetch('header.html').then(response => response.text()),
        fetch('footer.html').then(response => response.text())
    ]).then(([headerData, footerData]) => {
        document.getElementById('header').innerHTML = headerData;
        document.getElementById('footer').innerHTML = footerData;

        // Initialize menu button functionality
        const menuButton = document.querySelector('.menu-button');
        const navLinks = document.querySelector('.nav-links');

        if (menuButton && navLinks) {
            menuButton.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }

        // Start typing animation
        startTypingAnimation();
    }).catch(error => console.error('Error loading header or footer:', error));
});

// Typing animation function
function startTypingAnimation() {
    const texts = [
        "legalitas",
        "pembuatan website",
        "kenotariatan",
        "pertanahan"
    ];

    let index = 0;
    let textIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
        const displayText = texts[index];

        if (isDeleting) {
            currentText = displayText.substring(0, textIndex - 1);
            textIndex--;
        } else {
            currentText = displayText.substring(0, textIndex + 1);
            textIndex++;
        }

        document.getElementById("animated-text").innerHTML = `Solusi cepat untuk urusan<br> ${currentText} <br> usaha Anda`;

        if (!isDeleting && textIndex === displayText.length) {
            setTimeout(() => isDeleting = true, 1000); // Pause at the end
        } else if (isDeleting && textIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length; // Move to next text
        }

        const typingSpeed = isDeleting ? 30 : 100; // Speed of typing
        setTimeout(type, typingSpeed);
    }

    // Start the typing animation
    type();
}

// Dropdown function
function toggleParagraph(arrow) {
    const paragraph = arrow.nextElementSibling;
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

// Check if an element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ANIMATE ON SCROLL
const cards = document.querySelectorAll('.card');

// Function to check each card
function checkCards() {
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('visible'); // Add visible class if in viewport
        }
    });
}

// Check cards on scroll
window.addEventListener('scroll', checkCards);

// Call function to check on initial page load
checkCards();

// Carousel functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselCards = document.querySelectorAll('.carousel-card');
const totalCards = carouselCards.length;

let currentIndex = 0;
let cardsToShow = 3; // Default untuk desktop

// Fungsi untuk mengatur jumlah card yang ditampilkan
function updateCardsToShow() {
    const width = window.innerWidth;
    if (width < 769) {
        cardsToShow = 1; // Tampilkan 1 card pada layar kecil
    } else if (width < 1025) {
        cardsToShow = 2; // Tampilkan 2 card pada layar menengah
    } else {
        cardsToShow = 3; // Tampilkan 3 card pada layar besar
    }
}

// Fungsi untuk menggeser carousel
function showNext() {
    const offset = (currentIndex + cardsToShow) % totalCards; // Hitung index berikutnya
    currentIndex = offset;

    const cardWidth = 250; // Lebar card (sesuaikan jika berbeda)
    const margin = 20; // Margin antar card
    const translateX = -currentIndex * (cardWidth + margin); // Hitung posisi
    carouselInner.style.transform = `translateX(${translateX}px)`;
}

// Fungsi untuk mengatur ulang carousel saat ukuran jendela berubah
function handleResize() {
    updateCardsToShow();
    showNext(); // Panggil showNext untuk menyesuaikan posisi saat resize
}

// Set interval untuk otomatis geser
setInterval(showNext, 3000); // Ganti setiap 3 detik

// Event listener untuk resize
window.addEventListener('resize', handleResize);

// Inisialisasi
updateCardsToShow();
