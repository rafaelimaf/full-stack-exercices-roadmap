const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Hello World!' });
  } catch (err) {
    res.status(400).json({ message: 'Internal Server Error: ', err });
  }
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
