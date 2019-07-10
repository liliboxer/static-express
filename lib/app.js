const express = require('express');
const app = express();

app.use(express.static('./public'));

const colors = [
  { name: 'red', hex: 'FF0000', r: 255, g: 0, b: 0 },
  { name: 'orange', hex: 'FFA500', r: 255, g: 165, b: 0 },
  { name: 'yellow', hex: 'FFFF00', r: 255, g: 255, b: 0 },
  { name: 'green', hex: '008000', r: 0, g: 128, b: 0 },
  { name: 'blue', hex: '0000FF', r: 0, g: 0, b: 255 },
  { name: 'purple', hex: '800080', r: 128, g: 0, b: 128 },
];

app.get('/api/v1/colors', (req, res) => {
  res.send(colors);
});
module.exports = app;
