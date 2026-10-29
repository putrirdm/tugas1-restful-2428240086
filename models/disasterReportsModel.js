
const mongoose = require('mongoose');
const laporanBencanaSchema = new mongoose.Schema({
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
