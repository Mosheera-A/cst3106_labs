const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/roll-dices', (_req, res) => {
  const values = Array.from({ length: 5 }, () => 1 + Math.floor(Math.random() * 6));
  res.json({ values });
});

app.listen(PORT, () => console.log(`Lab 07 server running at http://localhost:${PORT}`));
