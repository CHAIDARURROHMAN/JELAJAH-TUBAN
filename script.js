// 1. Data Dummy (Contoh) untuk semua kategori
const dataWisataTuban = {
    wisata: [
        // DUA FOTO: Menggunakan array []
        { 
            nama: "Pantai Kelapa", 
            deskripsi: "Hamparan pohon kelapa yang rindang dengan banyak spot foto menarik.", 
            gambar: ["PantaiKelapa1.jpg", "PantaiKelapa2.png"]
        },
        { 
            nama: "Air Terjun Nglirip", 
            deskripsi: "Air terjun yang indah dengan kolam biru, cocok untuk fotografi.", 
            gambar: ["Nglirip1.jpg", "Nglirip2.jpg"]
        },
        { 
            nama: "Goa Akbar", 
            deskripsi: "Gua alami yang luas di pusat kota. Tampilkan dua sudut pandang berbeda.", 
            gambar: ["GoaAkbar1.jpg", "GoaAkbar2.jpg"]
        }
    ],
    ibadah: [
        // DUA FOTO
        { 
            nama: "Masjid Agung Tuban", 
            deskripsi: "Masjid megah dengan arsitektur Jawa. Foto eksterior dan interior.", 
            gambar: ["MasjidAgung1.jpg", "MasjidAgung2.jpg"]
        },
        { 
            nama: "Klenteng Kwan Sing Bio", 
            deskripsi: "Klenteng yang ikonik di tepi pantai. Foto gerbang dan patung utama.", 
            gambar: ["Klenteng1.jpg", "Klenteng2.jpg"]
        }
    ],
    kuliner: [
        // DUA FOTO
        { 
            nama: "Nasi Uduk Bu Nanik", 
            deskripsi: "Nasi uduk legendaris dan sambal khas. Foto hidangan dan suasana warung.", 
            gambar: ["NasiUduk1.jpg", "NasiUduk2.jpg"]
        },
        { 
            nama: "Sate Lilit Ikan", 
            deskripsi: "Sate unik dari olahan hasil laut Tuban. Foto bahan baku dan penyajian.", 
            gambar: ["SateLilit1.jpg", "SateLilit2.jpg"]
        }
    ],
    bensin: [
        // DUA FOTO
        { 
            nama: "SPBU 34.623.01 (Jl. Raya)", 
            deskripsi: "SPBU utama dengan fasilitas lengkap. Foto tampak depan dan area pengisian.", 
            gambar: ["SPBU01_1.jpg", "SPBU01_2.jpg"]
        },
        { 
            nama: "SPBU 34.623.05 (Kec. Jatirogo)", 
            deskripsi: "Berada di jalur perbatasan Jawa Timur. Foto area parkir dan toko.", 
            gambar: ["SPBU05_1.jpg", "SPBU05_2.jpg"]
        }
    ],
    hotel: [
        // DUA FOTO
        { 
            nama: "Hotel Mustika Tuban", 
            deskripsi: "Akomodasi nyaman dekat pusat kota. Foto lobi dan kamar tidur.", 
            gambar: ["HotelMustika1.jpg", "HotelMustika2.jpg"]
        },
        { 
            nama: "Resort Jawa Timur", 
            deskripsi: "Penginapan dengan pemandangan sawah. Foto kolam renang dan pemandangan.", 
            gambar: ["ResortJawaTimur1.jpg", "ResortJawaTimur2.jpg"]
        }
    ],
    mall: [
        // DUA FOTO
        { 
            nama: "Tuban Plaza", 
            deskripsi: "Pusat perbelanjaan terbesar di Tuban. Foto fasad gedung dan interior.", 
            gambar: ["TubanPlaza1.jpg", "TubanPlaza2.jpg"]
        },
        { 
            nama: "Toserba Basmalah", 
            deskripsi: "Toko serba ada yang lengkap. Foto luar toko dan rak barang.", 
            gambar: ["Basmalah1.jpg", "Basmalah2.jpg"]
        }
    ],
    pendidikan: [
        // DUA FOTO
        { 
            nama: "Universitas PGRI Ronggolawe (UNIROW)", 
            deskripsi: "Perguruan tinggi terbesar di Tuban. Foto gedung utama dan aktivitas mahasiswa.", 
            gambar: ["UNIROW1.jpg", "UNIROW2.jpg"]
        },
        { 
            nama: "SMAN 1 Tuban", 
            deskripsi: "Sekolah menengah atas favorit di kota. Foto gerbang sekolah dan lapangan.", 
            gambar: ["SMAN1_1.jpg", "SMAN1_2.jpg"]
        },
        { 
            nama: "Pondok Pesantren Langitan", 
            deskripsi: "Salah satu pondok pesantren tertua dan terbesar. Foto masjid pondok dan asrama.", 
            gambar: ["Langitan1.jpg", "Langitan2.jpg"]
        }
    ]
};

// 2. Fungsi untuk Menampilkan Hasil Pencarian (Logika ini sudah benar)
function displayResults(category) {
    const container = document.getElementById('results-container');
    const items = dataWisataTuban[category]; 

    // Bersihkan konten sebelumnya
    container.innerHTML = ''; 

    if (items && items.length > 0) {
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'result-card'; 
            
            // LOGIKA MENENTUKAN GAMBAR (Menangani array atau string tunggal)
            let imagesHtml = '';
            if (Array.isArray(item.gambar)) {
                // Jika gambar adalah array (multiple), buat div grid untuk 2 foto
                imagesHtml = '<div class="card-images-grid">';
                item.gambar.forEach(imgName => {
                    imagesHtml += `<img src="images/${imgName}" alt="${item.nama}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">`;
                });
                imagesHtml += '</div>';
            } else {
                // Jika gambar hanya string (tunggal), tampilkan tag img tunggal
                imagesHtml = `<img src="images/${item.gambar}" alt="${item.nama}" onerror="this.onerror=null;this.src='images/placeholder.jpg';">`;
            }
            
            // Isi card dengan HTML untuk gambar/grid dan konten
            card.innerHTML = `
                ${imagesHtml}
                <div class="card-content">
                    <h3>${item.nama}</h3>
                    <p>${item.deskripsi}</p>
                </div>
            `;

            // BARIS KRUSIAL: Menambahkan kartu ke dalam container
            container.appendChild(card);
        });
    } else {
        container.innerHTML = `<p class="initial-prompt">Maaf, data untuk kategori ${category} belum tersedia.</p>`;
    }
}

// 3. Menghubungkan Tombol Menu dengan Fungsi Display (Sudah benar)
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
