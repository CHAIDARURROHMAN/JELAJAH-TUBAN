// 1. Data Dummy (Contoh) untuk semua kategori
const dataWisataTuban = {
    wisata: [
        { nama: "Pantai Kelapa", deskripsi: "Hamparan pohon kelapa yang rindang.", gambar: "PantaiKelapa.jpg" },
        { nama: "Air Terjun Nglirip", deskripsi: "Air terjun yang indah dengan kolam biru.", gambar: "Nglirip.jpg" },
        { nama: "Goa Akbar", deskripsi: "Gua alami yang luas di pusat kota.", gambar: "GoaAkbar.jpg" }
    ],
    ibadah: [
        { nama: "Masjid Agung Tuban", deskripsi: "Masjid megah dengan arsitektur Jawa.", gambar: "MasjidAgung.jpg" },
        { nama: "Klenteng Kwan Sing Bio", deskripsi: "Klenteng yang ikonik di tepi pantai.", gambar: "Klenteng.jpg" }
    ],
    kuliner: [
        { nama: "Nasi Uduk Bu Nanik", deskripsi: "Nasi uduk legendaris dan sambal khas.", gambar: "NasiUduk.jpg" },
        { nama: "Sate Lilit Ikan", deskripsi: "Sate unik dari olahan hasil laut Tuban.", gambar: "SateLilit.jpg" }
    ],
    bensin: [
        { nama: "SPBU 34.623.01 (Jl. Raya)", deskripsi: "SPBU utama dengan fasilitas lengkap.", gambar: "SPBU1.jpg" },
        { nama: "SPBU 34.623.05 (Kec. Jatirogo)", deskripsi: "Berada di jalur perbatasan Jawa Timur.", gambar: "SPBU2.jpg" }
    ],
    hotel: [
        { nama: "Hotel Mustika Tuban", deskripsi: "Akomodasi nyaman dekat pusat kota.", gambar: "HotelMustika.jpg" },
        { nama: "Resort Jawa Timur", deskripsi: "Penginapan dengan pemandangan sawah.", gambar: "ResortJawaTimur.jpg" }
    ],
    mall: [
        { nama: "Tuban Plaza", deskripsi: "Pusat perbelanjaan terbesar di Tuban.", gambar: "TubanPlaza.jpg" },
        { nama: "Toserba Basmalah", deskripsi: "Toko serba ada yang lengkap.", gambar: "Basmalah.jpg" }
    ]
    pendidikan: [
        { nama: "Universitas PGRI Ronggolawe (UNIROW)", deskripsi: "Perguruan tinggi terbesar di Tuban.", gambar: "UNIROW.jpg" },
        { nama: "SMAN 1 Tuban", deskripsi: "Sekolah menengah atas favorit di kota.", gambar: "SMAN1.jpg" },
        { nama: "Pondok Pesantren Langitan", deskripsi: "Salah satu pondok pesantren tertua dan terbesar.", gambar: "Langitan.jpg" }
    ]
};

// 2. Fungsi untuk Menampilkan Hasil Pencarian
function displayResults(category) {
    const container = document.getElementById('results-container');
    const items = dataWisataTuban[category]; // Ambil data sesuai kategori yang dipilih

    // Bersihkan konten sebelumnya
    container.innerHTML = ''; 

    if (items && items.length > 0) {
        items.forEach(item => {
            // Buat elemen card baru
            const card = document.createElement('div');
            card.className = 'result-card'; // Terapkan styling CSS

            // Isi card dengan HTML untuk gambar dan konten
            card.innerHTML = `
                <img src="images/${item.gambar}" alt="${item.nama}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p>${item.deskripsi}</p>
                </div>
            `;

            // Tambahkan card ke container
            container.appendChild(card);
        });
    } else {
        container.innerHTML = `<p class="initial-prompt">Maaf, data untuk kategori ${category} belum tersedia.</p>`;
    }
}

// 3. Menghubungkan Tombol Menu dengan Fungsi Display
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-item'); // Ambil semua tombol dengan class .menu-item
    
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category'); // Dapatkan nilai data-category
            displayResults(category); // Panggil fungsi untuk menampilkan hasil
        });
    });

    // Opsional: Atur sambutan dinamis berdasarkan waktu (Contoh sederhana)
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Selamat Pagi!";
    } else if (hour < 18) {
        greeting = "Selamat Siang!";
    } else {
        greeting = "Selamat Malam!";
    }
    document.getElementById('greeting-message').textContent = greeting;
});
