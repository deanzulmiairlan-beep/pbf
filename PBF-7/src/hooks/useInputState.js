// Mengimpor useState dari library React
import { useState } from 'react';


// Membuat dan mengekspor custom hook menggunakan arrow function
export default () => {

  // Membuat state untuk menyimpan nilai input
  // Nilai awal dari value adalah string kosong
  const [value, setValue] = useState('');

  // Mengembalikan object yang berisi value, onChange, dan reset
  return {

    // Mengembalikan nilai input saat ini
    value,

    // Fungsi yang dijalankan ketika nilai input berubah
    onChange: event => {

      // Mengambil nilai dari input dan menyimpannya ke state
      setValue(event.target.value);
    },

    // Fungsi untuk mengosongkan atau mereset nilai input
    reset: () => setValue('')
  };
};
