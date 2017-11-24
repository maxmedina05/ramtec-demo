const mongoose = require('mongoose');

const SensorSchema = new mongoose.Schema({
  pot: Number,
  planta: String,
  cde: String,
  vac1: Number,
  vac2: Number,
  vac3: Number,
  temp1: Number,
  temp2: Number,
  amp1: Number,
  amp2: Number,
  amp3: Number,
  rele1: Number,
  rele3: Number,
  rele2: Number,
  rele4: Number,
  rele5: Number,
  sw1: Number,
  sw2: Number,
  sw3: Number,
  sw4: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Sensor', SensorSchema);
