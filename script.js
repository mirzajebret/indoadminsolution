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
    }).catch(error => console.error('Error loading header or footer:', error));
});
// dropdown
function toggleParagraph(arrow) {
    const paragraph = arrow.nextElementSibling;
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
}


