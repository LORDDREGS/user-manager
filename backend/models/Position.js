// models/Position.js
const mongoose = require('mongoose');

const positionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortName: String,
  plant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant'
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department'
  }
});

module.exports = mongoose.model('Position', positionSchema);
