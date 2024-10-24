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


// dropdown
function toggleParagraph(arrow) {
    const paragraph = arrow.nextElementSibling;
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}

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

// Fungsi untuk memeriksa setiap kartu
function checkCards() {
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('visible'); // Tambahkan kelas visible jika terlihat
        }
    });
}

// Cek kartu saat scroll
window.addEventListener('scroll', checkCards);

// Panggil fungsi untuk memeriksa saat halaman pertama kali dimuat
checkCards();


