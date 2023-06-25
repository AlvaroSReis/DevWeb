import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: {'Keep-Alive': 'true'}
  });

  export default api;