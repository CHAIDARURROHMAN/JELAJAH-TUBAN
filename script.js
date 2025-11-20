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
        // ... (Data lainnya tetap sama)
    ],
    // ... data ibadah, kuliner, bensin, hotel, mall, pendidikan
};

// Fungsi untuk Menampilkan Hasil Pencarian
function displayResults(category) {
    const container = document.getElementById('results-container');
    const items = dataWisataTuban[category];

    container.innerHTML = '';

    if (items && items.length > 0) {
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            
            // LOGIKA MENENTUKAN GAMBAR
            let imagesHtml = '';
            if (Array.isArray(item.gambar)) {
                imagesHtml = '<div class="card-images-grid">';
                item.gambar.forEach(imgName => {
                    imagesHtml += `<img src="images/${imgName}" alt="${item.nama}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">`;
                });
                imagesHtml += '</div>';
            } else {
                imagesHtml = `<img src="images/${item.gambar}" alt="${item.nama}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">`;
            }
            
            // PERBAIKAN SINTAKSIS KRUSIAL: MENGGUNAKAN ${item.koordinat}
            // Format URL stabil: https://www.google.com/maps/search/?api=1&query=
            const mapsUrl = `https://maps.app.goo.gl/SPBU_Raya8{item.koordinat}`;
            
            // Menggunakan tag <a> (tautan) dengan teks "Lihat di Peta"
            card.innerHTML = `
                ${imagesHtml}
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p>${item.deskripsi}</p>
                    <p class="location-text">📍 ${item.lokasi}</p>
                    <a href="${mapsUrl}" target="_blank" class="map-link">
                        <i class="fas fa-map-marker-alt"></i> Lihat di Peta
                    </a>
                </div>
            `;

            container.appendChild(card);
        });
    } else {
        container.innerHTML = `<p class="initial-prompt">Maaf, data untuk kategori ${category} belum tersedia.</p>`;
    }
}

// Menghubungkan Tombol Menu dengan Fungsi Display (Tetap sama)
document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-item');
    
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            displayResults(category);
        });
    });

    // Opsional: Atur sambutan dinamis
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
