// Mengimpor createStore dari library Redux
// createStore digunakan untuk membuat Redux Store
import { createStore } from "redux";


// Membuat state awal aplikasi
const initialState = {

  // Menyediakan array kosong untuk menyimpan daftar todo
  todos: []
};


// Membuat reducer untuk mengatur perubahan state
// state adalah data saat ini
// type menentukan jenis action
// payload membawa data yang diperlukan oleh action
const reducers = (state, { type, payload }) => {

  // Memeriksa jenis action yang dikirim
  switch (type) {

    // Menangani action untuk menambahkan todo
    case "ADD_TODO":
      return {

        // Menyalin seluruh state sebelumnya
        ...state,

        // Menyalin todo sebelumnya dan menambahkan todo baru
        todos: [...state.todos, payload]
      };


    // Menangani action untuk mengubah status todo
    case "TOGGLE_TODO":
      return {

        // Menyalin seluruh state sebelumnya
        ...state,

        // Melakukan perulangan pada setiap todo
        todos: state.todos.map(todo =>

          // Jika ID todo sama dengan payload,
          // ubah nilai complete menjadi kebalikannya
          todo.id === payload
            ? { ...todo, complete: !todo.complete }

            // Jika ID tidak sama, todo tetap dikembalikan tanpa perubahan
            : todo
        )
      };


    // Menangani action untuk menghapus todo
    case "DELETE_TODO":
      return {

        // Menyalin seluruh state sebelumnya
        ...state,

        // Menyaring todo dan menghapus todo yang memiliki ID
        // sama dengan ID pada payload
        todos: state.todos.filter(todo => todo.id !== payload)
      };


    // Jika action tidak dikenali, kembalikan state sebelumnya
    default:
      return state;
  }
};


// Membuat dan mengekspor Redux Store
export const store = createStore(

  // Menggunakan reducers untuk mengatur perubahan state
  reducers,

  // Menggunakan initialState sebagai state awal
  initialState,

  // Menghubungkan Redux DevTools jika tersedia pada browser
  window.devToolsExtension && window.devToolsExtension()
);


// ====================
// ACTION CREATORS
// ====================


// Membuat action untuk menambahkan todo
export const addTodoAction = todo => ({

  // Menentukan jenis action
  type: "ADD_TODO",

  // Mengirim data todo sebagai payload
  payload: todo
});


// Membuat action untuk mengubah status todo
export const toggleTodoAction = todoID => ({

  // Menentukan jenis action
  type: "TOGGLE_TODO",

  // Mengirim ID todo sebagai payload
  payload: todoID
});


// Membuat action untuk menghapus todo
export const deleteTodoAction = todoID => ({

  // Menentukan jenis action
  type: "DELETE_TODO",

  // Mengirim ID todo sebagai payload
  payload: todoID
});
