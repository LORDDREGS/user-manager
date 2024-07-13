const express = require('express');
const router = express.Router();
const Department = require('../models/Department');

// Получение всех отделов
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find().populate('plant');
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Добавление нового отдела
router.post('/', async (req, res) => {
  try {
    const newDepartment = new Department(req.body);
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Обновление существующего отдела
router.put('/:id', async (req, res) => {
  try {
    const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
