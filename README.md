# Tugas 1 RESTful API - Kebencanaan
- Nama : Putri Reda Maulidia
- NPM : 2428240086
- KELAS : SI5B
- TOPIK : 21 (Kebencanaan)
- Link Repository Github :  https://github.com/putrirdm/tugas1-restful-2428240086 
- Link Deploy Vercel : https://tugas1-restful-2428240086.vercel.app/ 

## Cara Menjalankan Secara Lokal
1. Buka GitHub Desktop, pilih repository, lalu klik Open in Visual Studio Code.
2. Buka Terminal → New Terminal di VS Code.
3. Jalankan: npm install
4. Jalankan server: npm start
5. Jika berhasil, muncul:
   Server berjalan di http://localhost:3000
6. Pengujian API dilakukan menggunakan Thunder Client melalui alamat:
   http://localhost:3000/disaster-reports

## Daftar Pengujian Endpoint
| No. | Method | Endpoint | Status Diharapkan | Status Hasil | Keterangan |
|---:|:---:|---|:---:|:---:|---|
| 1 | GET | `/disaster-reports` | 200 | 200 | Berhasil menampilkan seluruh data |
| 2 | GET | `/disaster-reports/1` | 200 | 200 | Berhasil menampilkan data berdasarkan ID |
| 3 | GET | `/disaster-reports?jenisBencana=banjir` | 200 | 200 | Berhasil melakukan filter berdasarkan jenis bencana |
| 4 | POST | `/disaster-reports` | 201 | 201 | Data berhasil ditambahkan |
| 5 | PUT | `/disaster-reports/4` | 200 | 200 | Data berhasil diperbarui |
| 6 | DELETE | `/disaster-reports/4` | 200 | 200 | Data berhasil dihapus |
| 7 | GET | `/disaster-reports/999` | 404 | 404 | ID tidak ditemukan |
| 8 | POST | `/disaster-reports` dengan field kurang | 400 | 400 | Validasi berhasil |

### Field dan Tipe Data
| Field | Tipe Data | Wajib di isi |
|---|---|:---:|
| `jenisBencana` | string | * |
| `lokasi` | string | * |
| `tanggal` | string | * |
| `tingkatKeparahan` | string | * |
| `jumlahPengungsi` | number | * |

## Keterangan:
- jenisBencana : banjir, longsor, kebakaran, atau gempa
- lokasi : lokasi terjadinya bencana
- tanggal : format YYYY-MM-DD
- tingkatKeparahan : ringan, sedang, atau berat
- jumlahPengungsi : jumlah orang yang mengungsi dan tidak wajib diisi