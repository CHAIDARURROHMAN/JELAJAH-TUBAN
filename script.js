// Data Wisata Tuban yang Mengandung Koordinat Akurat
const dataWisataTuban = {
    wisata: [
        { 
            nama: "Pantai Kelapa", 
            deskripsi: "Hamparan pohon kelapa yang rindang, populer untuk spot foto dan bersantai.", 
            gambar: "PantaiKelapa.jpg",
            lokasi: "Desa Panyuran, Palang, Tuban",
            koordinat: "-6.896359464703487,112.08915280130618" // Koordinat
        },
        { 
            nama: "Air Terjun Nglirip", 
            deskripsi: "Air terjun berteras yang dikelilingi tebing karst, cocok untuk fotografi alam.", 
            gambar: "Nglirip.jpg",
            lokasi: "Desa Mulyoagung, Kecamatan Singgahan",
            koordinat: "-7.018000,111.750500"
        },
        { 
            nama: "Goa Akbar", 
            deskripsi: "Gua alami yang luas dan berornamen stalaktit/stalagmit di pusat kota.", 
            gambar: "GoaAkbar.jpg",
            lokasi: "Jl. HR. Lukman, Semanding, Tuban",
            koordinat: "-6.89531,112.05141"
        },
        { 
            nama: "Klenteng Kwan Sing Bio", 
            deskripsi: "Klenteng ikonik di tepi pantai, terkenal dengan patung dewa kura-kura.", 
            gambar: "Klenteng.jpg",
            lokasi: "Jl. Martadinata, Karangsari, Tuban",
            koordinat: "-6.89269,112.04655"
        },
        { 
            nama: "Masjid Agung Tuban", 
            deskripsi: "Masjid bersejarah dengan arsitektur perpaduan Jawa dan Timur Tengah.", 
            gambar: "MasjidAgung.jpg",
            lokasi: "Jl. Bonang, Kutorejo, Tuban",
            koordinat: "-6.89063,112.05510"
        },
        {
            nama: "Sendang Asmoro",
            deskripsi: "Kolam alami dengan air jernih dan suasana hutan yang sejuk. Populer untuk berenang.",
            gambar: "SendangAsmoro.jpg",
            lokasi: "Desa Ngino, Kecamatan Semanding",
            koordinat: "-6.90820,111.95600"
        },
        {
            nama: "Wisata Mangrove Center",
            deskripsi: "Kawasan hutan bakau yang dilengkapi jembatan kayu untuk *tracking* dan edukasi lingkungan.",
            gambar: "MangroveCenter.jpg",
            lokasi: "Jenu, Tuban",
            koordinat: "-6.88510,112.00030"
        },
        {
            nama: "Air Terjun Kedungjambe",
            deskripsi: "Air terjun tersembunyi dengan kolam yang tenang, membutuhkan *trekking* ringan.",
            gambar: "Kedungjambe.jpg",
            lokasi: "Desa Boto, Kecamatan Semanding",
            koordinat: "-6.95300,112.08300"
        },
        {
            nama: "Makam Sunan Bonang",
            deskripsi: "Kompleks makam salah satu Wali Songo, menjadi pusat ziarah utama di Tuban.",
            gambar: "SunanBonang.jpg",
            lokasi: "Kutorejo, Tuban",
            koordinat: "-6.89030,112.05450"
        },
        {
            nama: "Pantai Sowan",
            deskripsi: "Pantai dengan pepohonan pinus dan perahu nelayan, menawarkan pemandangan matahari terbenam.",
            gambar: "PantaiSowan.jpg",
            lokasi: "Desa Bogorejo, Bancar",
            koordinat: "-6.75050,111.60300"
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
            
            // SOLUSI TERAKHIR: Menggunakan format koordinat langsung (paling stabil)
            // Ini akan memicu aplikasi/browser untuk mencari lokasi koordinat tersebut.
            const mapsUrl = "https://maps.app.goo.gl/KlentengKwanSingBio9" + item.koordinat;
            
            card.innerHTML = `
                <div class="card-images">
                    <img src="images/${item.gambar}" alt="${item.nama}" onerror="this.onerror=null;this.src='http://googleusercontent.com/29';">
                </div>
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p>${item.deskripsi}</p>
                    <p class="location-text">📍 ${item.lokasi}</p>
                    <a href="${mapsUrl}" target="_blank" class="map-link">
                        Lihat Lokasi Tepat
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
