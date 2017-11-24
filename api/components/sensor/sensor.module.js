const express                           = require('express');
const router                            = express.Router();
const sensorController            = require('./sensor.controller');

router.route('/').post(sensorController.addOne);
router.route('/latest').get(sensorController.getLatestData);

module.exports = router;
