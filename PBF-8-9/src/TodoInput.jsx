// Mengimpor React dan useState untuk mengelola state pada komponen
import React, { useState } from "react";

// Mengimpor useDispatch dan useSelector dari React Redux
import { useDispatch, useSelector } from "react-redux";

// Mengimpor fungsi uuid untuk membuat ID unik
import { v4 as uuid } from "uuid";

// Mengimpor action addTodoAction dari file redux
import { addTodoAction } from "./redux";


// Membuat komponen TodoInput menggunakan arrow function
const TodoInput = () => {

  // Mengambil data todos dari Redux store
  const todos = useSelector(state => state.todos);

  // Membuat state todo untuk menyimpan nilai yang diketik pada input
  const [todo, setTodo] = useState("");

  // Mengambil fungsi dispatch untuk mengirim action ke Redux store
  const dispatch = useDispatch();

  // Membuat fungsi untuk mengirim action penambahan todo
  const addTodo = todo => dispatch(addTodoAction(todo));


  // Fungsi yang dijalankan ketika isi input berubah
  const onChange = e => {

    // Menyimpan nilai terbaru dari input ke state todo
    setTodo(e.target.value);
  };


  // Fungsi yang dijalankan ketika form dikirim
  const onSubmit = e => {

    // Mencegah halaman melakukan refresh saat form disubmit
    e.preventDefault();

    // Memeriksa apakah input todo kosong
    if (todo.trim() === "") {

      // Menampilkan peringatan jika input masih kosong
      alert("Please input todo");

    } else {

      // Menambahkan todo baru ke Redux store
      addTodo({

        // Membuat ID unik untuk setiap todo
        id: uuid(),

        // Menyimpan isi todo yang dimasukkan pengguna
        name: todo,

        // Menentukan status awal todo belum selesai
        complete: false
      });
    }

    // Mengosongkan input setelah proses submit
    setTodo("");
  };


  // Menampilkan form input todo
  return (
    <form onSubmit={onSubmit}>

      {/* Menampilkan jumlah todo yang tersimpan */}
      <h3>You have {todos.length} todos</h3>

      {/* Input untuk memasukkan todo baru */}
      <input
        type="text"
        placeholder="add todo"
        value={todo}
        onChange={onChange}
      />

      {/* Tombol untuk menambahkan todo */}
      <button type="submit">Add Todo</button>

    </form>
  );
};


// Mengekspor komponen TodoInput agar dapat digunakan pada file lain
export default TodoInput;
