const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text());

const port = process.env.PORT || 3131;
const host = process.env.HOST || '0.0.0.0';

app.get('/test', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, host, () => {
  console.log(`Server running locally at http://${host}:${port}/`);
});
