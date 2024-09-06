<script>
          const progressBars = document.querySelectorAll('.progress-value');
        let progressValues = [0, 0, 0]; // Nilai awal untuk masing-masing progress bar

        function updateProgressBars() {
            progressBars.forEach((bar, index) => {
                bar.style.width = progressValues[index] + '%';
            });
        }

        updateProgressBars(); // Panggil fungsi untuk menginisialisasi progress bar

        // Contoh pembaruan nilai secara acak (bisa diganti dengan logika yang sesuai)
        setInterval(() => {
            progressValues[0] = 80;
            progressValues[1] = 40;
            progressValues[2] = 10;
            updateProgressBars();
        }, 1000);
    </script>