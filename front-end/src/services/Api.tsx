import axios from "axios";
/*
const api = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    //headers: {'Keep-Alive': 'true'}
  });
  */
  const api = axios.create({
    baseURL: 'https://devweb-5sm9.onrender.com/',
    timeout: 20000,
    //headers: {'Keep-Alive': 'true'}
  });
  

  export default api;