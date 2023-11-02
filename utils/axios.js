import axios from 'axios';

const instance = axios.create(
    {
        baseURL : "https://api.jobzz24.com",
        withCredentials : true,
    }
);

export default instance
