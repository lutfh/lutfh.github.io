// Atur tanggal tujuan countdown
const targetDate = new Date('2025-09-27T00:00:00');

// Ambil elemen dari HTML untuk diupdate
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const countdownTimerEl = document.getElementById('countdown-timer');

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    // Jika waktu sudah lewat
    if (diff <= 0) {
        countdownTimerEl.innerHTML = "Waktu Telah Tiba";
        document.querySelector('.labels').style.display = 'none'; // Sembunyikan label
        clearInterval(intervalId); // Hentikan countdown
        return;
    }

    // Kalkulasi waktu
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Tambahkan nol di depan jika angka < 10
    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    // Update tampilan di HTML
    daysEl.textContent = formattedDays;
    hoursEl.textContent = formattedHours;
    minutesEl.textContent = formattedMinutes;
    secondsEl.textContent = formattedSeconds;
}

// Jalankan fungsi pertama kali agar tidak ada jeda
updateCountdown();

// Jalankan fungsi setiap 1 detik (1000 ms)
const intervalId = setInterval(updateCountdown, 1000);
