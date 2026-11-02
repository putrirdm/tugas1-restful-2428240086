const Petugas = require('../models/petugasModel');

exports.create = async (req, res) => {
  try {
    const petugas = await Petugas.create(req.body);
    res.status(201).json(petugas);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Petugas.find());
};