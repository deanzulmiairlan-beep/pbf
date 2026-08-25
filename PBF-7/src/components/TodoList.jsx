// Mengimpor library React
import React from 'react';

// Mengimpor komponen List dari Material UI untuk membuat daftar
import List from '@mui/material/List';

// Mengimpor ListItem untuk membuat setiap item dalam daftar
import ListItem from '@mui/material/ListItem';

// Mengimpor komponen untuk menempatkan elemen tambahan di bagian kanan ListItem
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';

// Mengimpor komponen untuk menampilkan teks pada ListItem
import ListItemText from '@mui/material/ListItemText';

// Mengimpor Checkbox dari Material UI
import Checkbox from '@mui/material/Checkbox';

// Mengimpor IconButton untuk membuat tombol berbentuk ikon
import IconButton from '@mui/material/IconButton';

// Mengimpor ikon Delete
import DeleteIcon from '@mui/icons-material/Delete';

// Mengimpor ikon DeleteOutlined yang digunakan pada tombol hapus
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


// Membuat komponen TodoList yang menerima data todos dan fungsi deleteTodo sebagai props
const TodoList = ({ todos, deleteTodo }) => (

  // Membuat pembungkus utama
  <div>

    {/* Membuat daftar todo menggunakan komponen List */}
    <List>

      {/* Melakukan perulangan pada setiap data todo */}
      {todos.map((todo, index) => (

        // Membuat satu item untuk setiap todo
        // key digunakan sebagai identitas setiap item
        <ListItem key={index.toString()} dense button>

          {/* Menampilkan checkbox pada setiap todo */}
          <Checkbox tabIndex={-1} disableRipple />

          {/* Menampilkan isi atau teks dari todo */}
          <ListItemText secondary={todo} />

          {/* Menempatkan tombol hapus di bagian kanan item */}
          <ListItemSecondaryAction>

            {/* Membuat tombol berbentuk ikon */}
            <IconButton
              // Memberikan label untuk aksesibilitas
              aria-label="Delete"

              // Menjalankan fungsi saat tombol diklik
              onClick={() => {

                // Menghapus todo berdasarkan nomor index
                deleteTodo(index);
              }}
            >

              {/* Menampilkan ikon hapus dengan tampilan outline */}
              <DeleteOutlinedIcon stroke="red" fill="red" />

            </IconButton>
          </ListItemSecondaryAction>

        </ListItem>
      ))}

    </List>

  </div>
);


// Mengekspor komponen TodoList agar dapat digunakan pada file lain
export default TodoList;
