const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
  nombres: String,
  estado: String,
  fecha_creacion: { type: Date, default: Date.now },
  fecha_actualizacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Director', directorSchema);