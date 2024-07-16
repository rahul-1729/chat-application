const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app);
const io = socketio(server)

io.on('connection',(socket)=>{
    // console.log(socket.id)
    
    socket.on('msg_send',(data)=>{
       io.emit('msg_rcvd',data);
  
    })
   
});

app.use('/',express.static(__dirname+'/public'));

server.listen(3010,()=>{
    console.log("Server started")
})