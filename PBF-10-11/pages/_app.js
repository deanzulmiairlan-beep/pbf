// Mengimpor file CSS global yang digunakan untuk seluruh halaman aplikasi
import '../styles/globals.css'


// Membuat komponen utama MyApp
// Component berisi komponen halaman yang sedang ditampilkan
// pageProps berisi data atau props yang dikirimkan ke halaman tersebut
function MyApp({ Component, pageProps }) {

  // Menampilkan halaman/komponen yang sedang aktif
  // ...pageProps digunakan untuk meneruskan seluruh props ke Component
  return <Component {...pageProps} />
}


// Mengekspor MyApp sebagai komponen utama aplikasi
export default MyApp
