const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded({extended: false}));

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});