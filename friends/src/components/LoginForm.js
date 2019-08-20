import React, {useState} from 'react';

const LoginForm = () => {

    const [credentials, setCredentials] = useState({username: '', password: ''});

    const login = event => {
        console.log('login event');
    }

    const handleChange = event => {
        console.log('handlechange event');
        setCredentials({[event.target.name]: event.target.value}
            );
        console.log('target value: ', event.target.value);
    }

    return (
        <form onSubmit={login}>

            <input
                type = 'text' name = 'username' placeholder = 'username' value = {credentials['username']} onChange = {handleChange} 
            />
            <input
                type = 'password' name = 'password' placeholder = 'password' value = {credentials['password']} onChange = {handleChange} 
            />

        
            <button> log in </button>
        </form>
    )
}

export default LoginForm;