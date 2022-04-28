const express = require('express');
const path = require('path');

const {
  heartbeat,
  check,
} = require('./heartbeat');

const router = express.Router();

router
  .get('/check', check)
  .get('/heartbeat', heartbeat)
  .get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
  });

module.exports = router;
