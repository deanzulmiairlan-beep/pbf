// Menjelaskan bahwa kode ini membahas destructuring
// destructuring

// Membuat object bernama book
const book = {

  // Menyimpan judul buku pada properti title
  "title": "Manusia Setengah Salmon",

  // Menyimpan nama penulis pada properti author
  "author": "Raditya Dika",

  // Membuat properti publisher yang berisi object
  "publisher": {

    // Menyimpan nama penerbit
    "name": "Gagas Media",

    // Menyimpan alamat penerbit
    "address": "Jakarta Selatan"
  }
}

// Mengambil data dari object book menggunakan destructuring
// title disimpan dengan nama baru, yaitu bookTitle
// author memiliki nilai default "RD"
// name dan address diambil dari object publisher
const {title: bookTitle, author = "RD", publisher:{name, address}} = book;

// Menampilkan hasil data yang sudah diambil ke console
console.log(bookTitle, author, name, address);
