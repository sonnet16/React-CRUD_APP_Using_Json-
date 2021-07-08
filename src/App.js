import React from 'react'
import './App.css';
import Home from './Component/Home'
import About from './Component/About'
import NavBar from './Component/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import ViewUser from './Component/ViewUser';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/about' component ={ About } />
        <Route exact path='/add-user' component= { AddUser } />
        <Route exact path='/edit/:id' component={ EditUser } />
        <Route exact path='/view/:id' component={ ViewUser } />

      </Switch>
    
    </Router>
  );
}

export default App;
