import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/users'
});

export default instance;
