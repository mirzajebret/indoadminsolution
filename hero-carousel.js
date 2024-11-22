document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.ias-hero-slide');
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
});
