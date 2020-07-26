# Introduction
we will create a full Realtime Chat Application. 
We're going to use React on the front end, with NodeJS + Socket.io web socket library on the back end.

# SOCKET.io

Instant messaging and chat

Socket.IO's "Hello world" is a chat app in just a few lines of code.
Use it to this play the chat in this app I will use it for get the name of the usar and the messages in the chat, it is a tool use it for One of the most powerful JavaScript frameworks on GitHub, and most depended-upon npm modules.


The API on the server-side is similar, you also get an socket object which extends the Node.js EventEmitter class:
# Example for understand how to use the Socket
const io = require('socket.io')(3000);

io.on('connect', socket => {
  // either with send()
  socket.send('Hello!');

  // or with emit() and custom event names
  socket.emit('greetings', 'Hey!', { 'ms': 'jane' }, Buffer.from([4, 3, 3, 1]));

  // handle the event sent with socket.send()
  socket.on('message', (data) => {
    console.log(data);
  });

  // handle the event sent with socket.emit()
  socket.on('salutations', (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
});

Information about this tool : https://socket.io/#examples

# React 
Continue growing in React developer I use this information to practice my skills in javaScript and learn also Back end and Front End.

Setup:

run npm i && npm start for both client and server side to start the development server

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



