// Mengimpor library React
import React from 'react';

// Mengimpor komponen TextField dari Material UI untuk membuat input
import TextField from '@mui/material/TextField';

// Mengimpor custom hook useInputState untuk mengatur nilai input
import useInputState from '../hooks/useInputState';


// Membuat komponen TodoForm yang menerima fungsi saveTodo sebagai props
const TodoForm = ({ saveTodo }) => {

  // Mengambil value, reset, dan onChange dari custom hook useInputState
  const { value, reset, onChange } = useInputState();

  // Mengembalikan tampilan form
  return (

    // Membuat form untuk menambahkan todo
    <form

      // Menjalankan fungsi ketika form dikirim
      onSubmit={event => {

        // Mencegah halaman melakukan refresh saat form disubmit
        event.preventDefault();

        // Mengirim nilai input ke fungsi saveTodo
        saveTodo(value);

        // Mengosongkan kembali input setelah todo disimpan
        reset();
      }}
    >

      {/* Membuat kolom input menggunakan komponen TextField dari Material UI */}
      <TextField

        // Menentukan tampilan input dengan style outlined
        variant="outlined"

        // Menampilkan teks petunjuk di dalam input
        placeholder="Add todo"

        // Memberikan jarak normal di sekitar komponen
        margin="normal"

        // Menjalankan fungsi onChange saat isi input berubah
        onChange={onChange}

        // Menampilkan nilai input yang tersimpan pada state
        value={value}
      />

    </form>
  );
};


// Mengekspor komponen TodoForm agar dapat digunakan oleh file lain
export default TodoForm;
