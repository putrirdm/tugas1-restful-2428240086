let disasterReports = [
  {
    id: 1,
    jenisBencana: "banjir",
    lokasi: "Kec. Seberang Ulu I",
    tanggal: "2026-09-20",
    tingkatKeparahan: "sedang",
    jumlahPengungsi: 120
  },
  {
    id: 2,
    jenisBencana: "kebakaran",
    lokasi: "Kec. Ilir Timur I",
    tanggal: "2026-09-21",
    tingkatKeparahan: "berat",
    jumlahPengungsi: 80
  },
  {
    id: 3,
    jenisBencana: "longsor",
    lokasi: "Kec. Sukarami",
    tanggal: "2026-09-22",
    tingkatKeparahan: "ringan",
    jumlahPengungsi: 30
  }
];

let nextId = 4;

function getAll(filterJenisBencana) {
  if (filterJenisBencana) {
    return disasterReports.filter(
      (report) => report.jenisBencana === filterJenisBencana
    );
  }
  return disasterReports;
}

function getById(id) {
  return disasterReports.find((item) => item.id === id);
}

function create(data) {
  const dataBaru = {
    id: nextId++,
    jenisBencana: data.jenisBencana,
    lokasi: data.lokasi,
    tanggal: data.tanggal,
    tingkatKeparahan: data.tingkatKeparahan,
    jumlahPengungsi: data.jumlahPengungsi ?? 0
  };

  disasterReports.push(dataBaru);
  return dataBaru;
}

function update(id, data) {
  const index = disasterReports.findIndex((item) => item.id === id);
  if (index === -1) return null;

  const updatedReport = {
    id,
    jenisBencana: data.jenisBencana,
    lokasi: data.lokasi,
    tanggal: data.tanggal,
    tingkatKeparahan: data.tingkatKeparahan,
    jumlahPengungsi: data.jumlahPengungsi ?? 0
  };

  disasterReports[index] = updatedReport;
  return updatedReport;
}

function remove(id) {
  const index = disasterReports.findIndex((item) => item.id === id);
  if (index === -1) return false;

  disasterReports.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };
