const mongoose = require('mongoose');

const tipoSchema = new mongoose.Schema({
  nombre: String,
  fecha_creacion: { type: Date, default: Date.now },
  fecha_actualizacion: { type: Date, default: Date.now },
  descripcion: String
});

module.exports = mongoose.model('Tipo', tipoSchema);