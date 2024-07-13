const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Получение всех заводов
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Добавление нового завода
router.post('/', async (req, res) => {
  try {
    const newPlant = new Plant(req.body);
    await newPlant.save();
    res.status(201).json(newPlant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Обновление существующего завода
router.put('/:id', async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPlant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
