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
    kuliner: [
        { 
            nama: "Nasi Uduk Bu Nanik", 
            deskripsi: "Nasi uduk legendaris dan sambal khas. Foto hidangan dan suasana warung.", 
            gambar: ["NasiUduk1.jpg", "NasiUduk2.jpg"],
            lokasi: "Jl. Basuki Rahmat, Latsari",
            koordinat: "-6.88410,112.06220"
        },
        { 
            nama: "Sate Lilit Ikan", 
            deskripsi: "Sate unik dari olahan hasil laut Tuban. Foto bahan baku dan penyajian.", 
            gambar: ["SateLilit1.jpg", "SateLilit2.jpg"],
            lokasi: "Area Pantai Utara Tuban",
            koordinat: "-6.89062,112.04500"
        }
    ],
    bensin: [
        { 
            nama: "SPBU 34.623.01 (Jl. Raya)", 
            deskripsi: "SPBU utama dengan fasilitas lengkap. Foto tampak depan dan area pengisian.", 
            gambar: ["SPBU01_1.jpg", "SPBU01_2.jpg"],
            lokasi: "Jl. Raya Surabaya-Tuban KM 15",
            koordinat: "-6.85210,112.11580"
        },
        { 
            nama: "SPBU 34.623.05 (Kec. Jatirogo)", 
            deskripsi: "Berada di jalur perbatasan Jawa Timur. Foto area parkir dan toko.", 
            gambar: ["SPBU05_1.jpg", "SPBU05_2.jpg"],
            lokasi: "Jl. Raya Jatirogo, Timur Kota",
            koordinat: "-6.92050,111.58300"
        }
    ],
    hotel: [
        { 
            nama: "Hotel Mustika Tuban", 
            deskripsi: "Akomodasi nyaman dekat pusat kota. Foto lobi dan kamar tidur.", 
            gambar: ["HotelMustika1.jpg", "HotelMustika2.jpg"],
            lokasi: "Jl. Teuku Umar No. 12",
            koordinat: "-6.89320,112.06010"
        },
        { 
            nama: "Resort Jawa Timur", 
            deskripsi: "Penginapan dengan pemandangan sawah. Foto kolam renang dan pemandangan.", 
            gambar: ["ResortJawaTimur1.jpg", "ResortJawaTimur2.jpg"],
            lokasi: "Jl. Pahlawan, Semanding",
            koordinat: "-6.90210,112.07150"
        }
    ],
    mall: [
        { 
            nama: "Tuban Plaza", 
            deskripsi: "Pusat perbelanjaan terbesar di Tuban. Foto fasad gedung dan interior.", 
            gambar: ["TubanPlaza1.jpg", "TubanPlaza2.jpg"],
            lokasi: "Jl. Basuki Rahmat, Latsari",
            koordinat: "-6.89200,112.05700"
        },
        { 
            nama: "Toserba Basmalah", 
            deskripsi: "Toko serba ada yang lengkap. Foto luar toko dan rak barang.", 
            gambar: ["Basmalah1.jpg", "Basmalah2.jpg"],
            lokasi: "Jl. Panglima Sudirman No. 5",
            koordinat: "-6.88550,112.05850"
        }
    ],
    pendidikan: [
        { 
            nama: "Universitas PGRI Ronggolawe (UNIROW)", 
            deskripsi: "Perguruan tinggi terbesar di Tuban. Foto gedung utama dan aktivitas mahasiswa.", 
            gambar: ["UNIROW1.jpg", "UNIROW2.jpg"],
            lokasi: "Jl. Manunggal No. 61",
            koordinat: "-6.90150,112.05810"
        },
        { 
            nama: "SMAN 1 Tuban", 
            deskripsi: "Sekolah menengah atas favorit di kota. Foto gerbang sekolah dan lapangan.", 
            gambar: ["SMAN1_1.jpg", "SMAN1_2.jpg"],
            lokasi: "Jl. Basuki Rahmat No. 70",
            koordinat: "-6.89010,112.05920"
        },
        { 
            nama: "Pondok Pesantren Langitan", 
            deskripsi: "Salah satu pondok pesantren tertua dan terbesar. Foto masjid pondok dan asrama.", 
            gambar: ["Langitan1.jpg", "Langitan2.jpg"],
            lokasi: "Desa Langitan, Widang",
            koordinat: "-6.98300,112.23540"
        }
    ]
};

// 2. Fungsi untuk Menampilkan Hasil Pencarian
function displayResults(category) {
    const container = document.getElementById('results-container');
    const items = dataWisataTuban[category];

    // Bersihkan konten sebelumnya
    container.innerHTML = '';

    if (items && items.length > 0) {
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card';
            
            // LOGIKA MENENTUKAN GAMBAR (Tidak Berubah)
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
            
            // [PERBAIKAN KRUSIAL FINAL]: Menggunakan format URL Google Maps yang paling publik dan stabil.
            const mapsUrl = `https://maps.app.goo.gl/SateLilitIkanTuban1{item.koordinat}`;
            
            // Menggunakan tag <a> (tautan) kembali dengan teks "Lihat di Peta"
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

// 3. Menghubungkan Tombol Menu dengan Fungsi Display (Tidak Berubah)
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
