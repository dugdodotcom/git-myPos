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

export const API_URL = ENV.apiUrl;

export default function callApi(endpoint, method = 'get', body, type = 'application/json') {
  const authorization = getStorage('token');
  let bodyParams;
  if (type === 'multipart/form-data') {
    bodyParams = new FormData();
    Object.entries(body).map(
      ([k, v], i) => bodyParams.append(k, v)
    )
    console.log(bodyParams);
    for (var pair of bodyParams.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    // bodyParams.append('client_view', clientView);
    // bodyParams.append('comment_text', comment);
    // bodyParams.append('project_id', project_id);
    // bodyParams.append('currenttime', datetime);
    // bodyParams.append('commentasset', file);
  } else {
    bodyParams = JSON.stringify(body)
  }

  let fetchData = {
    headers: { 'content-type': type },
    method,
    body: bodyParams,
  }

  if (authorization) {
    fetchData.headers.Authorization = `Bearer ${authorization}`;
  }

  return fetch(`${API_URL}${endpoint}`, fetchData)
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    // only for login we need to get header information
    if (endpoint === 'login' && json.id) {
      json.authorization = response.headers.get('Authorization');
    }

    return json;
  })
  .then(
    response => response,
    error => error
  );

}
