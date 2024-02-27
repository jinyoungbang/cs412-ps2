const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const data = { string: 'Hey now' };
  res.render('template', { data });
});

router.post('/', (req, res) => {
  const originalString = req.body.originalString;
  const data = {
    originalString,
    length: originalString.length,
  };
  console.log(data);
  res.render('template', { data });
});

router.get('/names/:name', (req, res) => {
  const name = req.params.name;
  const data = { name };
  res.render('template', { data });
});


module.exports = router;
