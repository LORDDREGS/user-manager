// models/Department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortName: String,
  isAuditor: Boolean,
  plant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plant'
  }
});

module.exports = mongoose.model('Department', departmentSchema);
