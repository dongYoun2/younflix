import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US'
  }
});

export default instance;