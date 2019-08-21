import React, {useState} from 'react';
import axios from 'axios';

const LoginForm = (props) => {

    const [credentials, setCredentials] = useState({username: '', password: ''});
   
    const login = event => {
        // console.log('login event');
        event.preventDefault();
        console.log('posting the following credentials: ', {credentials});
        // 
        axios
        .post('http://localhost:5000/api/login', credentials)
        .then(response => {
            console.log('response value: ', response);
            localStorage.setItem('token', response.data.payload);
            console.log('props line 22: ', props);

            // to redirect to list of friends
            props.history.push('/friendslist');
        })
        .catch(error => {
            console.log('error: ', error);
        }
        )
      
      
    }

    const handleChange = event => {
        // console.log('handlechange event');
        setCredentials({...credentials, [event.target.name]: event.target.value}
            );
        console.log('target value: ', event.target.value);
    }

    return (
        <form onSubmit={login}>
            <h3>
                Login
            </h3>

            <input
                type = 'text' name = 'username' placeholder = 'username' value = {credentials.username} onChange = {handleChange} 
            />
            <input
                type = 'password' name = 'password' placeholder = 'password' value = {credentials.password} onChange = {handleChange} 
            />

        
            <button> log in </button>
        </form>
    )
}

export default LoginForm;