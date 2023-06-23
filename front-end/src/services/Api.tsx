import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:8080',
    timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

  export default api;