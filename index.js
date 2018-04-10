var express = require('express');
var app = express();

// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
  res.charset = 'UTF-8';
  res.send('GET으로 넘어온 name은 '+ req.query.name + '입니다.');
} );


app.post('/', (req, res) => {
  res.charset = 'UTF-8';
  res.send('POST로 넘어온 name은 '+ req.query.name + '입니다.');
} );


app.listen(8080, () => console.log('Example app listening on port 8080!'));
