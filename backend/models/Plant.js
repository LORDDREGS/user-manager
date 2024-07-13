// models/Plant.js
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String
});

module.exports = mongoose.model('Plant', plantSchema);
