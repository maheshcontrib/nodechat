require 'rubygems'
require 'websocket-client-simple'

ws = WebSocket::Client::Simple.connect 'http://localhost:3000'

ws.on :message do |msg|
  puts msg.data
  
  ws.on :open do
    ws.send 'hello!!!'
end
  end

ws.on :close do |e|
  p e
  exit 1
end

ws.on :error do |e|
  p e
end

loop do
  ws.send STDIN.gets.strip
end