import { ADD_PRODUCTS } from './CheckoutActions';

// Initial State
const initialState = { 
  data: [], 
  transaction: []
};

const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PRODUCTS :
      return {
        data: action.checkouts,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getProductLists = state => state.checkouts.data;
export const getCheckoutLists = state => state.checkouts.transaction;

// Export Reducer
export default CheckoutReducer;
