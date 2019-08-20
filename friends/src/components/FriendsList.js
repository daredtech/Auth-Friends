import React from 'react';

//
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const FriendsList = () => {

    const getData = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(response => {
            console.log('response getdata: ', response);

        })
        .catch(error => {
            console.log('error: ', error);
        })
    }

    getData();

    return (
        <div className='friends-list'>
FriendsList
        </div>
    )
}

export default FriendsList;