const laporanBencana = require('../models/disasterReportsModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.create = async (req, res) => {
  try {
    const data = await laporanBencana.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const data = await laporanBencana.find();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await laporanBencana.findById(req.params.id);
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};

exports.update = async (req, res) => {
  const data = await laporanBencana.findByIdAndUpdate(
    req.params.id,
    req.body,
    { returnDocument: 'after', runValidators: true }
  );
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.json(data);
};

exports.remove = async (req, res) => {
  const data = await laporanBencana.findByIdAndDelete(req.params.id);
  if (!data) throw errorHttp(404, 'Data tidak ditemukan');
  res.status(204).send();
};