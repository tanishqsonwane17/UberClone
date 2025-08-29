const { Server } = require("socket.io");
let io = null;
function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
}

function sendMessageToSocket(socketId, message) {
  if (io) {
    io.to(socketId).emit('message', message);
  } else{
    console.log("Socket is not initialized");
  }
}

module.exports = {
  initializeSocket,
  sendMessageToSocket
};