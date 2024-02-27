const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const ps3Router = require('./ps3');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', ps3Router);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
