const express = require('express');
const Position = require('../models/Position');
const router = express.Router();

// Get all positions
router.get('/', async (req, res) => {
    const positions = await Position.find();
    res.send(positions);
});

// Create a new position
router.post('/', async (req, res) => {
    const position = new Position(req.body);
    await position.save();
    res.send(position);
});

// Update a position
router.put('/:id', async (req, res) => {
    const position = await Position.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(position);
});

// Delete a position
router.delete('/:id', async (req, res) => {
    await Position.findByIdAndDelete(req.params.id);
    res.send({ message: 'Position deleted' });
});

module.exports = router;
