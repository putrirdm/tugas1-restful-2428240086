const model = require("../models/disasterReportsModel");

const JENIS_BENCANA_VALID = ["banjir", "longsor", "kebakaran", "gempa"];
const TINGKAT_KEPARAHAN_VALID = ["ringan", "sedang", "berat"];

function getAll(req, res) {
  const data = model.getAll(req.query.jenisBencana);
  res.json(data);
}

function getById(req, res) {
  const id = Number(req.params.id);
  const report = model.getById(id);

  if (!report) {
    return res.status(404).json({
      status: 404,
      message: `Laporan bencana dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  res.json(report);
}

function validate(data, isPut = false) {
  const { jenisBencana, lokasi, tanggal, tingkatKeparahan } = data;

  if (!jenisBencana || !lokasi || !tanggal || !tingkatKeparahan) {
    return isPut
      ? "Semua field wajib diisi saat melakukan PUT"
      : "jenisBencana, lokasi, tanggal, dan tingkatKeparahan wajib diisi";
  }

  if (!JENIS_BENCANA_VALID.includes(jenisBencana)) {
    return "jenisBencana harus berupa banjir, longsor, kebakaran, atau gempa";
  }

  if (!TINGKAT_KEPARAHAN_VALID.includes(tingkatKeparahan)) {
    return "tingkatKeparahan harus berupa ringan, sedang, atau berat";
  }

  return null;
}

function create(req, res) {
  const error = validate(req.body);
  if (error) {
    return res.status(400).json({ status: 400, message: error, data: null });
  }

  const dataBaru = model.create(req.body);
  res.status(201).json({
    status: 201,
    message: "Laporan bencana berhasil ditambahkan",
    data: dataBaru
  });
}

function update(req, res) {
  const id = Number(req.params.id);
  if (!model.getById(id)) {
    return res.status(404).json({
      status: 404,
      message: `Laporan bencana dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  const error = validate(req.body, true);
  if (error) {
    return res.status(400).json({ status: 400, message: error, data: null });
  }

  const updatedReport = model.update(id, req.body);
  res.json({
    status: 200,
    message: "Laporan bencana berhasil diperbarui",
    data: updatedReport
  });
}

function remove(req, res) {
  const id = Number(req.params.id);
  if (!model.getById(id)) {
    return res.status(404).json({
      status: 404,
      message: `Laporan bencana dengan id ${id} tidak ditemukan`,
      data: null
    });
  }

  model.remove(id);
  return res.status(204).send();
}

module.exports = { getAll, getById, create, update, remove };
