// Mengimpor file CSS App.css untuk memberikan style pada komponen
import './App.css'

// Membuat dan mengekspor komponen fungsi bernama App
export default function App() {

  // Membuat elemen JSX berupa heading dengan teks Hello, world
  const element = <h1>Hello, world</h1>;

  // Mengembalikan tampilan yang akan ditampilkan oleh komponen App
  return (

    // Elemen utama untuk membungkus seluruh isi halaman
    <main>

      {/* Menampilkan heading tingkat 2 */}
      <h2>Belajar menggunakan JSX pada React</h2>

      {/* Membuat bagian header */}
      <header>

        {/* Menampilkan heading tingkat 1 */}
        <h1>Belajar menggunakan JSX pada React</h1>

        {/* Menampilkan paragraf */}
        <p>Tutorial Reactjs untuk Pemula</p>

      {/* Menutup elemen header */}
      </header>

    {/* Menutup elemen main */}
    </main>
  )
}
