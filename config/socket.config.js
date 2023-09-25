import socketIoClient from "socket.io-client";

const createSocketConnection = (serverUrl) => {
  const socket = socketIoClient(serverUrl);

  socket.on("connect", () => {
    console.log("sy-core Socket connected to server.");
  });

  socket.on("disconnect", () => {
    console.log("sy-core Socket disconnected from server.");
  });

  socket.on("connect_error", (error) => {
    console.error("sy-core Socket.IO connection error:", error);
  });

  return socket;
};

export default createSocketConnection;
