const express = require('express');
const router = express.Router();
const Productora = require('../models/productora');

// GET all productoras
router.get('/', async (req, res) => {
  const productoras = await Productora.find();
  res.json(productoras);
});

// POST a new productora
router.post('/', async (req, res) => {
  const productora = new Productora(req.body);
  await productora.save();
  res.json(productora);
});

// PUT update a productora
router.put('/:id', async (req, res) => {
  const productora = await Productora.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(productora);
});

// DELETE a productora
router.delete('/:id', async (req, res) => {
  await Productora.findByIdAndDelete(req.params.id);
  res.json({ message: 'Productora deleted' });
});

module.exports = router;