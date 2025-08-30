const { Server } = require("socket.io");
const captainModel = require('./models/captain.model');
const userModel = require('./models/user.model');

let io = null;

function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*", // production me specific domain dalna
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("✅ Socket connected:", socket.id);

    socket.on("join", async (data) => {
      try {
        const { userId, userType } = data;

        if (userType === 'captain') {
          await captainModel.findOneAndUpdate(
            { _id: userId },
            { socketId: socket.id }
          );
          console.log(`🚕 Captain ${userId} joined with socket ${socket.id}`);
        } 
        else if (userType === 'user') {
          await userModel.findOneAndUpdate(
            { _id: userId },
            { socketId: socket.id }
          );
          console.log(`🙋 User ${userId} joined with socket ${socket.id}`);
        }
      } catch (err) {
        console.error("❌ Error in join event:", err.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected:", socket.id);
    });
  });
}

function sendMessageToSocket(socketId, message) {
  if (io) {
    io.to(socketId).emit('message', message);
  } else {
    console.log("⚠️ Socket is not initialized");
  }
}

module.exports = {
  initializeSocket,
  sendMessageToSocket
};
