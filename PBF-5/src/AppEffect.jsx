// Mengimpor file CSS untuk mengatur tampilan aplikasi
import './App.css'

// Mengimpor React serta useState dan useEffect untuk menggunakan React Hook
import React, { useState, useEffect } from 'react';

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

  // Menentukan jumlah kata yang digabungkan menjadi tiga kata
  length: 3,
};


// Membuat dan mengekspor komponen AppEffect
export default function AppEffect() {

  // Membuat state untuk menyimpan nama acak
  const [randomName, setRandomName] = useState();

  // Membuat state untuk menghitung jumlah nama yang berhasil dibuat
  // Nilai awal penghitung adalah 0
  const [generateCount, setGenerateCount] = useState(0);


  // useEffect akan dijalankan ketika nilai randomName berubah
  useEffect(() => {

    // Memastikan nama acak sudah memiliki nilai
    if (randomName) {

      // Menambahkan jumlah generate sebanyak 1
      setGenerateCount(generateCount + 1);
    }

  // useEffect bergantung pada perubahan nilai randomName
  }, [randomName]);


  // Membuat fungsi untuk menghasilkan nama secara acak
  function generateRandomName() {

    // Menghasilkan nama berdasarkan konfigurasi customConfig
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

      {/* Menampilkan nama acak jika randomName sudah memiliki nilai */}
      {
        randomName && <h3>{randomName}</h3>
      }

      {/* Membuat tombol untuk menghasilkan nama acak */}
      <button

        {/* Mengatur posisi tombol agar berada di tengah */}
        style={{ alignSelf: 'center' }}

        {/* Menjalankan fungsi generateRandomName ketika tombol diklik */}
        onClick={generateRandomName}
      >
        Generate Random Name
      </button>

      {/* Menampilkan jumlah berapa kali nama telah di-generate */}
      <p>Digenerate sebanyak {generateCount} kali</p>

    </main>
  );
}
