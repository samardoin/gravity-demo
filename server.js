var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var matter_file = require('./server/matter.js');

users=[];//list of users
connections=[];//list of sockets

server.listen(process.env.PORT || 8080);//set the server to listen
console.log("server running");

//set the index.html
app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
  app.use(express.static('client'));
});

//when a socket connects...
io.sockets.on('connection', function(socket){
  connections.push(socket);//add socket to connections
  console.log('Connected:  sockets connected', connections.length);

  //when a socket emits connection_successful:
  //add it to the update_room so that it can enter 'game_loop'
  socket.on('connection_successful', function(){
    socket.join('update_room');//join the socket to update_room
    var mam = new matter_file.Matter();//mam is a new item of matter
    mam.cord.x = 100;
    mam.cord.y = 100;
    mam.size=20;
    matter_list.push(mam);
  });

  //when the socket disconnects
  socket.on('disconnect', function(data){
    console.log('Disconnected:  sockets connected',connections.length);
  });

});

//nugget is a small amount of info that is sent to the client to render
var nugget=function(){
  this.x=0;
  this.y=0;
  this.s=0;
}

/*
I am not sure but
*/

var matter_list=[];//list of all matter items
var update = function(){//
  var framesPerSecond=50;//set the framesPerSecond; 60 max!
  setInterval(function(){
    cord_out=[];//list to send; contains nuggets
    for (var i =0; i < matter_list.length;i++){//for each matter in matter_list
      matter_list[i].update();//update the matter
      //n is a nugget
      var n = {x:matter_list[i].cord.x,y:matter_list[i].cord.y,s:matter_list[i].size}
      cord_out.push(n);//add n to cord_out
    }
    io.to('update_room').emit('game_loop',cord_out);//emit update_room & send cord_out
  },1000/framesPerSecond);
}
update();
