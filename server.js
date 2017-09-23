const express = require('express');
const http = require('http');
const hbs = require('hbs');
const path = require('path');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:/amuse");

var port = process.env.PORT || 8000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket)=>{
  console.log('connected');
});

const publichPath = path.join(__dirname, '/public');
app.use('/', express.static(publicPath));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','hbs');

app.get('/', (req, res)=>{
  res.render('index');
});

server.listen(port, ()=>{
  console.log("Port is up and running at",port);
});
