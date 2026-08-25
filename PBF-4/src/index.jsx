// Mengimpor library React
import React from 'react'

// Mengimpor ReactDOM untuk menampilkan aplikasi React ke halaman HTML
import ReactDOM from 'react-dom/client'

// Mengimpor komponen utama App
import App from './App'


// Mencari elemen HTML dengan id "root"
// Kemudian membuat root React sebagai tempat aplikasi ditampilkan
ReactDOM.createRoot(document.getElementById('root')).render(

  // StrictMode digunakan untuk membantu mendeteksi potensi masalah
  // pada aplikasi selama proses pengembangan
  <React.StrictMode>

    {/* Menampilkan komponen utama App */}
    <App />

  </React.StrictMode>
)
