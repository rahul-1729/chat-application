const mongoose = require('mongoose');

const chatSchema =new mongoose.Schema({
    cotent:{
        type: String,

    },
    user1:{
        type: String,
    },
    user2:{
          type: String,
    },
    roomId:{
        type: String
    }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = chat;