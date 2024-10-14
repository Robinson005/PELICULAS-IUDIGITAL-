const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  serial: { type: String, unique: true },
  titulo: String,
  sinopsis: String,
  url_pelicula: { type: String, unique: true },
  imagen_portada: String,
  fecha_creacion: { type: Date, default: Date.now },
  fecha_actualizacion: { type: Date, default: Date.now },
  año_estreno: Number,
  genero_principal: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero' },
  director_principal: { type: mongoose.Schema.Types.ObjectId, ref: 'Director' },
  productora: { type: mongoose.Schema.Types.ObjectId, ref: 'Productora' },
  tipo: { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo' }
});

module.exports = mongoose.model('Media', mediaSchema);