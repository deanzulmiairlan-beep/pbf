// Mengimpor file CSS untuk mengatur tampilan aplikasi
import './App.css'

// Mengimpor axios untuk melakukan request atau mengambil data dari API
import axios from 'axios'

// Mengimpor library React
import React from 'react'


// Membuat dan mengekspor komponen utama aplikasi
export default function App() {

  // Membuat state isLoading dengan nilai awal false
  // State ini digunakan untuk mengetahui apakah data sedang dimuat
  const [isLoading, setLoading] = React.useState(false);

  // Membuat state photos dengan nilai awal berupa array kosong
  // State ini digunakan untuk menyimpan data foto dari API
  const [photos, setPhotos] = React.useState([])


  // Membuat fungsi asynchronous untuk mengambil data foto dari API
  async function loadPhotos() {

    // Mengubah status loading menjadi true saat proses pengambilan data dimulai
    setLoading(true)

    // Mengambil data dari API menggunakan axios dengan metode GET
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/albums/1/photos'
    )

    // Menyimpan data hasil dari API ke dalam state photos
    setPhotos(response.data);

    // Mengubah status loading menjadi false setelah data selesai dimuat
    setLoading(false)
  }


  // useEffect dijalankan setelah komponen pertama kali ditampilkan
  React.useEffect(() => {

    // Memanggil fungsi untuk mengambil data foto dari API
    loadPhotos().then()

  // Array kosong berarti useEffect hanya dijalankan satu kali
  }, [])


  // Jika data masih dimuat, tampilkan tulisan Loading
  if (isLoading) return <h3>Loading...</h3>


  // Mengembalikan tampilan utama aplikasi
  return (
    <main>

      {/* Menampilkan judul halaman */}
      <h2>Belajar React - API & Router</h2>

      {/* Memanggil komponen PhotoList dan mengirimkan data photos sebagai props */}
      <PhotoList photos={photos} />

    </main>
  )
}


// Membuat komponen PhotoList yang menerima data photos sebagai props
function PhotoList({ photos }) {

  // Mengembalikan tampilan daftar foto
  return (
    <div>

      {/* Membuat container untuk baris kumpulan foto */}
      <div className="row">

        {
          // Melakukan perulangan pada setiap data foto
          photos.map(photo => {

            // Mengembalikan tampilan untuk setiap foto
            return (

              // Membuat kolom untuk setiap foto
              // key digunakan sebagai identitas unik setiap elemen
              <div className="column" key={photo.id}>

                {/* Membuat kartu untuk menampilkan informasi foto */}
                <div className="card">

                  {/* Menampilkan nomor atau ID foto */}
                  <h3>Photo {photo.id}</h3>

                  {/* Menampilkan gambar thumbnail dari URL yang diperoleh dari API */}
                  <img
                    src={photo.thumbnailUrl}
                    width="160px"
                    alt={photo.title}
                  />

                  {/* Menampilkan judul foto maksimal 30 karakter */}
                  <p>{photo.title.substring(0, 30)}</p>

                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}
