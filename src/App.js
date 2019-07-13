import React from 'react';
import Home from './pages/home'
import Error from './pages/error.js'
import './App.css';
import SingleRoom from './pages/singleRoom';
import Rooms from './pages/rooms';
import {Route, Switch}  from 'react-router-dom';
import Nav from './components/Nav'

function App() {
  return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms/:slug" component={SingleRoom}/>
          <Route exact path="/rooms/" component={Rooms}/>
          <Route component={Error}  />  
        </Switch>
     </div>  
  );
}

export default App;
