
const express = require('express');
const socketio = require('socket.io');
const http = require('http');

<<<<<<< HEAD
const {addUser,removeUser,getUser,getUsersInRoom} = require('./users');
=======
const {addUser,removeUser,getUser,getUsersInRoom} = require('./user');
>>>>>>> 6f215ef58b345be085872d431e573976d63847d0

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
<<<<<<< HEAD
        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})

        
        callback();

=======
        callback();
>>>>>>> 6f215ef58b345be085872d431e573976d63847d0
    });
    socket.on('sendMessager',(message,callback)=> {
        const user = getUser(socket.id);
        io.to(user.room).emit('message',{user: user.name, text: message})
<<<<<<< HEAD
        io.to(user.room).emit('roomData',{room: user.room, text: message})
        
=======
>>>>>>> 6f215ef58b345be085872d431e573976d63847d0
        callback();
    })
    socket.on('disconnect',() => {
       const user = removeUser(socket.id);

       if(user){
           io.to(user.room).emit('message',{user:'admin',text:`${user.name}has left.`})
       }
    });


});

// to call the router 
app.use(router);

server.listen(PORT,()=> console.log(`service has started on port ${PORT}`));


