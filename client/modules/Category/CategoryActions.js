import callApi from '../../util/apiCaller';

// for redirecting page
import { browserHistory } from 'react-router';

// getting endironment for API call
import { ENV } from '../../../config/LocalEnvironment';

// Export Constants
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORIES = 'ADD_CATEGORIES';
export const SET_CATEGORY = 'SET_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';

// Export Actions
export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    category,
  };
}

export function addCategoryRequest(category) {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}categories`, 
      'post', 
      {
        name: category.name,
      }
    ).then(res => {
      dispatch(addCategory(res));
      browserHistory.push('/inventory/category');
    });
  };
}

export function addCategories(categories) {
  console.log(categories)
  return {
    type: ADD_CATEGORIES,
    categories,
  };
}

export function fetchCategories() {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}categories`
    ).then(res => {
      dispatch(addCategories(res));
    });
  };
}

export function fetchCategory(id) {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}categories/${id}`
    ).then(res => dispatch(addCategory(res)));
  };
}

export function deleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    id,
  };
}

export function deleteCategoryRequest(id) {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}categories/${id}`, 
      'delete'
    ).then(() => dispatch(deleteCategory(id)));
  };
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  };
}

export function modifyCategoryRequest(category, id) {
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}categories/${id}`, 
      'put', {
        name: category.name,
      }
    ).then((res) => {
      dispatch(setCategory(res));
      browserHistory.push('/inventory/category');
    });
  };
}