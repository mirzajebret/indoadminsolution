document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.ias-hero-slide');
    let currentSlide = 0;

    // Fungsi untuk menampilkan slide berdasarkan indeks
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    // Fungsi untuk menampilkan slide berikutnya
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Fungsi untuk menampilkan slide sebelumnya
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Menyembunyikan atau menampilkan slide berdasarkan indeks
    showSlide(currentSlide);

    // Ganti slide setiap 5 detik
    setInterval(nextSlide, 3000);

    // Variabel untuk menyimpan posisi sentuhan
    let startX = 0;
    let endX = 0;

    // Menambahkan event listener untuk touchstart (sentuhan dimulai)
    const carousel = document.getElementById('ias-hero-carousel');
    
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Menyimpan posisi awal jari
    });

    // Menambahkan event listener untuk touchmove (sentuhan bergerak)
    carousel.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX; // Menyimpan posisi akhir jari
    });

    // Menambahkan event listener untuk touchend (sentuhan berakhir)
    carousel.addEventListener('touchend', () => {
        if (startX - endX > 50) {
            // Geser ke kiri
            nextSlide();
        } else if (endX - startX > 50) {
            // Geser ke kanan
            prevSlide();
        }
    });
});
