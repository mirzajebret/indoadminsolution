// Data berita terkait
const beritaTerkait = [
    {
        kategori: "DIGITALISASI",
        judul: "PPAT dan Pentingnya Sertifikasi Elektronik untuk Keamanan Transaksi Tanah",
        views: "850",
        img: "https://github.com/mirzajebret/indoadminsolution/blob/main/img/articles/esert-news.jpg?raw=true",
        deskripsi: `
            Sertifikasi elektronik di era digital sangat penting untuk menjamin keamanan transaksi tanah...
        `,
        author: "Admin KantorPerizinan.com",
    },
    {
        kategori: "NOTARIS",
        judul: "Peran Notaris dalam Akta Perjanjian Jual Beli Tanah di Era Digital",
        views: "1.5k",
        img: "https://github.com/mirzajebret/indoadminsolution/blob/main/img/articles/ppat-news.jpeg?raw=true",
        deskripsi: `
            Peran notaris semakin penting di era digital untuk memastikan proses legalitas dokumen...
        `,
        author: "Admin KantorPerizinan.com",
    },
    {
        kategori: "BISNIS ONLINE",
        judul: "Website Bisnis di 2024: Pentingnya Desain yang Ramah Pengguna",
        views: "2.1k",
        img: "https://github.com/mirzajebret/indoadminsolution/blob/main/img/articles/website-news.jpg?raw=true",
        deskripsi: `
            Desain yang ramah pengguna adalah kunci keberhasilan website bisnis di era modern...
        `,
        author: "Admin KantorPerizinan.com",
    },
];

// Render berita utama
function renderBeritaUtama(berita) {
    const beritaUtamaContainer = document.getElementById("berita-utama");
    beritaUtamaContainer.innerHTML = `
        <img alt="${berita.judul}" class="w-full max-h-300px object-contain rounded-lg mb-4" src="${berita.img}"/>
        <div class="flex items-center mb-2">
            <span class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">${berita.kategori}</span>
            <div class="flex items-center ml-4 text-gray-500">
                <i class="fas fa-eye mr-1"></i> ${berita.views}
            </div>
        </div>
        <h2 class="text-xl font-bold mb-2">${berita.judul}</h2>
        <p class="text-gray-500 mb-4">oleh ${berita.author}</p>
        <p class="text-gray-700 mb-4">${berita.deskripsi}</p>s
    `;
}

// Render berita lainnya
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("berita-terkait-container");

    // Render berita utama dengan berita pertama
    renderBeritaUtama(beritaTerkait[0]);

    // Render berita terkait
    beritaTerkait.forEach((berita, index) => {
        const beritaHTML = `
            <div class="bg-white rounded-lg shadow-md p-4 flex cursor-pointer" data-index="${index}">
                <img alt="${berita.judul}" class="w-24 h-24 rounded-lg mr-4" src="${berita.img}"/>
                <div>
                    <span class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">${berita.kategori}</span>
                    <h3 class="text-lg font-bold mt-2">${berita.judul}</h3>
                    <p class="text-gray-500 text-sm">${berita.views} views</p>
                </div>
            </div>
        `;

        container.innerHTML += beritaHTML;
    });

    // Tambahkan event listener untuk setiap berita terkait
    container.querySelectorAll(".cursor-pointer").forEach((item) => {
        item.addEventListener("click", (event) => {
            const index = event.currentTarget.dataset.index;
            renderBeritaUtama(beritaTerkait[index]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
