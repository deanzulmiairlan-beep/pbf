// Mengimpor library React
import React from 'react'

// Mengimpor ReactDOM untuk menampilkan aplikasi React ke halaman HTML
import ReactDOM from 'react-dom/client'

// Mengimpor komponen utama App dari file App
import App from './App'


// Mencari elemen HTML dengan id "root"
// Kemudian membuat root React dan menampilkan aplikasi
ReactDOM.createRoot(document.getElementById('root')).render(

  // StrictMode digunakan untuk membantu mendeteksi masalah pada aplikasi saat pengembangan
  <React.StrictMode>

    {/* Menampilkan komponen utama App */}
    <App />

  </React.StrictMode>
)
