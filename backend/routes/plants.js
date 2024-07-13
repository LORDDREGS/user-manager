const express = require('express');
const Plant = require('../models/Plant');
const router = express.Router();

// Get all plants
router.get('/', async (req, res) => {
    const plants = await Plant.find();
    res.send(plants);
});

// Create a new plant
router.post('/', async (req, res) => {
    const plant = new Plant(req.body);
    await plant.save();
    res.send(plant);
});

// Update a plant
router.put('/:id', async (req, res) => {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(plant);
});

// Delete a plant
router.delete('/:id', async (req, res) => {
    await Plant.findByIdAndDelete(req.params.id);
    res.send({ message: 'Plant deleted' });
});

module.exports = router;
