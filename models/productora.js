const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
  nombre: String,
  estado: String,
  fecha_creacion: { type: Date, default: Date.now },
  fecha_actualizacion: { type: Date, default: Date.now },
  slogan: String,
  descripcion: String
});

module.exports = mongoose.model('Productora', productoraSchema);