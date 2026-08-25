// Mengimpor file CSS App.css untuk memberikan style pada komponen
import './App.css'

// Mengimpor library React
import React from 'react';

// Membuat dan mengekspor class component bernama AppClass
export default class AppClass extends React.Component {

  // Method render digunakan untuk menampilkan tampilan komponen
  render() {
    return (

      // Elemen utama yang membungkus isi komponen
      <main>

        {/* Menampilkan heading tingkat 2 */}
        <h2>Belajar menggunakan JSX pada React</h2>

        {/* Memanggil dan menampilkan komponen Header */}
        <Header />

      {/* Menutup elemen main */}
      </main>
    )
  }
}


// Membuat class component bernama Header
class Header extends React.Component {

  // Method render digunakan untuk menampilkan isi komponen Header
  render() {
    return (
      <div>

        {/* Menampilkan judul utama */}
        <h1>Tutorial Reactjs untuk Pemula</h1>

        {/* Menampilkan subjudul */}
        <h2>Panduan step-by-step belajar Reactjs</h2>

        {/* Menampilkan paragraf tentang komponen class */}
        <p>Membuat komponen dengan class</p>

        {/* Memanggil komponen Message dan mengirimkan props sender serta content */}
        <Message sender="dian" content="Hi, Apa kabar?" />

      </div>
    );
  }
}


// Membuat class component bernama Message
class Message extends React.Component {

  // Method render digunakan untuk menampilkan isi pesan
  render() {
    return (
      <div>

        {/* Menampilkan nilai props sender */}
        <small>{this.props.sender}:</small>

        {/* Menampilkan nilai props content */}
        <p>{this.props.content}</p>

        {/* Membuat garis horizontal */}
        <hr />

      </div>
    );
  }
}
