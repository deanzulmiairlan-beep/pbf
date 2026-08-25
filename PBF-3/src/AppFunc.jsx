// Mengimpor file CSS App.css untuk memberikan style pada komponen
import './App.css'

// Membuat dan mengekspor function component bernama AppFunc
export default function AppFunc() {

  // Membuat elemen JSX berupa heading dengan teks Hello, world
  const element = <h1>Hello, world</h1>;

  // Mengembalikan tampilan yang akan ditampilkan oleh komponen AppFunc
  return (
    <main>

      {/* Menampilkan heading tingkat 2 */}
      <h2>Belajar menggunakan JSX pada React</h2>

      {/* Memanggil dan menampilkan komponen Header */}
      <Header />

    </main>
  )
}


// Membuat function component bernama Header
function Header() {

  // Mengembalikan tampilan dari komponen Header
  return (
    <div>

      {/* Menampilkan judul utama */}
      <h1>Tutorial Reactjs untuk Pemula</h1>

      {/* Menampilkan informasi bahwa ini menggunakan Function Component */}
      <h2>Function Component</h2>

      {/* Memanggil komponen Message dan mengirimkan data melalui props */}
      <Message sender="dian" content="Hi, Apa kabar?" />

    </div>
  );
}


// Membuat function component bernama Message
// Props digunakan untuk menerima data dari komponen lain
function Message(props) {

  // Mengembalikan tampilan pesan
  return (
    <div>

      {/* Menampilkan nilai sender dari props */}
      <small>{props.sender}:</small>

      {/* Menampilkan isi pesan dari props */}
      <p>{props.content}</p>

      {/* Membuat garis horizontal */}
      <hr />

    </div>
  );
}
