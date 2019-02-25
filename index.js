const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const multer = require('multer');
const upload = multer({dest: './uploads/'})
const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', upload.single('myFile')), function(req, res) {
  res.send(req.file)
}

app.listen(3000);
