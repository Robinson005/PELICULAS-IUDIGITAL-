const express = require('express');
const router = express.Router();
const Tipo = require('../models/tipo');

// GET all tipos
router.get('/', async (req, res) => {
  const tipos = await Tipo.find();
  res.json(tipos);
});

// POST a new tipo
router.post('/', async (req, res) => {
  const tipo = new Tipo(req.body);
  await tipo.save();
  res.json(tipo);
});

// PUT update a tipo
router.put('/:id', async (req, res) => {
  const tipo = await Tipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(tipo);
});

// DELETE a tipo
router.delete('/:id', async (req, res) => {
  await Tipo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Tipo deleted' });
});

module.exports = router;