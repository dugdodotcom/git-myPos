import callApi from '../../util/apiCaller';
import { errorForm } from '../Form/FormActions';

// Export Constants
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

// Export Actions
export function submitLogin(login) {
  return {
    type: SUBMIT_LOGIN,
    login,
  };
}

export function loginRequest(input) {
  return (dispatch) => {
    return callApi('login', 'post', {
      user: {
        email: input.email,
        password: input.password,
      },
    })
    .then(res => {
      // If error will send error to form
      if (res.error) {
        const error = {
          email: false,
          password: false,
        };
        if (res.error === 'Invalid Email or password.') {
          error.email = 'emailNotFound';
          error.password = 'passwordNotMatch';
        }
        dispatch(errorForm(error));
      } else {
        dispatch(submitLogin(res));
      }
    });
  };
}
