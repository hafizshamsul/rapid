let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {
 
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.username, event: 'left'});   
  });
 
  socket.on('set-name', (name) => {
    socket.username = name;
    io.emit('users-changed', {user: name, event: 'joined'});    
  });
  

  var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();

  socket.on('send-message', (message) => {
    
    io.emit('message', {msg: message.text, user: socket.username, createdAt: d});    
  });
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, '0.0.0.0', function(){
   console.log('listening in http://localhost:' + port);
});