import axios from 'axios';

const instance = axios.create(
    {
        baseURL : "http://api.jobzz24.com",
        withCredentials : true,
    }
);

export default instance
