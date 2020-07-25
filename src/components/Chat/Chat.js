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
   
 

 export default Chat
     
 