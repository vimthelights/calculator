require('newrelic');
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();
const port = 3003;

const mortgage = require('./routes/mortgage');
const api = require('./routes/api');

// parse
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// routing
app.use('/mortgage', mortgage);
app.use('/api', api);

app.listen(port, () => console.log(`connected on ${port}`));
