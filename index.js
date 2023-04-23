const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.text());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
