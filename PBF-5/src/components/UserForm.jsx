// Mengimpor library React
import React from 'react';

// Mengimpor custom hook useInput untuk mengelola nilai input
import useInput from '../hooks/useInput';


// Membuat dan mengekspor komponen UserForm
export default function UserForm() {

  // Menggunakan custom hook useInput untuk mengelola input First Name
  // Nilai awal First Name adalah "Hendra"
  const [firstName, bindFirstName, resetFirstName] = useInput('Hendra');

  // Menggunakan custom hook useInput untuk mengelola input Last Name
  // Nilai awal Last Name adalah "Permana"
  const [lastName, bindLastName, resetLastName] = useInput('Permana');

  // Membuat state title dengan nilai awal string kosong
  // State ini digunakan untuk menampilkan hasil setelah form dikirim
  const [title, setTitle] = React.useState('');


  // Membuat fungsi yang dijalankan ketika form dikirim
  const submitHandler = e => {

    // Mencegah halaman melakukan refresh saat form disubmit
    e.preventDefault();

    // Mengubah title menjadi sapaan yang berisi First Name dan Last Name
    setTitle(`Hello ${firstName} ${lastName}`);

    // Mengembalikan nilai First Name ke nilai awal menggunakan fungsi reset
    resetFirstName();

    // Mengembalikan nilai Last Name ke nilai awal menggunakan fungsi reset
    resetLastName();
  };


  // Mengembalikan tampilan komponen
  return (

    // Fragment digunakan agar dapat mengelompokkan beberapa elemen
    // tanpa menambahkan elemen HTML baru
    <>
      {/* Menampilkan isi dari state title */}
      <h3>{title}</h3>

      {/* Membuat form dan menjalankan submitHandler saat form dikirim */}
      <form onSubmit={submitHandler}>

        <div>
          {/* Memberikan label untuk input First Name */}
          <label>First Name</label>

          <input
            {/* Menyebarkan properti dari bindFirstName ke elemen input */}
            {...bindFirstName}

            {/* Menentukan tipe input sebagai teks */}
            type='text'
          />
        </div>

        <div>
          {/* Memberikan label untuk input Last Name */}
          <label>Last Name</label>

          <input
            {/* Menyebarkan properti dari bindLastName ke elemen input */}
            {...bindLastName}

            {/* Menentukan tipe input sebagai teks */}
            type='text'
          />
        </div>

        {/* Membuat tombol untuk mengirim form */}
        <button>Submit</button>

      </form>
    </>
  );
}
