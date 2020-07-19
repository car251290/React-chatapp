import React ,{usestate}from 'react';
import {Link} from 'react-router-dom';

import './Join.css';



 const Join =() => {
     const [name,setName]=usestate('');
     const [room,setRoom]=usestate('');

    return(
        <div className = 'joinOuterContainer'>
            <div className = 'joinIneerContainer'>
                <hi className = 'header'> Join
                </hi>
                <div><input placeholder="" className="joinInput" type='text' onChange={(event)=> setName(event.target.value)}/></div>
                <div><input placeholder="" className="joinInput" type='text' onChange={(event)=> setRoom(event.target.value)}/></div>
                <Link onClink = {event => (!name ||!room)? event.preventDefault() : null} to={`/chat?name= ${name} & room=${room}`}>
                <button className="button mt-20" type="submit">Sing In</button>

                </Link>
            </div>
        </div>
    )
 }
   
 

 export default Join