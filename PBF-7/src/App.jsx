// Mengimpor library React
import React from 'react';

// Mengimpor komponen Typography dari Material UI untuk menampilkan teks
import Typography from '@mui/material/Typography';

// Mengimpor komponen TodoForm untuk menambahkan todo baru
import TodoForm from './components/TodoForm';

// Mengimpor komponen TodoList untuk menampilkan daftar todo
import TodoList from './components/TodoList';

// Mengimpor custom hook useTodoState untuk mengelola data todo
import useTodoState from './hooks/useTodoState';

// Mengimpor file CSS untuk mengatur tampilan aplikasi
import './App.css';


// Membuat dan mengekspor komponen utama aplikasi
export default function App() {

  // Mengambil data todos serta fungsi untuk menambah dan menghapus todo
  // Array kosong [] digunakan sebagai nilai awal daftar todo
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  // Mengembalikan tampilan aplikasi
  return (
    
    // Membuat container utama dengan class App
    <div className="App">

      {/* Menampilkan judul aplikasi menggunakan Typography dari Material UI */}
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      {/* Menampilkan komponen form untuk menambahkan todo */}
      <TodoForm

        // Mengirim fungsi saveTodo sebagai props ke TodoForm
        saveTodo={todoText => {

          // Menghapus spasi kosong di awal dan akhir teks
          const trimmedText = todoText.trim();

          // Memastikan teks tidak kosong sebelum ditambahkan
          if (trimmedText.length > 0) {

            // Menambahkan todo baru ke dalam daftar
            addTodo(trimmedText);
          }
        }}
      />

      {/* Menampilkan daftar todo dan mengirim data serta fungsi hapus */}
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo} 
      />

    </div>
  );
}
