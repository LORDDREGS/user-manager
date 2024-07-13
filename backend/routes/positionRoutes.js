const express = require('express');
const router = express.Router();
const Position = require('../models/Position');

// Получение всех позиций
router.get('/', async (req, res) => {
  try {
    const positions = await Position.find().populate('plant').populate('department');
    res.json(positions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Добавление новой позиции
router.post('/', async (req, res) => {
  try {
    const newPosition = new Position(req.body);
    await newPosition.save();
    res.status(201).json(newPosition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Обновление существующей позиции
router.put('/:id', async (req, res) => {
  try {
    const updatedPosition = await Position.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPosition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
