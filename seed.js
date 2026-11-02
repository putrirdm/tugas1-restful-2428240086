
const mongoose = require('mongoose');
require('dotenv').config();

const LaporanBencana = require('./models/disasterReportsModel');
const Petugas = require('./models/petugasModel');

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('MongoDB berhasil terhubung');

    await LaporanBencana.deleteMany({});
    await Petugas.deleteMany({});

    const dataPetugas = await Petugas.insertMany([
      {
        nama: 'Andi Saputra',
        jabatan: 'Petugas Lapangan'
      },
      {
        nama: 'Budi Santoso',
        jabatan: 'Koordinator Lapangan'
      },
      {
        nama: 'Citra Lestari',
        jabatan: 'Petugas Penanggulangan Bencana'
      }
    ]);

    const dataLaporan = [
      {
        nama: 'Novi',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Ilir Timur I',
        alamat: { jalan: 'Jl. Jenderal Sudirman', kota: 'Palembang' },
        tanggal: '2026-01-05',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 120,
        petugas: dataPetugas[0]._id
      },
      {
        nama: 'Rizky',
        jenisBencana: 'longsor',
        lokasi: 'Kecamatan Gandus',
        alamat: { jalan: 'Jl. Lettu Karim Kadir', kota: 'Palembang' },
        tanggal: '2026-01-10',
        tingkatKeparahan: 'sedang',
        jumlahPengungsi: 45,
        petugas: dataPetugas[1]._id
      },
      {
        nama: 'Dewi',
        jenisBencana: 'kebakaran',
        lokasi: 'Kecamatan Sukarami',
        alamat: { jalan: 'Jl. Kolonel H. Burlian', kota: 'Palembang' },
        tanggal: '2026-01-15',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 80,
        petugas: dataPetugas[2]._id
      },
      {
        nama: 'Fajar',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Seberang Ulu I',
        alamat: { jalan: 'Jl. KH. Azhari', kota: 'Palembang' },
        tanggal: '2026-01-20',
        tingkatKeparahan: 'ringan',
        jumlahPengungsi: 20,
        petugas: dataPetugas[0]._id
      },
      {
        nama: 'Sinta',
        jenisBencana: 'gempa',
        lokasi: 'Kecamatan Plaju',
        alamat: { jalan: 'Jl. DI Panjaitan', kota: 'Palembang' },
        tanggal: '2026-02-02',
        tingkatKeparahan: 'sedang',
        jumlahPengungsi: 60,
        petugas: dataPetugas[1]._id
      },
      {
        nama: 'Rian',
        jenisBencana: 'kebakaran',
        lokasi: 'Kecamatan Kalidoni',
        alamat: { jalan: 'Jl. Mayor Zen', kota: 'Palembang' },
        tanggal: '2026-02-08',
        tingkatKeparahan: 'ringan',
        jumlahPengungsi: 15,
        petugas: dataPetugas[2]._id
      },
      {
        nama: 'Maya',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Ilir Barat I',
        alamat: { jalan: 'Jl. Demang Lebar Daun', kota: 'Palembang' },
        tanggal: '2026-02-14',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 150,
        petugas: dataPetugas[0]._id
      },
      {
        nama: 'Doni',
        jenisBencana: 'longsor',
        lokasi: 'Kecamatan Kertapati',
        alamat: { jalan: 'Jl. Ki Marogan', kota: 'Palembang' },
        tanggal: '2026-02-19',
        tingkatKeparahan: 'sedang',
        jumlahPengungsi: 35,
        petugas: dataPetugas[1]._id
      },
      {
        nama: 'Putri',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Ilir Timur II',
        alamat: { jalan: 'Jl. Rajawali', kota: 'Palembang' },
        tanggal: '2026-03-01',
        tingkatKeparahan: 'ringan',
        jumlahPengungsi: 25,
        petugas: dataPetugas[2]._id
      },
      {
        nama: 'Agus',
        jenisBencana: 'kebakaran',
        lokasi: 'Kecamatan Alang-Alang Lebar',
        alamat: { jalan: 'Jl. Talang Kelapa', kota: 'Palembang' },
        tanggal: '2026-03-06',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 95,
        petugas: dataPetugas[0]._id
      },
      {
        nama: 'Lina',
        jenisBencana: 'gempa',
        lokasi: 'Kecamatan Sako',
        alamat: { jalan: 'Jl. Sematang Borang', kota: 'Palembang' },
        tanggal: '2026-03-12',
        tingkatKeparahan: 'sedang',
        jumlahPengungsi: 55,
        petugas: dataPetugas[1]._id
      },
      {
        nama: 'Wahyu',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Bukit Kecil',
        alamat: { jalan: 'Jl. Merdeka', kota: 'Palembang' },
        tanggal: '2026-03-18',
        tingkatKeparahan: 'ringan',
        jumlahPengungsi: 18,
        petugas: dataPetugas[2]._id
      },
      {
        nama: 'Nanda',
        jenisBencana: 'longsor',
        lokasi: 'Kecamatan Sematang Borang',
        alamat: { jalan: 'Jl. Seduduk Putih', kota: 'Palembang' },
        tanggal: '2026-03-23',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 110,
        petugas: dataPetugas[0]._id
      },
      {
        nama: 'Tia',
        jenisBencana: 'kebakaran',
        lokasi: 'Kecamatan Kemuning',
        alamat: { jalan: 'Jl. Basuki Rahmat', kota: 'Palembang' },
        tanggal: '2026-04-02',
        tingkatKeparahan: 'sedang',
        jumlahPengungsi: 40,
        petugas: dataPetugas[1]._id
      },
      {
        nama: 'Dimas',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Seberang Ulu II',
        alamat: { jalan: 'Jl. Ahmad Yani', kota: 'Palembang' },
        tanggal: '2026-04-08',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 135,
        petugas: dataPetugas[2]._id
      },
      {
        nama: 'Ayu',
        jenisBencana: 'gempa',
        lokasi: 'Kecamatan Ilir Barat II',
        alamat: { jalan: 'Jl. Sultan Mansyur', kota: 'Palembang' },
        tanggal: '2026-04-14',
        tingkatKeparahan: 'ringan',
        jumlahPengungsi: 12,
        petugas: dataPetugas[0]._id
      },
      {
        nama: 'Rudi',
        jenisBencana: 'longsor',
        lokasi: 'Kecamatan Gandus Selatan',
        alamat: { jalan: 'Jl. TPH Sofyan Kenawas', kota: 'Palembang' },
        tanggal: '2026-04-20',
        tingkatKeparahan: 'sedang',
        jumlahPengungsi: 50,
        petugas: dataPetugas[1]._id
      },
      {
        nama: 'Vina',
        jenisBencana: 'kebakaran',
        lokasi: 'Kecamatan Jakabaring',
        alamat: { jalan: 'Jl. Gubernur H. Bastari', kota: 'Palembang' },
        tanggal: '2026-05-01',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 90,
        petugas: dataPetugas[2]._id
      },
      {
        nama: 'Arif',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Plaju',
        alamat: { jalan: 'Jl. Tegal Binangun', kota: 'Palembang' },
        tanggal: '2026-05-07',
        tingkatKeparahan: 'ringan',
        jumlahPengungsi: 22,
        petugas: dataPetugas[0]._id
      },
      {
        nama: 'Nisa',
        jenisBencana: 'gempa',
        lokasi: 'Kecamatan Kalidoni',
        alamat: { jalan: 'Jl. Residen Abdul Rozak', kota: 'Palembang' },
        tanggal: '2026-05-13',
        tingkatKeparahan: 'sedang',
        jumlahPengungsi: 65,
        petugas: dataPetugas[1]._id
      },
      {
        nama: 'Bayu',
        jenisBencana: 'longsor',
        lokasi: 'Kecamatan Kertapati',
        alamat: { jalan: 'Jl. Yusuf Singadekane', kota: 'Palembang' },
        tanggal: '2026-05-19',
        tingkatKeparahan: 'ringan',
        jumlahPengungsi: 10,
        petugas: dataPetugas[2]._id
      },
      {
        nama: 'Intan',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Sukarami',
        alamat: { jalan: 'Jl. Kebun Bunga', kota: 'Palembang' },
        tanggal: '2026-06-02',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 175,
        petugas: dataPetugas[0]._id
      },
      {
        nama: 'Eko',
        jenisBencana: 'kebakaran',
        lokasi: 'Kecamatan Sako',
        alamat: { jalan: 'Jl. Musi Raya', kota: 'Palembang' },
        tanggal: '2026-06-08',
        tingkatKeparahan: 'sedang',
        jumlahPengungsi: 48,
        petugas: dataPetugas[1]._id
      },
      {
        nama: 'Rara',
        jenisBencana: 'gempa',
        lokasi: 'Kecamatan Bukit Kecil',
        alamat: { jalan: 'Jl. Diponegoro', kota: 'Palembang' },
        tanggal: '2026-06-14',
        tingkatKeparahan: 'ringan',
        jumlahPengungsi: 16,
        petugas: dataPetugas[2]._id
      },
      {
        nama: 'Hendra',
        jenisBencana: 'banjir',
        lokasi: 'Kecamatan Ilir Timur III',
        alamat: { jalan: 'Jl. Veteran', kota: 'Palembang' },
        tanggal: '2026-06-20',
        tingkatKeparahan: 'berat',
        jumlahPengungsi: 140,
        petugas: dataPetugas[0]._id
      }
    ];

    await LaporanBencana.insertMany(dataLaporan);

    console.log('Seed berhasil dijalankan!');
    console.log('Jumlah Petugas: 3');
    console.log('Jumlah Laporan Bencana: 25');
    console.log('Total seluruh data: 28');

  } catch (error) {
    console.error('Seed gagal:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Koneksi MongoDB ditutup');
  }
};

seedDatabase();
