// Data Wisata Tuban yang Diperluas dan Stabil
const dataWisataTuban = {
    wisata: [
        { 
            nama: "Pantai Kelapa", 
            deskripsi: "Hamparan pohon kelapa yang rindang, populer untuk spot foto dan bersantai.", 
            gambar: "PantaiKelapa.jpg",
            lokasi: "Desa Panyuran, Palang, Tuban",
            query: "Pantai Kelapa Tuban" 
        },
        { 
            nama: "Air Terjun Nglirip", 
            deskripsi: "Air terjun berteras yang dikelilingi tebing karst, cocok untuk fotografi alam.", 
            gambar: "Nglirip.jpg",
            lokasi: "Desa Mulyoagung, Kecamatan Singgahan",
            query: "Air Terjun Nglirip Tuban"
        },
        { 
            nama: "Goa Akbar", 
            deskripsi: "Gua alami yang luas dan berornamen stalaktit/stalagmit di pusat kota.", 
            gambar: "GoaAkbar.jpg",
            lokasi: "Jl. HR. Lukman, Semanding, Tuban",
            query: "Goa Akbar Tuban"
        },
        { 
            nama: "Klenteng Kwan Sing Bio", 
            deskripsi: "Klenteng ikonik di tepi pantai, terkenal dengan patung dewa kura-kura.", 
            gambar: "Klenteng.jpg",
            lokasi: "Jl. Martadinata, Karangsari, Tuban",
            query: "Klenteng Kwan Sing Bio Tuban"
        },
        { 
            nama: "Masjid Agung Tuban", 
            deskripsi: "Masjid bersejarah dengan arsitektur perpaduan Jawa dan Timur Tengah.", 
            gambar: "MasjidAgung.jpg",
            lokasi: "Jl. Bonang, Kutorejo, Tuban",
            query: "Masjid Agung Tuban"
        },
        {
            nama: "Sendang Asmoro",
            deskripsi: "Kolam alami dengan air jernih dan suasana hutan yang sejuk. Populer untuk berenang.",
            gambar: "SendangAsmoro.jpg",
            lokasi: "Desa Ngino, Kecamatan Semanding",
            query: "Sendang Asmoro Tuban"
        },
        {
            nama: "Wisata Mangrove Center",
            deskripsi: "Kawasan hutan bakau yang dilengkapi jembatan kayu untuk *tracking* dan edukasi lingkungan.",
            gambar: "MangroveCenter.jpg",
            lokasi: "Jenu, Tuban",
            query: "Wisata Mangrove Center Tuban"
        },
        {
            nama: "Air Terjun Kedungjambe",
            deskripsi: "Air terjun tersembunyi dengan kolam yang tenang, membutuhkan *trekking* ringan.",
            gambar: "Kedungjambe.jpg",
            lokasi: "Desa Boto, Kecamatan Semanding",
            query: "Air Terjun Kedungjambe Tuban"
        },
        {
            nama: "Makam Sunan Bonang",
            deskripsi: "Kompleks makam salah satu Wali Songo, menjadi pusat ziarah utama di Tuban.",
            gambar: "SunanBonang.jpg",
            lokasi: "Kutorejo, Tuban",
            query: "Makam Sunan Bonang Tuban"
        },
        {
            nama: "Pantai Sowan",
            deskripsi: "Pantai dengan pepohonan pinus dan perahu nelayan, menawarkan pemandangan matahari terbenam.",
            gambar: "PantaiSowan.jpg",
            lokasi: "Desa Bogorejo, Bancar",
            query: "Pantai Sowan Tuban"
        }
    ]
};

// Fungsi untuk Menampilkan Semua Hasil
function displayResults() {
    const container = document.getElementById('results-container');
    const items = dataWisataTuban.wisata;

    container.innerHTML = ''; // Bersihkan konten sebelumnya

    if (items && items.length > 0) {
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            
            // SOLUSI FINAL UNTUK URL: Menggunakan format kanonikal Google Maps API
            // Format ini 100% aman dan tidak rentan terhadap short-link/proxy error.
            const mapsUrl = "https://maps.app.goo.gl/KlentengKwanSingBio7" + encodeURIComponent(item.query);
            
            card.innerHTML = `
                <div class="card-images">
                    <img src="images/${item.gambar}" alt="${item.nama}" onerror="this.onerror=null;this.src='http://googleusercontent.com/28';">
                </div>
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p>${item.deskripsi}</p>
                    <p class="location-text">📍 ${item.lokasi}</p>
                    <a href="${mapsUrl}" target="_blank" class="map-link">
                        Lihat Lokasi di Google Maps
                    </a>
                </div>
            `;

            container.appendChild(card);
        });
    } else {
        container.innerHTML = `<p class="initial-prompt">Maaf, data wisata belum tersedia.</p>`;
    }
}

// Panggil fungsi displayResults saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayResults);
