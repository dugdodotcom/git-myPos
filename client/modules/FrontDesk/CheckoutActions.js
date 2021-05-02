import callApi from '../../util/apiCaller';
// getting endironment for API call
import { ENV } from '../../../config/LocalEnvironment';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const DELETE_POST = 'DELETE_POST';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}

export function addProducts(items) {
  return {
    type: ADD_PRODUCTS,
    items,
  };
}

export function fetchProducts(category) {
  console.log("test");
  return (dispatch) => {
    return callApi(
      `${ENV.apiVersion}items/by-category/${category}`
    ).then(res => {
      dispatch(addProducts(res));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}
