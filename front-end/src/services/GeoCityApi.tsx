import axios from "axios";

const geoLocateCityapi = axios.create({
    baseURL: 'https://api.bigdatacloud.net/data/reverse-geocode-client',
    timeout: 50000,
  })
  

export default geoLocateCityapi

