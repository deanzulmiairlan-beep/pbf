// Mengimpor library React
import React from 'react'

// Mengimpor ReactDOM untuk menampilkan aplikasi React ke halaman HTML
import ReactDOM from 'react-dom/client'

// Mengimpor komponen App dari file App
import App from './App'

// Mengimpor komponen AppRouter yang berisi pengaturan halaman dan routing
import AppRouter from './AppRouter'


// Mencari elemen HTML dengan id "root"
// Kemudian membuat root React sebagai tempat aplikasi ditampilkan
ReactDOM.createRoot(document.getElementById('root')).render(

  // StrictMode digunakan untuk membantu mendeteksi potensi masalah saat pengembangan
  <React.StrictMode>

    {/* Menampilkan komponen AppRouter sebagai komponen utama */}
    <AppRouter />

  </React.StrictMode>
)
