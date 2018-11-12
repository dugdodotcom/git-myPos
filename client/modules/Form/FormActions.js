// Export Constants
export const ERROR_FORM = 'ERROR_FORM';

// Export Actions
export function errorForm(error) {
  return {
    type: ERROR_FORM,
    error,
  };
}
