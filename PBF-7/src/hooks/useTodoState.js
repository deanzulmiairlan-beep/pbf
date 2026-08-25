// Mengimpor useState dari library React
import { useState } from 'react';


// Membuat dan mengekspor custom hook menggunakan arrow function
// initialValue digunakan sebagai nilai awal daftar todo
export default initialValue => {

  // Membuat state todos untuk menyimpan daftar todo
  // setTodos digunakan untuk memperbarui daftar todo
  const [todos, setTodos] = useState(initialValue);


  // Mengembalikan object yang berisi todos, addTodo, dan deleteTodo
  return {

    // Mengembalikan daftar todo saat ini
    todos,


    // Fungsi untuk menambahkan todo baru
    addTodo: todoText => {

      // Membuat array baru yang berisi semua todo sebelumnya
      // kemudian menambahkan todoText ke dalam daftar
      setTodos([...todos, todoText]);
    },


    // Fungsi untuk menghapus todo berdasarkan index
    deleteTodo: todoIndex => {

      // Membuat array baru dengan menyaring todo
      // Todo yang memiliki index sama dengan todoIndex tidak dimasukkan
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      // Memperbarui state todos dengan daftar yang sudah dihapus
      setTodos(newTodos);
    }
  };
};
