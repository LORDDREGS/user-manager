const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    plant: { type: mongoose.Schema.Types.ObjectId, ref: 'Plant', required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    position: { type: mongoose.Schema.Types.ObjectId, ref: 'Position', required: true },
    email: { type: String, required: true },
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    middlename: { type: String },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    roles: [{ type: String }]
});

module.exports = mongoose.model('User', userSchema);
