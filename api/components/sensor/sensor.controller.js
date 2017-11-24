const Sensor = require('./sensor.model');
const mongoose = require('mongoose');

function getLatestData(req, res) {
  Sensor.findOne()
    .sort('-createdAt')
    .exec()
    .then(result => {
      res.json(_GeneralResponse(result));
    })
    .catch(err => {
      res.json(_ErrorResponse(err));
    });
}

function addOne(req, res) {
  if (_validateBody(req.body)) {
    let newData = new Sensor(req.body);
    newData.save()
      .then(result => {
        res.json(_GeneralResponse(result));
      })
      .catch(err => {
        res.json(_ErrorResponse(err));
      });
  } else {
    res.json(_ErrorResponse("Invalid parameters!"));
  }
}

function removeOne(req, res) {
  let objectId = req.params.objectId;

  Product.remove({
      id: objectId
    })
    .then(result => {
      res.json(_GeneralResponse(result));
    })
    .catch(err => {
      res.json(_ErrorResponse(err));
    });
}

function removeAll(req, res) {
  Product.remove({})
    .then(result => {
      res.json(_GeneralResponse(result));
    })
    .catch(err => {
      res.json(_ErrorResponse(err));
    });
}

function _validateBody(body) {
  return true;
}

function _GeneralResponse(data) {
  return {
    data: data,
    success: true
  };
}

function _ErrorResponse(err) {
  return {
    data: [],
    message: err.message || err,
    success: false
  };
}

module.exports = {
  getLatestData: getLatestData,
  addOne: addOne,
  removeAll: removeAll
};
