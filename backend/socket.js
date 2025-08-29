const { Server } = require("socket.io");
const captainModel = require('./models/captain.model')
const userModel = require('./models/user.model')
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
    socket.on("join", async (data) => {
         const {userId,userType} = data
         if(userType === 'captain'){
            await captainModel.findOneAndUpdate({ socketId: socket.id }, { socketId: socket.id });
         }
         else if(userType === 'user'){
            await userModel.findOneAndUpdate({  userId }, { socketId: socket.id });
         }
    })
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