import axios from 'axios';

const API_BASE_URL = 'http://your-backend-api-url'; // Replace with your backend API URL

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
