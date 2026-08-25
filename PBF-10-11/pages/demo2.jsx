// Mengimpor useEffect dan useState dari React
// useState digunakan untuk menyimpan data
// useEffect digunakan untuk menjalankan proses setelah komponen dirender
import { useEffect, useState } from 'react'


// Membuat dan mengekspor komponen halaman Home
export default function Home() {

  // Membuat state comments dengan nilai awal berupa array kosong
  // setComments digunakan untuk memperbarui data comments
  const [comments, setComments] = useState([]);


  // useEffect dijalankan setelah komponen pertama kali dirender
  useEffect(

    // Fungsi yang dijalankan oleh useEffect
    () => {

      // Mengambil data dari API internal Next.js
      fetch('/api/get-comment')

        // Mengubah response API menjadi format JSON
        .then(res => res.json())

        // Menyimpan data hasil API ke dalam state comments
        .then(data => setComments(data));
    },

    // Array dependency kosong berarti useEffect hanya dijalankan sekali
    // saat komponen pertama kali dimuat
    []
  );


  // Menampilkan tampilan halaman
  return (

    // Membuat tabel untuk menampilkan data komentar
    <table>

      {/* Bagian header tabel */}
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Comment</th>
        </tr>
      </thead>


      {/* Bagian isi tabel */}
      <tbody>

        {/* 
          Melakukan perulangan pada seluruh data comments
          menggunakan fungsi map()
        */}
        {
          comments.map(comment => (

            // Membuat satu baris tabel untuk setiap komentar
            // key menggunakan ID unik dari komentar
            <tr key={comment.id}>

              {/* Menampilkan ID komentar */}
              <td>{comment.id}</td>

              {/* Menampilkan nama pengirim komentar */}
              <td>{comment.name}</td>

              {/* Menampilkan email pengirim komentar */}
              <td>{comment.email}</td>

              {/* Menampilkan isi komentar */}
              <td>{comment.body}</td>

            </tr>
          ))
        }

      </tbody>
    </table>
  )
}
