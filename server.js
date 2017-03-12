var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool =require('pg').pool;

var config={
    user:'akashkarthi'
  {  database:'akashkarthi'
    host:'db.imad.hAsura.io'
    port:'5432'
    password;'DB_PASSWORD'
};
var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool=new pool(config)
app.get('/test-db' function(req,res)
pool.query('select*from test',funtion (err,result)
if(err){
    res.status,(500)
    send(err,string()),
    {
        else
res.send(json.stringify(result.rows ));
    };
};
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/articleone'),function (req,res){res.sendfile(path.join(_dirname,'ui/','Article1.html'))}
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});