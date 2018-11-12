// Import Actions
import { SUBMIT_LOGIN } from './AuthActions';

// Initial State
const initialState = {
  login: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      return {
        login: action.login,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get errorForm
export const getLogin = state => state.auth.login;

// Export Reducer
export default AuthReducer;
