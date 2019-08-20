import React, {useState} from 'react';

const AddNewFriendForm = () => {

    const [friendInfo, setFriendInfo] = useState({id: '', name: '', age: '', email: ''});

    const addFriend = event => {
        event.preventDefault();
        console.log('adding a new friend');
    }

    const handleChange = event => {
        setFriendInfo({...friendInfo, [event.target.name]: event.target.value}
            );
        console.log('target value: ', event.target.value);
    }

    return (
        <div className='friend-form'>
            <form onSubmit={addFriend}>

            <input
                type = 'number' name = 'id' placeholder = 'id' value = {friendInfo.id} onChange = {handleChange} 
            />
           <input
                type = 'text' name = 'name' placeholder = 'name' value = {friendInfo.name} onChange = {handleChange} 
            />
            <input
                type = 'number' name = 'age' placeholder = 'age' value = {friendInfo.age} onChange = {handleChange} 
            />
            <input
                type = 'email' name = 'email' placeholder = 'email' value = {friendInfo.email} onChange = {handleChange} 
            />
       
            <button>add friend</button>

            </form>
        </div>
    )
}

export default AddNewFriendForm;