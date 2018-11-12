// Import Actions
import { ERROR_FORM } from './FormActions';

// Initial State
const initialState = {
  data: false,
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_FORM:
      return {
        data: action.error,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get errorForm
export const getErrorForm = state => state.errorForm.data;

// Export Reducer
export default FormReducer;
