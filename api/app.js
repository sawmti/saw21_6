const express = require('express');
const path = require('path');
const { rockBandList } = require('./controller/rockBand');
const { countryList } = require('./controller/countryList');
const bodyParser = require("body-parser");
const { bandasObtieneAll, bandasObtiene, bandasElimina, bandasActualiza, bandasCrea } = require('./controller/bandasController');
const app = express();
const root = path.resolve(__dirname, '..');

// Log invocations
app.use(function (req, res, next) {
  console.log(req.url);
  next();
});
app.use(bodyParser.json());
// Front
app.use(express.static(root + '/dist/band'));
//Back
app.get('/api/countries', countryList);
app.get('/api/getbands/:id', rockBandList);
// Base

app.get('/api/bandssql/:id', bandasObtiene);
app.get('/api/bandssql', bandasObtieneAll);
app.delete('/api/bandssql/:id', bandasElimina);
app.post('/api/bandssql', bandasActualiza);
app.put('/api/bandssql', bandasCrea);

module.exports = app;