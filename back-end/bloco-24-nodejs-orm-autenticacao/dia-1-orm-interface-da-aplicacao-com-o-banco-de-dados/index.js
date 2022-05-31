const express = require('express');
const bodyParser = require('body-parser');

const PORT = '3000';

const app = express();

app.use(bodyParser.json());

app.get('/', async (_req, res) => {
  try {
    return res.status(200).json({ message: 'The API is working fine' });
  } catch (err) {
    console.log('Erro ao carregar a página: ', err.message);
    return res.status(400).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log('Server is up on port:', PORT);
});
