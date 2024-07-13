const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../middleware/auth');

// GET all users
router.get('/', auth, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET one user
router.get('/:id', auth, getUser, (req, res) => {
  res.json(res.user);
});

// POST a new user
router.post('/', auth, async (req, res) => {
  const user = new User({
    plant: req.body.plant,
    department: req.body.department,
    position: req.body.position,
    email: req.body.email,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    middlename: req.body.middlename,
    password: req.body.password,
    createdDate: req.body.createdDate,
    roles: req.body.roles
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a user
router.put('/:id', auth, getUser, async (req, res) => {
  if (req.body.plant != null) {
    res.user.plant = req.body.plant;
  }
  if (req.body.department != null) {
    res.user.department = req.body.department;
  }
  if (req.body.position != null) {
    res.user.position = req.body.position;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  if (req.body.lastname != null) {
    res.user.lastname = req.body.lastname;
  }
  if (req.body.firstname != null) {
    res.user.firstname = req.body.firstname;
  }
  if (req.body.middlename != null) {
    res.user.middlename = req.body.middlename;
  }
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }
  if (req.body.createdDate != null) {
    res.user.createdDate = req.body.createdDate;
  }
  if (req.body.roles != null) {
    res.user.roles = req.body.roles;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a user
router.delete('/:id', auth, getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
