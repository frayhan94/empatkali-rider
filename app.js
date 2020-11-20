require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(express.static('public'));
app.use(bodyParser.json({ limit: '10kb' }));
app.use(bodyParser.urlencoded({ limit: '10kb', extended: true }));
app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
  req.requestId = req.headers['x-request-id'];
  req.requestTimeStamp = req.headers['x-request-timestamp'];
  req.requestAppToken = req.headers['x-app-token'];
  next();
});
app.get('/', (req, res) => {
  res.send('Hello world');
});
app.get('/health-check', (req, res) => {
  res.send('Health check passed');
});
app.get('/bad-health', (req, res) => {
  res.status(500).send('Health check did not pass');
});
require('./src/routes/rider')(app);

const server = app.listen(process.env.PORT || 3000, function() {
  const host = server.address().address;
  const { port } = server.address();
  console.log('App listening at http://%s:%s', host, port);
});
module.exports = server;
