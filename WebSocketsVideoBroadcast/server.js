// Socket.io server skeleton
const express = require("express");
const app = express();

//Client and broadcaster connecting to server
let broadcaster;

// Socket.io server skeleton
const port = 4000;
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
app.use(express.static(__dirname));
io.sockets.on("error", e => console.log(e));

//Connecting to server
io.sockets.on("connection", socket => {
  //Initialise Broadcaster connection
  socket.on("broadcaster", () => {
    broadcaster = socket.id;
    socket.broadcast.emit("broadcaster");
  });
  //Initialise Watcher connection
  socket.on("watcher", () => {
    socket.to(broadcaster).emit("watcher", socket.id);
  });

  //Initialise WebRTC connection
  socket.on("offer", (id, message) => {
    socket.to(id).emit("offer", socket.id, message);
  });
  
  socket.on("candidate", (id, message) => {
    socket.to(id).emit("candidate", socket.id, message);
  });

  socket.on("answer", (id, message) => {
    socket.to(id).emit("answer", socket.id, message);
  });

  

  //Disconecting from server
  socket.on("disconnect", () => {
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
});

// Socket.io server skeleton
server.listen(port, () => console.log(`Server is running on port ${port}`));