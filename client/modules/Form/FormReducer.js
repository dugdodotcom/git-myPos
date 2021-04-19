// Import Actions
import { ERROR_FORM, TOGGLE_VIEW_FORM } from './FormActions';

// Initial State
const initialState = {
  data: undefined,
  showForm: false,
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_FORM:
      return {
        data: action.error,
      };

    case TOGGLE_VIEW_FORM:
      return {
        showForm: !state.showForm,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get errorForm
export const getErrorForm = state => state.errorForm.data;

// Get toggle viewForm
export const getViewForm = state => state.errorForm.showForm;

// Export Reducer
export default FormReducer;
