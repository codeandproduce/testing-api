const express = require('express');
const http = require('http');
const hbs = require('hbs');
const path = require('path');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amuse');

var TextInput = require('./models/Test');

var port = process.env.PORT || 8000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket)=>{
  io.emit('new client', {
      text:socket.id
  });
});

const publicPath = path.join(__dirname, '/public');
app.use('/', express.static(publicPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine','hbs');

app.get('/', (req, res)=>{
  res.render('index');
});

app.post('/api', (req,res) => {
  var inputText = req.body.text;
  console.log(req.body);
  var newInputText = new TextInput({
    text:inputText
  });

  newInputText.save();
  res.send('worked!');
});
server.listen(port, () => {
  console.log("Port is up and running at",port);
});
