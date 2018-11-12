import fetch from 'isomorphic-fetch';
// import Config from '../../server/config';

// Import environtment
import { ENV } from '../../config/LocalEnvironment';

// For cookie get and set
import { getStorage, setStorage } from '../helpers/cookie';

import { browserHistory } from 'react-router';

// export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
//   process.env.BASE_URL || (`${ENV.apiUrl}${ENV.apiVersion}`) :
//   '/api';

export const API_URL = `${ENV.apiUrl}${ENV.apiVersion}`;

export default function callApi(endpoint, method = 'get', body) {
  function redirectLogin() {
    browserHistory.push('/auth/register');
  }
  let returnApi = false;

  function fetchApi(url) {
    return fetch(url, {
      headers: { 'content-type': 'application/json' },
      method,
      body: JSON.stringify(body),
    })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      // only for login we need to get header information
      if (endpoint === 'login' && json.id) {
        setStorage('authorization', response.headers.get('Authorization'));
        browserHistory.push('/');
      }

      return json;
    })
    .then(
      response => response,
      error => error
    );
  }

  if (getStorage('authorization')) {
    returnApi = fetchApi(`${API_URL}/${endpoint}`);
  }
  if (!getStorage('authorization')) {
    if (endpoint === 'login') {
      returnApi = fetchApi(`${ENV.apiUrl}/${endpoint}`);
    } else {
      redirectLogin();
      returnApi = false;
    }
  }
  return returnApi;
}
