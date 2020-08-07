<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
=======
import React,{useEffect,useState}from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import './Chat.css'

let socket;

 const Chat =({location}) => {
    const [name,setName]= useState('');
    const [room,setRoom]= useState('');
    const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


    const ENDPOINT = 'localhost:5000';
     useEffect (()=>{
         const {name,room }= queryString.parse(location.search);
         socket= io(ENDPOINT)
         setName(name);
         setRoom(room);
         //to emit event for the soccket to pass an string to chat
         socket.emit('join',{name,room},()=> {
            
         })
         return () => {
             socket.emit('disconnect')
             socket.off();
         }
         

     },[ENDPOINT,location.search])
     //adding new messager to the array
     useEffect (() => {
         socket.on('message',() => {
             setMessages([...messages,message])

         })
     },[messages]);

     // function for sending messages


    return(
       <div className='outerContainer'>
           <div className='container'>
               
               <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

           </div>
       </div>
    )
 }
   
 
>>>>>>> 6f215ef58b345be085872d431e573976d63847d0

import './Chat.css';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://project-chat-application.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;
     
 