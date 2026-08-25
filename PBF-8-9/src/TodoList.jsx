// Mengimpor library React
import React from "react";

// Mengimpor useDispatch dan useSelector untuk menggunakan Redux Hooks
import { useDispatch, useSelector } from "react-redux";

// Mengimpor action untuk mengubah status dan menghapus todo
import { toggleTodoAction, deleteTodoAction } from "./redux";


// Membuat komponen TodoList menggunakan arrow function
const TodoList = () => {

  // Mengambil data todos dari Redux store
  const todos = useSelector(state => state.todos);

  // Mengambil fungsi dispatch untuk mengirim action ke Redux store
  const dispatch = useDispatch();

  // Membuat fungsi untuk mengubah status todo selesai atau belum selesai
  const toggleTodo = todoID => dispatch(toggleTodoAction(todoID));

  // Membuat fungsi untuk menghapus todo berdasarkan ID
  const deleteTodo = todoID => dispatch(deleteTodoAction(todoID));


  // Melakukan perulangan pada data todos untuk membuat tampilan daftar todo
  const renderTodos = todos.map(({ id, name, complete }) => (

    // Membuat setiap todo menjadi elemen list dengan key berupa ID unik
    <li key={id}>

      {/* Checkbox untuk menampilkan dan mengubah status todo */}
      <input
        type="checkbox"

        // Menentukan status checkbox berdasarkan nilai complete
        checked={complete}

        // Menjalankan fungsi toggleTodo untuk mengubah status todo
        // bind digunakan untuk mengirim ID todo ke fungsi
        onChange={toggleTodo.bind(null, id)}
      />

      {/* Menampilkan nama todo */}
      <span className={complete ? "complete" : null}>
        {name}
      </span>

      {/* Tombol untuk menghapus todo berdasarkan ID */}
      <span
        className="delete-btn"
        onClick={deleteTodo.bind(null, id)}
      >
        X
      </span>

    </li>
  ));


  // Mengembalikan tampilan komponen TodoList
  return (
    <>

      {/* Menampilkan judul daftar todo */}
      <h4>Todo List</h4>

      {/* 
        Menampilkan daftar todo jika terdapat data.
        Jika belum ada todo, menampilkan pesan "No todo list yet".
      */}
      <ul>
        {renderTodos.length > 0 ? renderTodos : "No todo list yet"}
      </ul>

    </>
  );
};


// Mengekspor komponen TodoList agar dapat digunakan pada file lain
export default TodoList;
