// Mengimpor fungsi defineConfig dari Vite
// Fungsi ini digunakan untuk mendefinisikan konfigurasi proyek Vite
import { defineConfig } from 'vite';

// Mengimpor plugin React untuk mendukung penggunaan React pada Vite
import react from '@vitejs/plugin-react';


// Dokumentasi konfigurasi Vite:
// https://vitejs.dev/config/

// Mengekspor konfigurasi Vite sebagai konfigurasi utama proyek
export default defineConfig({

  // Menambahkan plugin React ke dalam konfigurasi Vite
  plugins: [react()],

  // Mengatur konfigurasi server development Vite
  server: {

    // Mengizinkan server diakses dari semua alamat jaringan
    // Berguna agar aplikasi dapat berjalan dan diakses melalui Replit
    host: '0.0.0.0',
  }
})
