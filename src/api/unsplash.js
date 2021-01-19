import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID r88xkpj3XyNiqxWFOvccV4w-9laeGbetUQfje7JqgZ0'
    }
});