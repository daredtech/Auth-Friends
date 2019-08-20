import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// components
import LoginForm from './components/LoginForm';


import './App.css';


function App() {
  return (
    <Router>
      
      <div className="App">

        <div className='navigation'>
          <Link to="/login">Login</Link>
        </div>

        <Route path="/login" component={LoginForm} />


    </div>

    </Router>

  );
}

export default App;
