import callApi from '../../util/apiCaller';
import axiosClient from '../../util/axiosClient';

// For cookie get and set
import { getStorage } from '../../helpers/cookie';

// for redirecting page
import { browserHistory } from 'react-router';

// getting endironment for API call
import { ENV } from '../../../config/LocalEnvironment';

// Export Constants
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEMS = 'ADD_ITEMS';
export const SET_ITEM = 'SET_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

// Export Actions
export function addItem(item) {
  return {
    type: ADD_ITEM,
    item,
  };
}

export function addItemRequest(item, type = 'application/json') {
  // return (dispatch) => {
  //   return callApi(
  //     `${ENV.apiVersion}items`, 
  //     'post', 
  //     {
  //       name: item.name,
  //       category_id: item.category_id, 
  //       rate: item.rate, 
  //       quantity: item.quantity, 
  //       per: item.per,
  //       image: item.image
  //     },
  //     type
  //   ).then(res => {
  //     dispatch(addItem(res));
  //     browserHistory.push('/inventory/item');
  //   });
  // };
  // let bodyParams = new FormData();
  // Object.entries(item).map(
  //   ([k, v], i) => bodyParams.append(k, v)
  // )
  
  return (dispatch) => {
    axiosClient
      ['post'](`${ENV.apiVersion}items`, 
      bodyParams, 
      {
        headers: {
          Authorization: `Bearer ${getStorage('token')}`
        }
      })
      .then(response => {
        dispatch(addItem(res));
        browserHistory.push('/inventory/item');
      })
      .catch(error => {
        
      });
  };
}

export function addItems(items) {
  console.log(items)
  return {
    type: ADD_ITEMS,
    items,
  };
}

export function fetchItems() {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}items`
    ).then(res => {
      dispatch(addItems(res));
    });
  };
}

export function fetchItem(id) {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}items/${id}`
    ).then(res => dispatch(addItem(res)));
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id,
  };
}

export function deleteItemRequest(id) {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}items/${id}`, 
      'delete'
    ).then(() => dispatch(deleteItem(id)));
  };
}

export function setItem(item) {
  return {
    type: SET_ITEM,
    item,
  };
}

export function modifyItemRequest(item, id) {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}items/${id}`, 
      'put', {
        name: item.name,
        category_id: item.category_id, 
        rate: item.rate, 
        quantity: item.quantity, 
        per: item.per
      }
    ).then((res) => {
      dispatch(setItem(res));
      browserHistory.push('/inventory/item');
    });
  };
}