import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Join from './components/Join/Join'
import Chat from './componets/Chat'

const App = () => (
   <Router>
       <Router path ="/" exact componet={Join}/>
       <Router path ="/ chat" componet={Chat}/>

   </Router>
);

export default App;
   


