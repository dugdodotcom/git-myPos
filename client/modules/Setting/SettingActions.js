import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_SETTING = 'ADD_SETTING';

// Export Actions
export function addSetting(setting) {
  return {
    type: ADD_SETTING,
    setting,
  };
}

export function addSettingRequest(setting) {
  return (dispatch) => {
    return callApi(
      'settings', 
      'post', 
      {
        tax: setting.tax,
      }
    ).then(res => {
      dispatch(addSetting(res));
    });
  };
}

export function fetchSetting(id) {
  return (dispatch) => {
    return callApi(
      `settings`
    ).then(res => dispatch(addSetting(res)));
  };
}
