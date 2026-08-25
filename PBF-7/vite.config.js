// Mengimpor fungsi defineConfig dari Vite untuk membuat konfigurasi project
import { defineConfig } from 'vite';

// Mengimpor plugin React agar Vite dapat mendukung aplikasi React
import react from '@vitejs/plugin-react';

// Link dokumentasi konfigurasi Vite
// https://vitejs.dev/config/

// Mengekspor konfigurasi utama yang akan digunakan oleh Vite
export default defineConfig({

  // Menambahkan plugin React ke dalam konfigurasi project
  plugins: [react()],

  // Mengatur konfigurasi server saat project dijalankan
  server: {

    // Mengatur host menjadi 0.0.0.0 agar server dapat diakses melalui jaringan
    host: '0.0.0.0',

  }
})
