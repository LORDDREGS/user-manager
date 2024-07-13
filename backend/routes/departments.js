const express = require('express');
const Department = require('../models/Department');
const router = express.Router();

// Get all departments
router.get('/', async (req, res) => {
    const departments = await Department.find();
    res.send(departments);
});

// Create a new department
router.post('/', async (req, res) => {
    const department = new Department(req.body);
    await department.save();
    res.send(department);
});

// Update a department
router.put('/:id', async (req, res) => {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(department);
});

// Delete a department
router.delete('/:id', async (req, res) => {
    await Department.findByIdAndDelete(req.params.id);
    res.send({ message: 'Department deleted' });
});

module.exports = router;
