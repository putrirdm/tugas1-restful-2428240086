
const mongoose = require('mongoose');

const petugasSchema = new mongoose.Schema({
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  jabatan: { type: String, required: [true, 'jabatan wajib diisi'], trim: true }
});

module.exports = mongoose.model('Petugas', petugasSchema);
