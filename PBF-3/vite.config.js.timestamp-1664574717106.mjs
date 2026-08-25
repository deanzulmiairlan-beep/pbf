// Mengimpor fungsi defineConfig dari Vite untuk membuat konfigurasi
import { defineConfig } from 'vite';

// Mengimpor plugin React agar Vite dapat menjalankan project React
import react from '@vitejs/plugin-react';

// Referensi dokumentasi konfigurasi Vite
// https://vitejs.dev/config/

// Mengekspor konfigurasi utama Vite
export default defineConfig({

  // Menambahkan plugin React ke project
  plugins: [react()],

  // Mengatur konfigurasi server development
  server: {

    // Mengizinkan server diakses melalui semua alamat jaringan
    host: '0.0.0.0',
  }
})
