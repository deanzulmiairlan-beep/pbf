// Mengimpor file CSS untuk mengatur tampilan aplikasi
import './App.css'

// Mengimpor komponen TodoInput untuk menambahkan todo
import TodoInput from "./TodoInput";

// Mengimpor komponen TodoList untuk menampilkan daftar todo
import TodoList from "./TodoList";


// Membuat dan mengekspor komponen utama App
export default function App() {
  return (

    // Elemen utama aplikasi dengan className "App"
    <div className="App">

      {/* Menampilkan judul aplikasi */}
      <h1>react-redux-hooks</h1>

      {/* Memanggil komponen untuk input atau menambahkan todo */}
      <TodoInput />

      {/* Memanggil komponen untuk menampilkan daftar todo */}
      <TodoList />

    </div>
  )
}
