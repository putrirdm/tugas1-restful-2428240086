const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca request JSON
app.use(express.json());
app.use(express.json());

// Data awal (disimpan di dalam memori dan akan hilang saat server restart)
let disasterReports = [
  {
    id: 1, jenisBencana: "banjir", lokasi: "Kec. Seberang Ulu I", tanggal: "2026-09-20", tingkatKeparahan: "sedang", jumlahPengungsi: 120
  },
  {
    id: 2, jenisBencana: "kebakaran", lokasi: "Kec. Ilir Timur I", tanggal: "2026-09-21", tingkatKeparahan: "berat", jumlahPengungsi: 80
  },
  {
    id: 3, jenisBencana: "longsor", lokasi: "Kec. Sukarami", tanggal: "2026-09-22", tingkatKeparahan: "ringan", jumlahPengungsi: 30
  }
];

let nextId = 4;

// GET / -> untuk memastikan bahwa server berjalan
app.get("/", (req, res) => {
  res.json({
    nama: "Putri Reda Maulidia",
    nim: "2428240086",
    topik: 21,
    namaTopik: "Kebencanaan",
    resource: "/disaster-reports",
    endpoints: [
      "GET /disaster-reports",
      "GET /disaster-reports/:id",
      "POST /disaster-reports",
      "PUT /disaster-reports/:id",
      "DELETE /disaster-reports/:id",
      "GET /disaster-reports?jenisBencana=banjir"
    ]
  });
});

// GET semua data
app.get("/disaster-reports", (req, res) => {
  const { jenisBencana } = req.query;

  if (jenisBencana) {
    const filteredData = disasterReports.filter(
      (report) => report.jenisBencana === jenisBencana
    );
    return res.json(filteredData);
  }
  res.json(disasterReports);
});

// GET -> satu data berdasarkan ID
app.get("/disaster-reports/:id", (req, res) => {
  const id = Number(req.params.id);
  const report = disasterReports.find((item) => item.id === id);
  if (!report) {
    return res.status(404).json({
      status: 404,
      message: `Laporan bencana dengan id ${id} tidak ditemukan`,
      data: null
    });
  }
  res.json(report);
});

// POST -> untuk menambahkan data
// Data Baru untuk ditambahkan -> {"jenisBencana: "gempa", lokasi: "Kec. Plaju", tanggal: "2026-10-06", tingkatKeparahan: "sedang", jumlahPengungsi: 50}
app.post("/disaster-reports", (req, res) => {
  const {
    jenisBencana, lokasi,
    tanggal, tingkatKeparahan,
    jumlahPengungsi} = req.body;

    //validasi untuk (400)
  if (!jenisBencana || !lokasi || !tanggal || !tingkatKeparahan) {
    return res.status(400).json({
      status: 400,
      message:
        "jenisBencana, lokasi, tanggal, dan tingkatKeparahan wajib diisi",
      data: null
    });
  }

  const jenisBencanaValid = ["banjir","longsor","kebakaran","gempa"];
  const tingkatKeparahanValid = ["ringan","sedang","berat"];

  if (!jenisBencanaValid.includes(jenisBencana)) {
    return res.status(400).json({
      status: 400,
      message:
        "jenisBencana harus berupa banjir, longsor, kebakaran, atau gempa",
      data: null
    });
  }

  if (!tingkatKeparahanValid.includes(tingkatKeparahan)) {
    return res.status(400).json({
      status: 400,
      message:
        "tingkatKeparahan harus berupa ringan, sedang, atau berat",
      data: null
    });
  }

  const dataBaru = {
    id: nextId++,
    jenisBencana,
    lokasi,
    tanggal,
    tingkatKeparahan,
    jumlahPengungsi: jumlahPengungsi ?? 0
  };

  disasterReports.push(dataBaru);

  res.status(201).json({
    status: 201,
    message: "Laporan bencana berhasil ditambahkan",
    data: dataBaru
  });
});

// PUT merupakan bagian untuk mengubah data
// Data yang diubah adalah bagian tingkatkeparahan yang awalnya "sedang" menjadi "berat"
// Dan bagian jumlahpengungsi yang awalnya "50" menjadi "75"
app.put("/disaster-reports/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = disasterReports.findIndex(
    (item) => item.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      status: 404,
      message: `Laporan bencana dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  const {
    jenisBencana, lokasi, tanggal, tingkatKeparahan, jumlahPengungsi} = req.body;

  if (!jenisBencana || !lokasi || !tanggal || !tingkatKeparahan) {
    return res.status(400).json({
      status: 400,
      message:
        "Semua field wajib diisi saat melakukan PUT",
      data: null
    });
  }

  const jenisBencanaValid = ["banjir", "longsor", "kebakaran", "gempa"];
  const tingkatKeparahanValid = ["ringan", "sedang", "berat"];

  if (!jenisBencanaValid.includes(jenisBencana)) {
    return res.status(400).json({
      status: 400,
      message:
        "jenisBencana harus berupa banjir, longsor, kebakaran, atau gempa",
      data: null
    });
  }

  if (!tingkatKeparahanValid.includes(tingkatKeparahan)) {
    return res.status(400).json({
      status: 400,
      message:
        "tingkatKeparahan harus berupa ringan, sedang, atau berat",
      data: null
    });
  }

  const updatedReport = {
    id,
    jenisBencana,
    lokasi,
    tanggal,
    tingkatKeparahan,
    jumlahPengungsi: jumlahPengungsi ?? 0
  };

  disasterReports[index] = updatedReport;

  res.json({
    status: 200,
    message: "Laporan bencana berhasil diperbarui",
    data: updatedReport
  });
});

// DELETE untuk menghapus data
app.delete("/disaster-reports/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = disasterReports.findIndex(
    (item) => item.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      status: 404,
      message: `Laporan bencana dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  disasterReports.splice(index, 1);

  res.json({
    status: 200,
    message: `Laporan bencana dengan id ${id} berhasil dihapus`,
    data: null
  });
});

// Data yang tidak ada (Tidak Terdaftar/Tidak ditemukan)
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: "Endpoint tidak ditemukan",
    data: null
  });
});

// Untuk Menjalankan server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}
module.exports = app;
