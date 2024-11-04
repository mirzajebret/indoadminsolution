document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const intervalTime = 3000; // Durasi interval dalam milidetik
    let intervalId;

    function showNext() {
        const cards = document.querySelectorAll('.carousel-card');
        const totalCards = cards.length;
        const cardWidth = 550; // Sesuaikan dengan lebar kartu sebenarnya
        const margin = 20; // Sesuaikan dengan margin antar kartu

        // Hitung index baru
        currentIndex = (currentIndex + 1) % totalCards;

        // Hitung offset transform
        const offset = -currentIndex * (cardWidth + margin);
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
    }

    function startCarousel() {
        intervalId = setInterval(showNext, intervalTime);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    // Event listener untuk memulai dan menghentikan carousel saat mouse over/out
    document.querySelector('.carousel-container').addEventListener('mouseenter', stopCarousel);
    document.querySelector('.carousel-container').addEventListener('mouseleave', startCarousel);

    // Memulai carousel pertama kali
    startCarousel();
});
