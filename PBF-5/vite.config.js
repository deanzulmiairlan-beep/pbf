// Mengimpor fungsi defineConfig dari Vite untuk membuat konfigurasi project
import { defineConfig } from 'vite';

// Mengimpor plugin React agar Vite dapat mendukung aplikasi React
import react from '@vitejs/plugin-react';

// Referensi dokumentasi konfigurasi Vite
// https://vitejs.dev/config/

// Mengekspor konfigurasi utama Vite
export default defineConfig({

  // Menambahkan plugin React ke dalam konfigurasi Vite
  plugins: [react()],

  // Mengatur konfigurasi server development
  server: {

    // Mengatur host menjadi 0.0.0.0 agar server dapat diakses dari jaringan
    host: '0.0.0.0',

  }

})
