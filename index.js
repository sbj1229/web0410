var _ = require('underscore');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
  res.charset = 'UTF-8';
  console.log(req.query);
  res.send('GET으로 넘어온 name은 '+ req.query.name + '입니다.');
} );
// ()=>{} = function(){} 대치

app.post('/', (req, res) => {
  res.charset = 'UTF-8';
  console.log(req.query);
  res.send('POST로 넘어온 name은 '+ req.body.name + '입니다.');
} );

// template
app.get('/template', (req, res) => {
  res.charset = 'utp-8';
  var tp1 = _.template('<h1>안녕하세요? 제 이름은 <%=name%>이고 나이는 <%=age%>에요.</h1>');
  var obj1 = { name:req.query.name, age:req.query.age};
  console.log(req.body.name)
  res.send(tp1(obj1));
});

app.get('/rowcol', (req, res) => {
  res.charset = 'UTF-8';
  var checkbox = '<input name="checkbox" type="radio">';
  var checkbox2 = '<input name="checkbox" type="checkbox" checked="checked">';
  var row = req.query.row;
  var col = req.query.col;
  var string = '';
  var string2 ='';
  string +='<form>';
  string2 +='<form>';
  for(var i=0; i<col;i++)
  {
    if(i%2==0){
      string += checkbox2;
      string2 += checkbox;
    }
    else{
    string += checkbox;
    string2 += checkbox2;
    }
  }
  string +='</form>';
  var result ='';
  for(var i=0; i<row;i++)
  {
      if(i%2==0){
      result += string;
      }
      else{
      result += string2;
      }
      result+='\n'
  }

  res.send(result);
} );


app.listen(8080, () => console.log('Example app listening on port 8080!'));
