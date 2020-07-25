
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser,removeUser,getUser,getUsersInRoom} = require('./user');

const PORT = process.env.PORT || 5000;
const router = require('./router');
const { createSocket } = require('dgram');
//const { default: symbolicateStackTrace } = require('react-native/Libraries/Core/Devtools/symbolicateStackTrace');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket) => {
    
    console.log('we have a new connection!!!')

    socket.on('join',({name,room},callback)=> {

        const {error,user} = addUser({id:socket.id,name,room});
        if(error) return callback(error)
        //having in the frond end because is emiting the massage
        socket.emit('message',{user:'admin',text:`${user.name},Welcome to the room ${user.room}`})
        createSocket.broadcas.to(user.room).emit('messager',{user: 'admin',text: `${user.name},has joing`})
        socket.join(user.room);
        callback();
    });
    socket.on('sendMessager',(message,callback)=> {
        const user = getUser(socket.id);
        io.to(user.room).emit('message',{user: user.name, text: message})
        callback();
    })
    socket.on('disconnect',() => {
        console.log('user has gone out of the chat!!!');
    });


});

// to call the router 
app.use(router);

server.listen(PORT,()=> console.log(`service has started on port ${PORT}`));


