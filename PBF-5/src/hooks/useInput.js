// Mengimpor useState dari library React
import { useState } from 'react';


// Membuat dan mengekspor custom hook bernama useInput
// initialValue digunakan sebagai nilai awal input
export default function useInput(initialValue) {

  // Membuat state value untuk menyimpan nilai input
  // setValue digunakan untuk mengubah nilai input
  const [value, setValue] = useState(initialValue);


  // Membuat fungsi reset untuk mengembalikan nilai input ke nilai awal
  const reset = () => {

    // Mengubah nilai input kembali menjadi initialValue
    setValue(initialValue);
  };


  // Membuat object bind yang berisi properti untuk digunakan pada elemen input
  const bind = {

    // Memberikan nilai dari state ke elemen input
    value,

    // Menjalankan fungsi ketika isi input berubah
    onChange: e => {

      // Mengambil nilai terbaru dari input dan menyimpannya ke state
      setValue(e.target.value);
    }
  };


  // Mengembalikan nilai input, properti bind, dan fungsi reset dalam bentuk array
  return [value, bind, reset];
}
