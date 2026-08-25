// Mengimpor file CSS untuk mengatur tampilan aplikasi
import './App.css'

// Mengimpor React dan useState untuk mengelola state
import React, { useState } from 'react';

// Mengimpor library untuk membuat nama acak beserta kumpulan kata yang digunakan
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals
} from 'unique-names-generator';


// Membuat konfigurasi untuk menghasilkan nama acak
const customConfig = {

  // Menentukan kumpulan kata yang digunakan untuk membuat nama
  dictionaries: [adjectives, colors, animals],

  // Menentukan pemisah antar kata menggunakan spasi
  separator: ' ',

  // Menentukan jumlah kata yang digabungkan menjadi 3 kata
  length: 3,
};


// Membuat dan mengekspor komponen AppState
export default function AppState() {

  // Membuat state randomName untuk menyimpan nama acak
  // Nilai awal belum ditentukan atau undefined
  const [randomName, setRandomName] = useState();


  // Membuat fungsi untuk menghasilkan nama secara acak
  function generateRandomName() {

    // Membuat nama acak berdasarkan konfigurasi customConfig
    const generatedName = uniqueNamesGenerator(customConfig);

    // Menyimpan nama yang dihasilkan ke dalam state randomName
    setRandomName(generatedName);
  }


  // Mengembalikan tampilan aplikasi
  return (
    <main>

      {/* Menampilkan judul utama */}
      <h1>Belajar React Hook</h1>

      {/* Menampilkan deskripsi aplikasi */}
      <p>Random Name Generator</p>

      {
        // Jika randomName memiliki nilai, maka tampilkan nama tersebut
        randomName && <h3>{randomName}</h3>
      }

      {/* Membuat tombol untuk menghasilkan nama acak */}
      <button

        // Mengatur posisi tombol agar berada di tengah
        style={{ alignSelf: 'center' }}

        // Menjalankan fungsi generateRandomName saat tombol diklik
        onClick={generateRandomName}
      >
        Generate Random Name
      </button>

    </main>
  );
}
