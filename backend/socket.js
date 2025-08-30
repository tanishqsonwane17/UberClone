const { Server } = require("socket.io");
const captainModel = require('./models/captain.model');
const userModel = require('./models/user.model');

let io = null;

function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*", 
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log(" Socket connected:", socket.id);

    socket.on("join", async (data) => {
  try {
    const { userId, userType } = data;
    console.log("📥 Join event received:", data);

    if (!userId) {
      console.log("⚠️ userId missing");
      return;
    }

    if (userType === "captain") {
      const result = await captainModel.findOneAndUpdate(
        { _id: userId },
        { socketId: socket.id },
        { new: true }
      );
      console.log("✅ Captain updated:", result);
    } else if (userType === "user") {
      const result = await userModel.findOneAndUpdate(
        { _id: userId },
        { socketId: socket.id },
        { new: true }
      );
      console.log("✅ User updated:", result);
    }
  } catch (err) {
    console.error("❌ Error in join:", err.message);
  }
});


    socket.on("disconnect", () => {
      console.log(" Socket disconnected:", socket.id);
    });
  });
}

function sendMessageToSocket(socketId, message) {
  if (io) {
    io.to(socketId).emit('message', message);
  } else {
    console.log(" Socket is not initialized");
  }
}

module.exports = {
  initializeSocket,
  sendMessageToSocket
};
