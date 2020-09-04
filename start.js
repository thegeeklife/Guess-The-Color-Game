var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));


// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/colorGame.html'));
});

app.listen(process.env.PORT || 3000);