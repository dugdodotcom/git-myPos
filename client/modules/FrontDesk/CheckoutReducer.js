import { ADD_PRODUCTS } from './CheckoutActions';
import { ADD_CATEGORIES } from '../Category/CategoryActions';

// Initial State
const initialState = { 
  data: [],
  transaction: [],
  categories: [],
};

const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PRODUCTS :
      console.log("add product");
      return {
        ...state, data: action.items,
      };

    case ADD_CATEGORIES:
      console.log("add category");
      return {
        ...state, categories: action.categories
      }

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getCategories = state => state.checkouts.categories;
export const getProductLists = state => state.checkouts.data;
export const getCheckoutLists = state => state.checkouts.transaction;

// Export Reducer
export default CheckoutReducer;
