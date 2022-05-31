const express = require('express');
const bodyParser = require('body-parser');

const PORT = '3000';

const app = express();

app.use(bodyParser.json());

app.get('/', async (_req, res) => {
  return res.status(200).send();
});

app.listen(PORT, () => {
  console.log('Server is up on port:', PORT);
});
