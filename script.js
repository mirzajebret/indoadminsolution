document.addEventListener('DOMContentLoaded', function () {
    // Load header and footer
    Promise.all([
        fetch('header.html').then(response => response.text()),
        fetch('footer.html').then(response => response.text())
    ]).then(([headerData, footerData]) => {
        // Insert header and footer into the DOM
        document.getElementById('header').innerHTML = headerData;
        document.getElementById('footer').innerHTML = footerData;

        // Mobile menu toggle
        const menuButton = document.querySelector('.menu-button');
        const navLinks = document.querySelector('.nav-links');

        if (menuButton && navLinks) {
            menuButton.addEventListener('click', function () {
                navLinks.classList.toggle('active');
            });
        }

        // Dropdown functionality
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const dropbtn = dropdown.querySelector('.dropbtn');
            const dropdownContent = dropdown.querySelector('.dropdown-content');
    
            if (dropbtn && dropdownContent) {
                dropbtn.addEventListener('click', function (event) {
                    event.stopPropagation(); // Prevent the click from bubbling up
    
                    // Close all other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.querySelector('.dropdown-content').classList.remove('active');
                        }
                    });
    
                    // Toggle the clicked dropdown
                    dropdownContent.classList.toggle('active');
                });
            }
        });
    
        // Close dropdowns when clicking outside
        document.addEventListener('click', function (event) {
            dropdowns.forEach(dropdown => {
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                if (dropdownContent && !event.target.closest('.dropdown')) {
                    dropdownContent.classList.remove('active');
                }
            });
        });

    }).catch(error => console.error('Error loading header or footer:', error));

    // Start image carousel (if applicable)
    startImageCarousel();
});

// Image carousel function
function startImageCarousel() {
    const images = document.querySelectorAll('.hero-image img');
    let currentIndex = 0;

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

// Check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate on scroll
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

// Carousel functionality
const carouselInner = document.querySelector('.carousel-inner');
const carouselCards = document.querySelectorAll('.carousel-card');
const totalCards = carouselCards.length;

let currentIndex = 0;
let cardsToShow = 1;

function updateCardsToShow() {
    const width = window.innerWidth;
    if (width < 769) {
        cardsToShow = 1;
    } else if (width < 1025) {
        cardsToShow = 2;
    } else {
        cardsToShow = 1;
    }
}

function showNext() {
    carouselCards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentIndex) {
            card.classList.add('active');
        }
    });

    currentIndex = (currentIndex + 1) % totalCards;
}

function handleResize() {
    updateCardsToShow();
    showNext();
}

function startCarousel() {
    intervalId = setInterval(showNext, 2500);
    showNext();
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

// Small carousel functionality
function initSmallCarousel(containerClass) {
    const smallCarouselInner = document.querySelector(`.${containerClass} .small-carousel-inner`);
    const smallCarouselCards = document.querySelectorAll(`.${containerClass} .small-carousel-card`);
    const totalSmallCards = smallCarouselCards.length;

    let smallCurrentIndex = 0;
    let smallCardsToShow = 1;

    function updateSmallCardsToShow() {
        const width = window.innerWidth;
        if (width < 768) {
            smallCardsToShow = 1;
        } else if (width < 1025) {
            smallCardsToShow = 2;
        } else {
            smallCardsToShow = 1;
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
        const cardWidth = document.querySelector(`.${containerClass} .small-carousel-card`).offsetWidth;
        const translateX = -smallCurrentIndex * cardWidth;
        smallCarouselInner.style.transform = `translateX(${translateX}px)`;
    }

    document.querySelector(`.${containerClass} .small-carousel-next`).addEventListener('click', showNextSmall);
    document.querySelector(`.${containerClass} .small-carousel-prev`).addEventListener('click', showPrevSmall);

    window.addEventListener('resize', () => {
        updateSmallCardsToShow();
        updateSmallCarousel();
    });

    updateSmallCardsToShow();
    updateSmallCarousel();
    setInterval(showNextSmall, 3500);
}

initSmallCarousel('carousel-pertanahan');
initSmallCarousel('carousel-kenotariatan');

// Number animation
function animateNumber(element) {
    const target = +element.getAttribute('data-target');
    const increment = target / 200;

    function updateNumber() {
        const current = +element.innerText;
        if (current < target) {
            element.innerText = Math.ceil(current + increment);
            requestAnimationFrame(updateNumber);
        } else {
            element.innerText = target;
        }
    }

    updateNumber();
}

function checkNumberAnimation() {
    const numberElement = document.querySelector('.numberof');
    if (isElementInViewport(numberElement)) {
        animateNumber(numberElement);
        window.removeEventListener('scroll', checkNumberAnimation);
    }
}

function updateDailyNumber() {
    const numberElement = document.querySelector('.numberof');
    const currentNumber = +numberElement.getAttribute('data-target');
    const randomIncrement = Math.floor(Math.random() * 13) + 3;
    const newNumber = currentNumber + randomIncrement;
    numberElement.setAttribute('data-target', newNumber);
    localStorage.setItem('dailyNumber', newNumber);
    localStorage.setItem('lastUpdate', new Date().toISOString());
}

function checkDailyUpdate() {
    const lastUpdate = localStorage.getItem('lastUpdate');
    if (!lastUpdate || new Date(lastUpdate).getDate() !== new Date().getDate()) {
        updateDailyNumber();
    }
}

window.addEventListener('scroll', checkNumberAnimation);
checkNumberAnimation();
checkDailyUpdate();