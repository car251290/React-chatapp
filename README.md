# Introduction
we will create a full Realtime Chat Application. 
We're going to use React on the front end, with NodeJS + Socket.io web socket library on the back end.

# SOCKET.io

Instant messaging and chat

Socket.IO's "Hello world" is a chat app in just a few lines of code.
Use it to this play the chat in this app I will use it for get the name of the usar and the messages in the chat, it is a tool use it for One of the most powerful JavaScript frameworks on GitHub, and most depended-upon npm modules.

## HTTP 
Serving HTML
So far in index.js we’re calling res.send and passing it a string of HTML. Our code would look very confusing if we just placed our entire application’s HTML there, so instead we’re going to create a index.html file and serve that instead.

## Integrating Socket.IO

Socket.IO is composed of two parts:

A server that integrates with (or mounts on) the Node.JS HTTP Server socket.io
A client library that loads on the browser side socket.io-client
During development, socket.io serves the client automatically for us, as we’ll see, so for now we only have to install one module:

npm install socket.io

That’s all it takes to load the socket.io-client, which exposes an io global (and the endpoint GET /socket.io/socket.io.js), and then connect.

If you would like to use the local version of the client-side JS file, you can find it at node_modules/socket.io-client/dist/socket.io.js.

Notice that I’m not specifying any URL when I call io(), since it defaults to trying to connect to the host that serves the page.


Let’s refactor our route handler to use sendFile instead.

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


##Index.js for socket.oi ()
The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

<script src="/socket.io/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script>
  $(function () {
    var socket = io();
    $('form').submit(function(e) {
      e.preventDefault(); // prevents page reloading
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
    });
  });
</script>

#Guide for making the chat and send the image.

https://socket.io/get-started/chat

# React 
Continue growing in React developer I use this information to practice my skills in javaScript and learn also Back end and Front End.
for the project have the back end cover using this useful tool of socket help a lot to understand better how the back end and frond end work!

# Hooks 
To answer when to use useCallBack, useMemo, and useEffect, we should know what exactly they do and how they are different.
1.	useCallback: The useCallback is a react hook that returns a memoized callback when passed a function and a list of dependencies as parameters. It’s very useful when a component is passing a callback to its child component to prevent the rendering of the child component. It only changes the callback when one of its dependencies gets changed.
2.	useMemo: The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but it returns the memoized value returned by the passed function. It recalculated the value only when one of its dependencies change. It is useful to avoid expensive calculations on every render when the returned value is not going to change.
3.	useEffect: A hook that helps us to perform mutations, subscriptions, timers, logging, and other side effects after all the components has been rendered. The useEffect accepts a function that is imperative in nature and a list of dependencies. When its dependencies change it executes the passed function.

# Node.js
For the HTTP, I use in the app I do some documentation to understandeted better I got experency using node.js for simple React component in http for the ChatApp
https://nodejs.org/dist/latest-v14.x/docs/api/http.html

using documentation to understand better how it works the chat using JavaScript
String type
JavaScript's String type is used to represent textual data. It is a set of "elements" of 16-bit unsigned integer values. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it.
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type

## Emoji in React!
Features

It's tiny (on purpose).
Simple functional API with minimal surface area and full customization hooks.
Lean implementation that follows the React way™ all the way down (no DOM manipulation).
Renders emoji from Twitter's Twemoji cdn out of the box.
Currently in use on high-traffic production pages.
What it doesn't do

We've consciously left out some extra features in order to keep this library as minimal as possible:

Doesn't parse emoji names like :smile:.
Doesn't parse emoticons like :).
Doesn't provide built-in support for emoji assets other than Twemoji, but provides hooks to use custom sets.
Installation

npm install --save react-easy-emoji

Setup:

run npm i && npm start for both client and server side to start the development server

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



