import fetch from 'isomorphic-fetch';
// import Config from '../../server/config';

// Import environtment
import { ENV } from '../../config/LocalEnvirontment';

// For cookie get and set
import { getStorage } from '../helpers/cookie';

import { browserHistory } from 'react-router';

// export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
//   process.env.BASE_URL || (`${ENV.apiUrl}${ENV.apiVersion}`) :
//   '/api';

export const API_URL = `${ENV.apiUrl}${ENV.apiVersion}`;

export default function callApi(endpoint, method = 'get', body) {
  function redirectLogin() {
    browserHistory.push('/auth');
  }
  if (getStorage('authorization')) {
    return fetch(`${API_URL}/${endpoint}`, {
      headers: { 'content-type': 'application/json' },
      method,
      body: JSON.stringify(body),
    })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(
      response => response,
      error => error
    );
  }
  if (!getStorage('authorization')) {
    redirectLogin();
    return false;
  }
  return false;
}
