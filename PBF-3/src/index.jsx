// Mengimpor library React
import React from 'react'

// Mengimpor ReactDOM untuk menampilkan aplikasi React ke halaman HTML
import ReactDOM from 'react-dom/client'

// Mengimpor komponen App dari file App
import App from './App'

// Mengimpor komponen AppFunc dari file AppFunc
import AppFunc from './AppFunc'

// Mengimpor komponen AppClass dari file AppClass
import AppClass from './AppClass'


// Membuat root React pada elemen HTML yang memiliki id "root"
// Kemudian menampilkan aplikasi React ke halaman
ReactDOM.createRoot(document.getElementById('root')).render(

  // StrictMode digunakan untuk membantu mendeteksi masalah pada aplikasi saat pengembangan
  <React.StrictMode>

    {/* Menampilkan komponen AppClass */}
    <AppClass />

  </React.StrictMode>
)
