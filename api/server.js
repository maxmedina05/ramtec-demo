const PORT = process.env.PORT || 3100;

const morgan = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const http = require('http').Server(app);
// const io = require('socket.io')(http);

app.use(morgan('dev'));
// Database configuration
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/ramtecDB", {
  useMongoClient: true
});

// API configuration
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Enable CORS
app.use(function(req, res, next) {
  // console.log("request ip: ", req.ip);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Length');
  res.setHeader('Access-Control-Allow-Headers', 'authorization, Authorization, Origin, X-Requested-With, Content-Type, Accept');

  if(req.method === 'OPTIONS') {
      return res.status(204).send();
  }
  next();
});

app.use('/api/v1/voltages', require('./components/voltage/voltage.module'));
app.use('/api/v1/sensor', require('./components/sensor/sensor.module'));

app.use('/', function(req, res) {
  res.send('Hello from ramtec server');
});

http.listen(PORT, function() {
  console.log(`Pothole Detector API listening on port ${PORT}`);
});
