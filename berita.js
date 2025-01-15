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
    {
        kategori: "DIGITALISASI",
        judul: "Digitalisasi Layanan Perizinan: Mempermudah Akses dan Transparansi bagi Masyarakat",
        views: "1.2k",
        img: "https://lenna.ai/wp-content/uploads/2023/11/Transformasi-1200x500.png",
        deskripsi: `
            Pemerintah Indonesia terus berupaya meningkatkan kualitas layanan publik melalui digitalisasi, termasuk dalam hal perizinan. Langkah ini bertujuan untuk mempermudah akses, meningkatkan transparansi, dan efisiensi bagi masyarakat serta pelaku usaha.

            <br><br><strong>Manfaat Digitalisasi Layanan Perizinan</strong> <br>

            <strong>Kemudahan Akses:</strong> Masyarakat dapat mengajukan permohonan izin kapan saja dan di mana saja melalui platform online, tanpa perlu mendatangi kantor pemerintahan secara langsung.

            <strong>Transparansi Proses:</strong> Setiap tahapan permohonan izin dapat dipantau secara real-time, sehingga pemohon mengetahui status dan perkembangan permohonannya.

            <strong>Efisiensi Waktu dan Biaya:</strong> Proses yang sebelumnya memakan waktu lama kini dapat diselesaikan lebih cepat dengan pengurangan birokrasi dan dokumen fisik.

            <strong>Inisiatif Digitalisasi di Berbagai Daerah</strong>

            Beberapa pemerintah daerah telah meluncurkan layanan perizinan online untuk meningkatkan pelayanan kepada masyarakat. Misalnya, Pemerintah Kota Bandung melalui Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DPMPTSP) telah memperkenalkan layanan Mobil Keliling Elektronik untuk Masyarakat (Molling e-Mas) dan Konsultasi Perizinan Online yang Amanah dan Ramah (Karomah) untuk memberikan kemudahan dalam pengajuan izin secara online. 
            DPMPTSP BANDUNG

            Selain itu, Kementerian Komunikasi dan Informatika melalui Direktorat Jenderal Penyelenggaraan Pos dan Informatika (Ditjen PPI) telah mengembangkan Sistem Perizinan Online yang memungkinkan pengguna layanan mengajukan, memantau, dan mendapatkan izin secara online dengan layanan yang cepat jika semua syarat sudah terpenuhi. 
            <br><br>KOMDIGI

            <strong>Langkah Menuju Transformasi Digital</strong>

            Transformasi digital dalam layanan perizinan memerlukan kolaborasi antara pemerintah, masyarakat, dan pelaku usaha. Pemerintah berkomitmen untuk terus mengembangkan infrastruktur dan sistem yang mendukung layanan perizinan online, sementara masyarakat diharapkan dapat memanfaatkan layanan ini dengan optimal.

            Dengan adanya digitalisasi layanan perizinan, diharapkan proses pengajuan izin menjadi lebih mudah, cepat, dan transparan, sehingga dapat mendorong pertumbuhan ekonomi dan investasi di Indonesia.
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
        <p class="text-gray-700 mb-4 text-justify">${berita.deskripsi}</p>
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
