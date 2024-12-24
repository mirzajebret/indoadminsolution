document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    Promise.all([
        fetch('header.html').then(response => response.text()),
        fetch('footer.html').then(response => response.text())
    ]).then(([headerData, footerData]) => {
        document.getElementById('header').innerHTML = headerData;
        document.getElementById('footer').innerHTML = footerData;

        const menuButton = document.querySelector('.menu-button');
        const navLinks = document.querySelector('.nav-links');

        if (menuButton && navLinks) {
            menuButton.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
        }

        startTypingAnimation();
    }).catch(error => console.error('Error loading header or footer:', error));

    startImageCarousel();
});

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
            setTimeout(() => isDeleting = true, 1000); 
        } else if (isDeleting && textIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length; 
        }

        const typingSpeed = isDeleting ? 30 : 100; 
        setTimeout(type, typingSpeed);
    }

    type();
}

function startImageCarousel() {
    const images = document.querySelectorAll('.hero-image img');
    let currentIndex = 0;

    // Function to change the image
    function changeImage() {
        images.forEach((img, index) => {
            img.style.opacity = '0'; 
        });

        currentIndex = (currentIndex + 1) % images.length; 
        images[currentIndex].style.opacity = '1'; 
    }

    setInterval(changeImage, 3000); 
    changeImage(); 
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

function checkCards() {
    cards.forEach(card => {
        if (isElementInViewport(card)) {
            card.classList.add('visible'); 
        }
    });
}

window.addEventListener('scroll', checkCards);

checkCards();

const carouselInner = document.querySelector('.carousel-inner');
const carouselCards = document.querySelectorAll('.carousel-card');
const totalCards = carouselCards.length;

let currentIndex = 0;
let cardsToShow = 3; 
let intervalId; 

function updateCardsToShow() {
    const width = window.innerWidth;
    if (width < 769) {
        cardsToShow = 1; // Show 1 card on small screens
    } else if (width < 1025) {
        cardsToShow = 2; // Show 2 cards on medium screens
    } else {
        cardsToShow = 3; // Show 3 cards on large screens
    }
}

function showNext() {
    currentIndex = (currentIndex + cardsToShow) % totalCards; 

    const cardWidth = document.querySelector('.carousel-card').offsetWidth;
    const margin = 20; 

    const totalVisibleWidth = (cardWidth + margin) * cardsToShow;
    const translateX = -((currentIndex * (cardWidth + margin)) + (totalVisibleWidth / 2) - (cardWidth / 2));

    carouselInner.style.transform = `translateX(${translateX}px)`;
}

function handleResize() {
    updateCardsToShow();
    showNext(); 
}

function startCarousel() {
    intervalId = setInterval(showNext, 2500); 
}

function pauseCarousel() {
    clearInterval(intervalId);
}

const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', pauseCarousel);
carousel.addEventListener('mouseleave', startCarousel);

window.addEventListener('resize', handleResize);

updateCardsToShow();
startCarousel();

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    
    let index = 0; 
    const totalCards = document.querySelectorAll('.carousel-card').length;
    const cardWidth = document.querySelector('.carousel-card').offsetWidth + 20; 

    function goToPrev() {
        if (index > 0) {
            index--;
        } else {
            index = totalCards - 1; 
        }
        updateCarousel();
    }

    function goToNext() {
        if (index < totalCards - 1) {
            index++;
        } else {
            index = 0; 
        }
        updateCarousel();
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    prevButton.addEventListener('click', goToPrev);
    nextButton.addEventListener('click', goToNext);
});

document.addEventListener('DOMContentLoaded', function () {
    const smallCarouselInner = document.querySelector('.small-carousel-inner');
    const smallCarouselCards = document.querySelectorAll('.small-carousel-card');
    const totalSmallCards = smallCarouselCards.length;

    let smallCurrentIndex = 0;
    let smallCardsToShow = 2;

    function updateSmallCardsToShow() {
        const width = window.innerWidth;
        if (width < 768) {
            smallCardsToShow = 2;
        } else {
            smallCardsToShow = 4;
        }
    }

    function showNextSmall() {
        smallCurrentIndex = (smallCurrentIndex + smallCardsToShow) % totalSmallCards;
        updateSmallCarousel();
    }

    function showPrevSmall() {
        smallCurrentIndex = (smallCurrentIndex - smallCardsToShow + totalSmallCards) % totalSmallCards;
        updateSmallCarousel();
    }

    function updateSmallCarousel() {
        const cardWidth = document.querySelector('.small-carousel-card').offsetWidth;
        const translateX = -smallCurrentIndex * cardWidth;
        smallCarouselInner.style.transform = `translateX(${translateX}px)`;
    }

    document.querySelector('.small-carousel-next').addEventListener('click', showNextSmall);
    document.querySelector('.small-carousel-prev').addEventListener('click', showPrevSmall);

    window.addEventListener('resize', () => {
        updateSmallCardsToShow();
        updateSmallCarousel();
    });

    updateSmallCardsToShow();
    setInterval(showNextSmall, 3500);
});
