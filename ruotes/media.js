const express = require('express');
const router = express.Router();
const Media = require('../models/media');

// GET all medias
router.get('/', async (req, res) => {
  const medias = await Media.find();
  res.json(medias);
});

// POST a new media
router.post('/', async (req, res) => {
  const media = new Media(req.body);
  await media.save();
  res.json(media);
});

// PUT update a media
router.put('/:id', async (req, res) => {
  const media = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(media);
});

// DELETE a media
router.delete('/:id', async (req, res) => {
  await Media.findByIdAndDelete(req.params.id);
  res.json({ message: 'Media deleted' });
});

module.exports = router;