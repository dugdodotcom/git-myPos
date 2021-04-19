var axios = require('axios');

// Import environtment
import { ENV } from '../../config/LocalEnvironment';

// For cookie get and set
import { getStorage, setStorage } from '../helpers/cookie';

axios.defaults.headers.common['Authorization'] = `Bearer ${getStorage('token')}` 

var axiosClient = axios.create({
  baseURL: ENV.apiUrl
});

export default axiosClient;