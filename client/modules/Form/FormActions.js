// Export Constants
export const ERROR_FORM = 'ERROR_FORM';
export const TOGGLE_VIEW_FORM = 'TOGGLE_VIEW_FORM';

// Export Actions
export function errorForm(error) {
  return {
    type: ERROR_FORM,
    error,
  };
}

// Export Actions
export function toggleViewForm() {
  return {
    type: TOGGLE_VIEW_FORM,
  };
}
