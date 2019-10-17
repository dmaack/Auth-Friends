import React from 'react';
import { Route, Link, withRouter} from 'react-router-dom';

import './App.scss';

import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import PrivateRoute from './components/PrivateRoute';

import image from '../src/images/Friendlogo.png';




function App(props) {
  console.log('App props', props)

  const routeHome = () => {
    props.history.push('/')
  }


  return (
    <div className="App">
      <header>
        <div className='links'>
          <img  src ={image} alt='app logo' onClick={routeHome} />
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

export default withRouter(App);
