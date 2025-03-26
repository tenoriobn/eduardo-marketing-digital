import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
});
