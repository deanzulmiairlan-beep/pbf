// Mengimpor library React
import React from 'react'

// Mengimpor ReactDOM untuk menampilkan aplikasi React ke halaman HTML
import ReactDOM from 'react-dom/client'

// Mengimpor komponen utama App
import App from './App'

// Mengimpor Provider dari React Redux
// Provider digunakan untuk menyediakan Redux Store kepada seluruh komponen aplikasi
import { Provider } from "react-redux";

// Mengimpor store dari file redux
import { store } from "./redux";


// Membuat root React pada elemen HTML yang memiliki id "root"
ReactDOM.createRoot(document.getElementById('root')).render(

  // StrictMode digunakan untuk membantu mendeteksi potensi masalah
  // selama proses pengembangan aplikasi
  <React.StrictMode>

    {/* 
      Provider membungkus komponen App agar seluruh komponen di dalamnya
      dapat mengakses Redux Store
    */}
    <Provider store={store}>

      {/* Menampilkan komponen utama aplikasi */}
      <App />

    </Provider>

  </React.StrictMode>
)
