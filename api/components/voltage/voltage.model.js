const mongoose = require('mongoose');

const VoltageSchema = new mongoose.Schema({
  name: String,
  moduleId: Number,
  voltage01: Number,
  voltage02: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Voltage', VoltageSchema);
