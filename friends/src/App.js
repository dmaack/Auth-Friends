import React from 'react';
import { Route, Link, } from 'react-router-dom';

import './App.css';

import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import PrivateRoute from './components/PrivateRoute';



function App(props) {
  return (
    <div className="App">
      <header>
        <div className='links'>
          <img  alt='app logo'/>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='profilePage'>Profile Page</Link>
            </li>
            <li>
              <Link to=''>Logout</Link>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/profilePage' component={ProfilePage} />
      </header>
      
    </div>
  )
}

export default App;
