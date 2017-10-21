var express = require("express");
var socket = require("socket.io");

// App setup
var app = express();

var server = app.listen(3000, function() {
  console.log("App listening on port 3000!");
});

// Static files in folder public
app.use(express.static("public"));

// Socket setup
var io = socket(server);
io.on("connection", function(client) {
  console.log("Client connected...");

  client.on("chat", function(data) {
    io.sockets.emit("chat", data);
  });
});
