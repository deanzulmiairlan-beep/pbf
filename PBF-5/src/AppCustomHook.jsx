// Mengimpor file CSS untuk mengatur tampilan aplikasi
import './App.css'

// Mengimpor komponen UserForm dari folder components
import UserForm from './components/UserForm'


// Membuat dan mengekspor komponen AppCustomHook
export default function AppCustomHook() {

  // Mengembalikan tampilan komponen
  return (
    // Elemen main digunakan sebagai bagian utama halaman
    <main>

      {/* Menampilkan judul utama halaman */}
      <h1>Belajar React Custom Hook</h1>

      {/* Memanggil dan menampilkan komponen UserForm */}
      <UserForm />

    </main>
  )
}
