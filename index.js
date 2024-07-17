const express = require('express')
const http = require('http')
const socketio = require('socket.io')
 
const connect = require('./config/database-config');

const app = express()
const server = http.createServer(app);
const io = socketio(server)

io.on('connection',(socket)=>{
    socket.on('join_room',(data)=>{
        socket.join(data.roomid);
    })

    socket.on('msg_send',(data)=>{
       
      io.to(data.roomid).emit('msg_rcvd',data);
      

    })
     
   
});

app.set('view engine','ejs');

app.use('/',express.static(__dirname+'/public'));

app.get('/chat/:roomid',(req,res)=>{
     res.render('index',{
        name:"Rahul",
        id:req.params.roomid
     })
})


server.listen(3010,async()=>{
    console.log("Server started");
    await connect();
    console.log("mongo db connected")
})