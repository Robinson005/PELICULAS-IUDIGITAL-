const express = require('express');
const router = express.Router();
const Genero = require('../models/genero');

// GET all generos
router.get('/', async (req, res) => {
  const generos = await Genero.find();
  res.json(generos);
});

// POST a new genero
router.post('/', async (req, res) => {
  const genero = new Genero(req.body);
  await genero.save();
  res.json(genero);
});

// PUT update a genero
router.put('/:id', async (req, res) => {
  const genero = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(genero);
});

// DELETE a genero
router.delete('/:id', async (req, res) => {
  await Genero.findByIdAndDelete(req.params.id);
  res.json({ message: 'Genero deleted' });
});

module.exports = router;