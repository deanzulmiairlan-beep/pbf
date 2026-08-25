// Mengimpor file CSS untuk mengatur tampilan aplikasi
import './App.css'

// Mengimpor library untuk membuat nama acak
// beserta kumpulan kata adjectives, colors, dan animals
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals
} from 'unique-names-generator';


// Membuat dan mengekspor komponen utama App
export default function App() {
  return (
    <main>

      {/* Menampilkan judul utama */}
      <h3>Belajar React</h3>

      {/* Memanggil contoh penanganan event */}
      {/*<EventExample />*/}

      {/* Memanggil contoh pembuatan nama acak */}
      {/*<GenerateRandomName />*/}

      {/* Memanggil contoh conditional rendering */}
      {/*<ConditionalExample isLoading={false} />*/}

      {/* Memanggil contoh menampilkan data list menggunakan key */}
      <ListKeyExample />

    </main>
  )
}


// Membuat komponen untuk menampilkan daftar produk
function ListKeyExample() {

  // Membuat data produk telepon dalam bentuk array of object
  const phoneData = [
    { name: "iPhone X", price: 10000000, discount: 50 },
    { name: "Oppo Find X", price: 14000000, discount: 30 },
    { name: "Redmi Note X", price: 5000000, discount: 42 },
    { name: "Vivo XYZ", price: 10000000, discount: 0 },
  ];

  return (
    <div>

      {/* Melakukan perulangan terhadap setiap data produk */}
      {
        phoneData.map(data => {
          return (

            // Memanggil komponen Product untuk setiap data
            <Product

              // Memberikan key unik untuk setiap elemen hasil perulangan
              key={data.name}

              // Mengirim nama produk sebagai props
              name={data.name}

              // Mengirim harga produk sebagai props
              price={data.price}

              // Mengirim diskon produk sebagai props
              discount={data.discount}
            />
          )
        })
      }

    </div>
  )
}


// Membuat komponen Product untuk menampilkan informasi produk
function Product({ name, price, discount = 0 }) {
  return (
    <div>

      {/* Menampilkan nama produk */}
      <h2>{name}</h2>

      {/* Menampilkan harga awal dan diskon jika diskon lebih dari 0 */}
      {discount > 0 && (
        <p>
          <s>Rp {price}</s> ({discount}%)
        </p>
      )}

      <p>
        <b>

          {/* Menghitung dan menampilkan harga setelah diskon */}
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}

        </b>
      </p>

      {/* Membuat garis pemisah antar produk */}
      <hr />

    </div>
  );
}


// Membuat komponen untuk contoh conditional rendering
function ConditionalExample(props) {

  // Jika isLoading bernilai true, tampilkan LoadingView
  if (props.isLoading) {
    return <LoadingView />

  // Jika isLoading bernilai false, tampilkan LoggedView
  } else {
    return <LoggedView />
  }
}


// Membuat komponen tampilan ketika data sedang dimuat
function LoadingView() {
  return (
    <h2>Loading...</h2>
  )
}


// Membuat komponen tampilan setelah proses loading selesai
function LoggedView() {

  // Membuat nama acak menggunakan tiga kumpulan kata
  const random = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals]
  });

  // Menampilkan pesan selamat datang beserta nama acak
  return <h2>Welcome {random}</h2>
}


// Membuat komponen untuk menghasilkan nama acak
function GenerateRandomName() {

  // Membuat variabel untuk menyimpan nama acak
  let randomName


  // Membuat fungsi untuk menghasilkan nama acak
  function createRandomName() {

    // Menghasilkan nama acak dari adjectives, colors, dan animals
    randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals]
    });

    // Menampilkan nama acak dalam alert
    alert(`Random Name: ${randomName}`)
  }


  return (

    // Menampilkan tombol untuk menjalankan fungsi createRandomName
    <button onClick={createRandomName}>
      Generate Random Name
    </button>
  )
}


// Membuat komponen untuk contoh penanganan event
function EventExample() {

  // Membuat variabel untuk menyimpan nilai email
  let email = ""


  // Membuat fungsi yang dijalankan ketika tombol diklik
  function handleClick() {

    // Menampilkan nilai email menggunakan alert
    alert('Email: ' + email)
  }


  // Membuat fungsi yang dijalankan ketika nilai input berubah
  function handleChange(event) {

    // Mengambil nilai dari input dan menyimpannya ke variabel email
    email = event.target.value;
  }


  return (
    <div>

      {/* Menampilkan judul contoh event */}
      <h4>Menangani Event</h4>

      {/* Input email yang menjalankan handleChange saat nilainya berubah */}
      <input
        onChange={(event) => {
          handleChange(event)
        }}
        type="email"
      />

      {/* Tombol yang menjalankan handleClick saat diklik */}
      <button
        onClick={() => {
          handleClick()
        }}
      >
        Tampilkan Email
      </button>

    </div>
  )
}
