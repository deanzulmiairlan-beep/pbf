// Mengimpor library React
import React from "react";

// Mengimpor komponen yang diperlukan dari react-router-dom
import {
  BrowserRouter, // Mengatur sistem routing berbasis URL pada browser
  Routes,        // Menampung kumpulan Route
  Route,         // Menentukan hubungan antara URL dan komponen
  Link,          // Membuat link untuk berpindah halaman tanpa reload
} from "react-router-dom";


// Membuat dan mengekspor komponen utama AppRouter
export default function AppRouter() {
  return (

    // BrowserRouter digunakan sebagai pembungkus utama sistem routing
    <BrowserRouter>
      <div>

        {/* Membuat menu navigasi */}
        <nav>
          <ul>

            {/* Link menuju halaman Beranda */}
            <li>
              <Link to="/">Beranda</Link>
            </li>

            {/* Link menuju halaman Berita */}
            <li>
              <Link to="/berita">Berita</Link>
            </li>

            {/* Link menuju halaman Tentang */}
            <li>
              <Link to="/tentang">Tentang</Link>
            </li>

            {/* Link menuju halaman Profile */}
            <li>
              <Link to="/profile">Profile</Link>
            </li>

          </ul>
        </nav>


        {/* Menentukan kumpulan halaman dan URL yang digunakan */}
        <Routes>

          {/* Menampilkan komponen Berita pada URL /berita */}
          <Route path="/berita" element={<Berita />} />

          {/* Menampilkan komponen Tentang pada URL /tentang */}
          <Route path="/tentang" element={<Tentang />} />

          {/* Menampilkan komponen Beranda pada URL utama */}
          <Route path="/" element={<Beranda />} />

          {/* Menampilkan komponen Profile beserta sub-route di dalamnya */}
          <Route path="/profile/*" element={<Profile />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}


// Membuat komponen halaman Beranda
function Beranda() {
  // Menampilkan judul halaman Beranda
  return <h2>Beranda</h2>;
}


// Membuat komponen halaman Berita
function Berita() {
  // Menampilkan judul halaman Berita
  return <h2>Berita</h2>;
}


// Membuat komponen halaman Tentang
function Tentang() {
  return (
    <div>

      {/* Menampilkan judul halaman */}
      <h2>Tentang</h2>

      {/* Menampilkan NIM mahasiswa */}
      <h3>NIM: isi NIM Anda</h3>

      {/* Menampilkan nama mahasiswa */}
      <h3>Nama: isi Nama Anda</h3>

    </div>
  );
}


// Membuat komponen halaman Profile
function Profile() {
  return (
    <div>

      {/* Membuat navigasi untuk halaman di dalam Profile */}
      <nav>

        {/* Link menuju halaman CV */}
        <Link to="cv">CV</Link>

        {/* Membuat baris baru */}
        <br />

        {/* Link menuju halaman Contact */}
        <Link to="contact">Contacts</Link>

      </nav>


      {/* Menentukan sub-route yang terdapat pada halaman Profile */}
      <Routes>

        {/* Menampilkan komponen CV pada URL /profile/cv */}
        <Route path="cv" element={<CV />} />

        {/* Menampilkan komponen Contact pada URL /profile/contact */}
        <Route path="contact" element={<Contact />} />

      </Routes>

    </div>
  );
}


// Membuat komponen untuk halaman CV
function CV() {
  return (
    <div>

      {/* Menampilkan nama lengkap */}
      <h3>Nama Lengkap: isi Nama Anda</h3>

      {/* Menampilkan tanggal lahir */}
      <h3>Tanggal Lahir: Tanggal Lahir Anda</h3>

      {/* Menampilkan pendidikan terakhir */}
      <h3>Pendidikan Terakhir: Pendidikan Terakhir Anda</h3>

    </div>
  );
}


// Membuat komponen untuk halaman Contact
function Contact() {
  return (
    <div>

      {/* Menampilkan alamat email */}
      <h3>Email: email anda</h3>

      {/* Menampilkan akun Twitter */}
      <h3>Twitter: Twitter Anda</h3>

      {/* Menampilkan akun Instagram */}
      <h3>Instagram: Instagram Anda</h3>

    </div>
  );
}
