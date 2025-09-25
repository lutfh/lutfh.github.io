document.addEventListener('DOMContentLoaded', function() {
    // Cari tombol dan bagian petunjuk berdasarkan ID mereka
    const showButton = document.getElementById('show-instructions-btn');
    const instructionsSection = document.getElementById('instructions');

    // Pastikan kedua elemen tersebut ada di halaman
    if (showButton && instructionsSection) {
        
        // Tambahkan event listener untuk 'click' pada tombol
        showButton.addEventListener('click', function(event) {
            
            // Mencegah link anchor (#) melompat secara tiba-tiba
            event.preventDefault();

            // 1. Tampilkan bagian petunjuk.
            // Kita gunakan 'flex' karena di CSS diatur sebagai display: flex.
            instructionsSection.style.display = 'flex';

            // 2. Tambahkan kelas 'fade-in' untuk memicu animasi
            instructionsSection.classList.add('fade-in');

            // 3. Sembunyikan tombol "Lanjut Buka Hadiah" setelah diklik
            showButton.parentElement.style.display = 'none';

            // 4. (Opsional) Scroll halaman secara halus ke bagian petunjuk
            instructionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});