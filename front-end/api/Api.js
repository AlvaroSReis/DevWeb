import axios from "axios";

const api = axios.create({
    baseURL: 'localhost:9000',
    timeout: 1000,
    //headers: {'X-Custom-Header': 'foobar'}
  });

  export default api;