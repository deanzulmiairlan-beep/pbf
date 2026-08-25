// Mengimpor library Axios untuk melakukan request ke API
import axios from "axios";


// Membuat dan mengekspor fungsi handler secara asynchronous
// Fungsi ini menerima request (req) dan response (res)
export default async function handler(req, res) {

  // Melakukan request GET ke API JSONPlaceholder
  // untuk mengambil data komentar dari post dengan ID 1
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1/comments',

    // Menambahkan konfigurasi request
    {
      headers: {

        // Mengatur format encoding yang dapat diterima
        "Accept-Encoding": "*",
      },
    }
  );

  // Mengirimkan response dengan status HTTP 200 (berhasil)
  // Data yang dikirim berasal dari hasil request API
  res.status(200).json(response.data);
}
