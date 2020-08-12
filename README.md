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
for the project have the back end cover using this useful tool of socket help a lot to understand better how the back end and frond end work!

# Node.js
For the HTTP, I use in the app I do some documentation to understandeted better I got experency using node.js for simple React component in http for the ChatApp
https://nodejs.org/dist/latest-v14.x/docs/api/http.html

using documentation to understand better how it works the chat using JavaScript
String type
JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type

Setup:

run npm i && npm start for both client and server side to start the development server

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



