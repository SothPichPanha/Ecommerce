import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8100/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  register(form) {
    return api.post('/register', form);
  },
  login(form) {
    return api.post('/login', form);
  }
};