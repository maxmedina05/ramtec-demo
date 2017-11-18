const express                           = require('express');
const router                            = express.Router();
const voltageController            = require('./voltage.controller');

router.route('/volts').get(voltageController.getVoltages);
router.route('/').get(voltageController.getAll);
router.route('/').delete(voltageController.removeAll);
router.route('/').post(voltageController.addOne);
// router.route('/:objectId').get(voltageController.getOne);
router.route('/:objectId').put(voltageController.updateOne);
router.route('/:objectId').delete(voltageController.removeOne);

module.exports = router;
