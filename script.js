// Data Wisata Tuban yang Sederhana dan Stabil
const dataWisataTuban = {
    wisata: [
        { 
            nama: "Pantai Kelapa", 
            deskripsi: "Hamparan pohon kelapa yang rindang, populer untuk spot foto dan bersantai.", 
            gambar: "PantaiKelapa.jpg", // Asumsikan Anda punya file ini di folder 'images'
            lokasi: "Desa Panyuran, Palang, Tuban",
            query: "Pantai Kelapa Tuban" // Query pencarian stabil
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
        }
    ]
};

// Fungsi untuk Menampilkan Semua Hasil
function displayResults() {
    const container = document.getElementById('results-container');
    const items = dataWisataTuban.wisata;

    // Bersihkan konten sebelumnya dan mulai mengisi
    container.innerHTML = '';

    if (items && items.length > 0) {
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            
            // LOGIKA URL YANG STABIL (Kunci solusi)
            // Menggunakan query pencarian nama tempat yang jelas dan mudah diindeks Google
            // encodeURIComponent memastikan spasi dan karakter lain aman dalam URL
            const mapsUrl = `https://maps.app.goo.gl/KlentengKwanSingBio7${encodeURIComponent(item.query)}`;
            
            card.innerHTML = `
                <div class="card-images">
                    <img src="images/${item.gambar}" alt="${item.nama}" onerror="this.onerror=null;this.src='http://googleusercontent.com/26';">
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
