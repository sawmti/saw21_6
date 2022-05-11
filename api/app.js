const express = require('express');
const path = require('path');
const { rockBandList } = require('./controller/rockBand');
const { countryList } = require('./controller/countryList');
const bodyParser = require("body-parser");
const app = express();
const root = path.resolve(__dirname, '..');

// Log invocations
app.use(function (req, res, next) {
  console.log(req.url);
  next();
});
app.use(bodyParser.json());
// Directly serve static content from /client
//app.use(express.static(root + '/client'));
app.use(express.static(root + '/dist/band'));

app.get('/api/countries', countryList);
app.get('/api/getbands/:id', rockBandList);

module.exports = app;