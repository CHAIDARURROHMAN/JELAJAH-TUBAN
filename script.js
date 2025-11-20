// Data Peta Google yang sudah dikoreksi.
const dataWisataTuban = {
    wisata: [
        { 
            nama: "Pantai Kelapa", 
            deskripsi: "Hamparan pohon kelapa yang rindang dengan banyak spot foto menarik.", 
            gambar: ["PantaiKelapa1.jpg", "PantaiKelapa2.png"],
            lokasi: "Jalan Raya Tuban-Semarang, Desa Panyuran, Palang",
            koordinat: "-6.896359464703487,112.08915280130618" 
        },
        { 
            nama: "Air Terjun Nglirip", 
            deskripsi: "Air terjun yang indah dengan kolam biru, cocok untuk fotografi.", 
            gambar: ["Nglirip1.jpg", "Nglirip2.jpg"],
            lokasi: "Desa Mulyoagung, Kecamatan Singgahan",
            koordinat: "-7.018000,111.750500"
        },
        { 
            nama: "Goa Akbar", 
            deskripsi: "Gua alami yang luas di pusat kota. Tampilkan dua sudut pandang berbeda.", 
            gambar: ["GoaAkbar1.jpg", "GoaAkbar2.jpg"],
            lokasi: "Jl. HR. Lukman, Semanding",
            koordinat: "-6.89531,112.05141"
        }
    ],
    ibadah: [
        { 
            nama: "Masjid Agung Tuban", 
            deskripsi: "Masjid megah dengan arsitektur Jawa. Foto eksterior dan interior.", 
            gambar: ["MasjidAgung1.jpg", "MasjidAgung2.jpg"],
            lokasi: "Jl. Bonang, Kutorejo, Tuban",
            koordinat: "-6.89063,112.05510"
        },
        { 
            nama: "Klenteng Kwan Sing Bio", 
            deskripsi: "Klenteng yang ikonik di tepi pantai. Foto gerbang dan patung utama.", 
            gambar: ["Klenteng1.jpg", "Klenteng2.jpg"],
            lokasi: "Jl. Martadinata, Karangsari",
            koordinat: "-6.89269,112.04655"
        }
    ],
    // ... (Data Kuliner, Bensin, Hotel, Mall, Pendidikan tetap sama)
};

// =========================================================================
// 1. FUNGSI BARU: Mengambil Data Cuaca Berdasarkan Koordinat
// =========================================================================

async function fetchWeatherByCoordinate(namaTempat, koordinat) {
    const [latitude, longitude] = koordinat.split(',').map(c => c.trim());
    
    // Asumsi: Kita akan menggunakan elemen baru (misalnya Modal atau Div di bagian atas) untuk menampilkan hasil.
    // Untuk saat ini, kita akan menggunakan alert/console.log, atau Anda bisa buat elemen div baru di HTML Anda.
    alert(`Mengambil cuaca untuk ${namaTempat}...`); 

    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const data = await res.json();
        
        if (!data.current_weather) {
            alert(`Gagal mendapatkan cuaca untuk ${namaTempat}. Coba lagi.`);
            return;
        }

        const temp = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;
        const weatherCode = data.current_weather.weathercode;
        
        // Menampilkan hasilnya menggunakan Alert (untuk kesederhanaan, Anda bisa ganti ini dengan Modal/Div)
        const weatherInfo = 
            `Cuaca di ${namaTempat} saat ini:\n` +
            `Suhu: ${temp}°C\n` +
            `Kecepatan Angin: ${wind} km/jam\n` +
            `Kode Cuaca: ${weatherCode}`;
        
        alert(weatherInfo);

    } catch (err) {
        console.error(err);
        alert(`Terjadi kesalahan saat mengambil data cuaca untuk ${namaTempat}.`);
    }
}


// =========================================================================
// 2. FUNGSI UNTUK MENAMPILKAN HASIL (dengan tombol Cuaca)
// =========================================================================
function displayResults(category) {
    const container = document.getElementById('results-container');
    const items = dataWisataTuban[category];
    container.innerHTML = ''; // Bersihkan konten sebelumnya

    if (items && items.length > 0) {
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            
            // LOGIKA MENENTUKAN GAMBAR (Tidak Berubah)
            let imagesHtml = '';
            // ... (Kode untuk imagesHtml tetap sama)
            if (Array.isArray(item.gambar)) {
                imagesHtml = '<div class="card-images-grid">';
                item.gambar.forEach(imgName => {
                    imagesHtml += `<img src="images/${imgName}" alt="${item.nama}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">`;
                });
                imagesHtml += '</div>';
            } else {
                imagesHtml = `<img src="images/${item.gambar}" alt="${item.nama}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">`;
            }
            
            // [PERUBAHAN KRUSIAL]: Mengganti tag <a> dengan tag <button> 
            // dan menambahkan atribut data-koordinat
            card.innerHTML = `
                ${imagesHtml}
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p>${item.deskripsi}</p>
                    <p class="location-text">📍 ${item.lokasi}</p>
                    <button class="weather-button map-link" data-koordinat="${item.koordinat}" data-nama="${item.nama}">
                        <i class="fas fa-cloud-sun"></i> Lihat Cuaca
                    </button>
                </div>
            `;

            container.appendChild(card);
        });
        
        // 3. Menambahkan Event Listener ke semua tombol cuaca yang baru dibuat
        document.querySelectorAll('.weather-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const koordinat = e.currentTarget.getAttribute('data-koordinat');
                const nama = e.currentTarget.getAttribute('data-nama');
                fetchWeatherByCoordinate(nama, koordinat);
            });
        });

    } else {
        container.innerHTML = `<p class="initial-prompt">Maaf, data untuk kategori ${category} belum tersedia.</p>`;
    }
}

// =========================================================================
// 4. MENGHUBUNGKAN TOMBOL MENU DENGAN FUNGSI DISPLAY (Tidak Berubah)
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-item');
    
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            displayResults(category);
        });
    });

    // Opsional: Atur sambutan dinamis berdasarkan waktu 
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
