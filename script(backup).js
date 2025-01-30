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

        // Close dropdowns and mobile menu when clicking outside
        document.addEventListener('click', function (event) {
            // Close mobile menu if clicked outside
            if (navLinks && !event.target.closest('.nav')) {
                navLinks.classList.remove('active');
            }

            // Close dropdowns if clicked outside
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


document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        if (nav && navLinks && !nav.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

});

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
let cardsToShow = 1; // Show 1 card on wide view

function updateCardsToShow() {
    const width = window.innerWidth;
    if (width < 769) {
        cardsToShow = 1; // Show 1 card on small screens
    } else if (width < 1025) {
        cardsToShow = 2; // Show 2 cards on medium screens
    } else {
        cardsToShow = 1; // Show 1 card on large screens
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
    showNext(); // Initial call to show the first card
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
    // Small Carousel 1
    const smallCarouselInner1 = document.querySelector('.small-carousel-container:nth-of-type(1) .small-carousel-inner');
    const smallCarouselCards1 = document.querySelectorAll('.small-carousel-container:nth-of-type(1) .small-carousel-card');
    const totalSmallCards1 = smallCarouselCards1.length;

    let smallCurrentIndex1 = 0;
    let smallCardsToShow1 = 1;

    function updateSmallCardsToShow1() {
        const width = window.innerWidth;
        if (width < 768) {
            smallCardsToShow1 = 1;
        } else if (width < 1025) {
            smallCardsToShow1 = 2;
        } else {
            smallCardsToShow1 = 1;
        }
    }

    function showNextSmall1() {
        smallCurrentIndex1 = (smallCurrentIndex1 + smallCardsToShow1) % totalSmallCards1;
        updateSmallCarousel1();
    }

    function showPrevSmall1() {
        smallCurrentIndex1 = (smallCurrentIndex1 - smallCardsToShow1 + totalSmallCards1) % totalSmallCards1;
        updateSmallCarousel1();
    }

    function updateSmallCarousel1() {
        const cardWidth = document.querySelector('.small-carousel-container:nth-of-type(1) .small-carousel-card').offsetWidth;
        const translateX = -smallCurrentIndex1 * cardWidth;
        smallCarouselInner1.style.transform = `translateX(${translateX}px)`;
    }

    document.querySelector('.small-carousel-container:nth-of-type(1) .small-carousel-next').addEventListener('click', showNextSmall1);
    document.querySelector('.small-carousel-container:nth-of-type(1) .small-carousel-prev').addEventListener('click', showPrevSmall1);

    // Small Carousel 2
    const smallCarouselInner2 = document.querySelector('.small-carousel-container:nth-of-type(2) .small-carousel-inner');
    const smallCarouselCards2 = document.querySelectorAll('.small-carousel-container:nth-of-type(2) .small-carousel-card');
    const totalSmallCards2 = smallCarouselCards2.length;

    let smallCurrentIndex2 = 0;
    let smallCardsToShow2 = 1;

    function updateSmallCardsToShow2() {
        const width = window.innerWidth;
        if (width < 768) {
            smallCardsToShow2 = 1;
        } else if (width < 1025) {
            smallCardsToShow2 = 2;
        } else {
            smallCardsToShow2 = 1;
        }
    }

    function showNextSmall2() {
        smallCurrentIndex2 = (smallCurrentIndex2 + smallCardsToShow2) % totalSmallCards2;
        updateSmallCarousel2();
    }

    function showPrevSmall2() {
        smallCurrentIndex2 = (smallCurrentIndex2 - smallCardsToShow2 + totalSmallCards2) % totalSmallCards2;
        updateSmallCarousel2();
    }

    function updateSmallCarousel2() {
        const cardWidth = document.querySelector('.small-carousel-container:nth-of-type(2) .small-carousel-card').offsetWidth;
        const translateX = -smallCurrentIndex2 * cardWidth;
        smallCarouselInner2.style.transform = `translateX(${translateX}px)`;
    }

    document.querySelector('.small-carousel-container:nth-of-type(2) .small-carousel-next').addEventListener('click', showNextSmall2);
    document.querySelector('.small-carousel-container:nth-of-type(2) .small-carousel-prev').addEventListener('click', showPrevSmall2);

    window.addEventListener('resize', () => {
        updateSmallCardsToShow1();
        updateSmallCarousel1();
        updateSmallCardsToShow2();
        updateSmallCarousel2();
    });

    updateSmallCardsToShow1();
    updateSmallCarousel1();
    updateSmallCardsToShow2();
    updateSmallCarousel2();
    setInterval(showNextSmall1, 3500);
    setInterval(showNextSmall2, 3500);
});

document.addEventListener('DOMContentLoaded', function () {
    // ...existing code...

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
});

document.addEventListener('DOMContentLoaded', function() {
    function animateNumber(element) {
        const target = +element.getAttribute('data-target');
        // durasi counter full
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
        const randomIncrement = Math.floor(Math.random() * 13) + 3; // Random value between 3 and 15
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
});
