const beritaTerkait = [
    {
      kategori: "DIGITALISASI",
      judul: "PPAT dan Pentingnya Sertifikasi Elektronik untuk Keamanan Transaksi Tanah",
      views: "850",
      img: "https://github.com/mirzajebret/indoadminsolution/blob/main/img/articles/esert-news.jpg?raw=true",
    },
    {
      kategori: "NOTARIS",
      judul: "Peran Notaris dalam Akta Perjanjian Jual Beli Tanah di Era Digital",
      views: "1.5k",
      img: "https://github.com/mirzajebret/indoadminsolution/blob/main/img/articles/ppat-news.jpeg?raw=true",
    },
    {
      kategori: "BISNIS ONLINE",
      judul: "Website Bisnis di 2024: Pentingnya Desain yang Ramah Pengguna",
      views: "2.1k",
      img: "https://github.com/mirzajebret/indoadminsolution/blob/main/img/articles/website-news.jpg?raw=true",
    },
  ];

  document.addEventListener("DOMContentLoaded", function () {
    const beritaContainer = document.getElementById("berita-terkait-container");
  
    beritaTerkait.forEach(berita => {
      // Template HTML untuk setiap berita
      const beritaHTML = `
        <div class="bg-white rounded-lg shadow-md p-4 flex">
          <img alt="${berita.judul}" class="w-24 h-24 rounded-lg mr-4" src="${berita.img}"/>
          <div>
            <span class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              ${berita.kategori}
            </span>
            <h3 class="text-lg font-bold mt-2">${berita.judul}</h3>
            <p class="text-gray-500 text-sm">${berita.views} views</p>
          </div>
        </div>
      `;
  
      // Tambahkan berita ke dalam container
      beritaContainer.innerHTML += beritaHTML;
    });
  });
  