import axios from 'axios';

const api = axios.create({
    baseUrl = 'exp://192.168.0.6:3333'
});

export default api;