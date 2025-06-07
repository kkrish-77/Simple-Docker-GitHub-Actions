const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Sample API!' });
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;