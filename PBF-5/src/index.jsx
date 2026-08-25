// Mengimpor library React
import React from 'react'

// Mengimpor ReactDOM untuk menampilkan aplikasi React ke halaman HTML
import ReactDOM from 'react-dom/client'

// Mengimpor komponen AppState yang berisi contoh penggunaan useState
import AppState from './AppState'

// Mengimpor komponen AppEffect yang berisi contoh penggunaan useEffect
import AppEffect from './AppEffect'

// Mengimpor komponen AppCustomHook yang berisi contoh penggunaan Custom Hook
import AppCustomHook from './AppCustomHook'


// Mencari elemen HTML dengan id "root"
// Kemudian membuat root React sebagai tempat aplikasi ditampilkan
ReactDOM.createRoot(document.getElementById('root')).render(

  // StrictMode digunakan untuk membantu mendeteksi potensi masalah
  // pada aplikasi selama proses pengembangan
  <React.StrictMode>

    {/* Menampilkan komponen AppCustomHook sebagai halaman utama */}
    <AppCustomHook />

  </React.StrictMode>
)
