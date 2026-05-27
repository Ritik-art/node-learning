const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = fs.readFileSync('index.html');
    res.send(data.toString());
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});