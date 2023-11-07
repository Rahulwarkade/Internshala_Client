import axios from 'axios';

const instance = axios.create(
    {
        // baseURL : "https://www.api.jobzz24.com/",
        baseURL : "http://localhost:8080",
        withCredentials : true,
    }
);

export default instance
