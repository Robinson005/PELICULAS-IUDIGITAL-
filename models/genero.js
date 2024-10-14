const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
  nombre: String,
  estado: String,
  fecha_creacion: { type: Date, default: Date.now },
  fecha_actualizacion: { type: Date, default: Date.now },
  descripcion: String
});

module.exports = mongoose.model('Genero', generoSchema);