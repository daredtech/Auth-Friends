import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// components
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';
import AddNewFriendForm from './components/AddNewFriendForm';
import FriendsList from './components/FriendsList';

// styling
import './App.css';


function App() {
  localStorage.clear();
  return (
    <Router>
      
      <div className='App'>

        <div className='navigation'>
          <Link to='/login'>Login</Link>
          <Link className='logged' to='/addnewfriend'>Add New Friend</Link> 
          <Link className='logged' to='/friendslist'>Friends list</Link>
        </div>

        <Route path='/login' component={LoginForm} />
        <PrivateRoute exact path='/addnewfriend'component={AddNewFriendForm} />
        <PrivateRoute exact path='/friendslist' component={FriendsList} />


    </div>

    </Router>

  );
}

export default App;
