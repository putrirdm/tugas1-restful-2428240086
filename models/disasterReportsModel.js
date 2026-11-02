
const mongoose = require('mongoose');

const alamatSchema = new mongoose.Schema({
  jalan: String,
  kota: String,
}, { _id: false });

const laporanBencanaSchema = new mongoose.Schema({
  nama: { 
    type: String, 
    required: [true, 'nama wajib diisi'], 
    trim: true 
  },

  jenisBencana: {
    type: String,
    required: [true, 'jenisBencana wajib diisi'],
    enum: ['banjir', 'longsor', 'kebakaran', 'gempa'],
    trim: true
  },

  lokasi: {
    type: String,
    required: [true, 'lokasi wajib diisi'],
    trim: true
  },

  alamat: alamatSchema,

  petugas: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Petugas' },

  tanggal: {
    type: Date,
    required: [true, 'tanggal wajib diisi']
  },

  tingkatKeparahan: {
    type: String,
    required: [true, 'tingkatKeparahan wajib diisi'],
    enum: ['ringan', 'sedang', 'berat'],
    trim: true
  },

  jumlahPengungsi: {
  type: Number,
  required: [true, 'jumlahPengungsi wajib diisi'],
  min: 0
},

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('disasterReports',laporanBencanaSchema
);
