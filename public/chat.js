// Make a connection
var socket = io.connect("http://localhost:3000");

// Query DOM
var display = document.getElementById("id_display");
var msg = document.getElementById("id_msg");
var send = document.getElementById("id_send");
var handle = document.getElementById("id_handle");

msg.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode == 13) {
    send.click();
  }
});

// Emit event
send.addEventListener("click", function() {
  socket.emit("chat", {
    msg: msg.value,
    handle: handle.value
  });

  socket.on("chat", function(data) {
    // display.innerHTML +=
    //   "<p> <strong>" + data.handle + ":<strong> " + data.msg + "</p>";
    display.value += data.handle + ": " + data.msg + "\n";
    msg.value = "";
    msg.focus();
  });
});
