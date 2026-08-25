// Membuat class bernama Holiday
class Holiday {

  // Constructor digunakan untuk menerima data tujuan dan jumlah hari
  constructor(destination, days) {

    // Menyimpan nilai tujuan ke dalam properti destination
    this.destination = destination;

    // Menyimpan nilai jumlah hari ke dalam properti days
    this.days = days;
  }

  // Membuat method bernama info
  info() {

    // Menampilkan informasi tujuan dan jumlah hari menggunakan alert
    alert(this.destination + " will take " + this.days + " days.");
  }
}

// Membuat object bernama trip dari class Holiday
// Dengan tujuan Semeru dan lama perjalanan 10 hari
var trip = new Holiday("Semeru", 10);

// Memanggil method info dari object trip
trip.info();
