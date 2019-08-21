import React, {useState, useEffect} from 'react';

//
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const FriendsList = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
    const getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log('response getdata: ', response.data);
            setFriends(response.data);
        })
        .catch(error => {
            console.log('error: ', error);
        })
    }
    getData();
}, []);

    return (
        <div className='friends'>  <h3>You have the following friends: </h3>
        <div className='friends-list'>
            {friends.map(friend => <div className='friend' key={friend.id}> 
            <h5>{friend.name}, {friend.age}</h5>
            {friend.email}
            </div>)}
        </div>
        </div>
    )
}

export default FriendsList;