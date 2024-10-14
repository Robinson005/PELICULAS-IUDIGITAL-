const express = require('express');
const router = express.Router();
const Director = require('../models/director');

// GET all directors
router.get('/', async (req, res) => {
  const directors = await Director.find();
  res.json(directors);
});

// POST a new director
router.post('/', async (req, res) => {
  const director = new Director(req.body);
  await director.save();
  res.json(director);
});

// PUT update a director
router.put('/:id', async (req, res) => {
  const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(director);
});

// DELETE a director
router.delete('/:id', async (req, res) => {
  await Director.findByIdAndDelete(req.params.id);
  res.json({ message: 'Director deleted' });
});

module.exports = router;