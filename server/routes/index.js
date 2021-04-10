const express = require('express');
const router = express.Router();
const todo = require('./todo');

router.get('/', (req, res) => {
  res.send('<h1>TODO API</h1>');
});

router.use('/todo', todo);

module.exports = router;