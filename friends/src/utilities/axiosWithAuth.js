import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    console.log('token received: ', token);

    return axios.create(
        {
            headers: {
                Authorization: token
            }
        }
    )

}

export default axiosWithAuth;