// Membuat dan mengekspor komponen Demo1
// Props digunakan untuk menerima data comments dari getServerSideProps
export default function Demo1(props) {
  return (

    // Membuat tabel untuk menampilkan data komentar
    <table>

      {/* Bagian header tabel */}
      <thead>
        <tr>

          {/* Kolom ID */}
          <th>ID</th>

          {/* Kolom nama */}
          <th>Name</th>

          {/* Kolom email */}
          <th>Email</th>

          {/* Kolom isi komentar */}
          <th>Comment</th>

        </tr>
      </thead>

      {/* Bagian isi tabel */}
      <tbody>

        {/* 
          Melakukan perulangan pada data comments.

          Optional chaining (?.) digunakan agar tidak terjadi error
          apabila props.comments belum tersedia atau bernilai undefined.
        */}
        {
          props.comments?.map(comment => (

            // Membuat satu baris tabel untuk setiap data komentar
            // key menggunakan ID unik dari setiap komentar
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


// Fungsi getServerSideProps dijalankan di server
// sebelum halaman dikirim dan ditampilkan kepada pengguna
export async function getServerSideProps(context) {

  // Melakukan request ke API untuk mengambil data komentar
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/2/comments'
  );

  // Mengubah hasil response dari API ke format JSON
  const comments = await res.json();


  // Mengirim data comments sebagai props ke komponen Demo1
  return {
    props: {
      comments
    }
  }
}
