import { ADD_SETTING } from './SettingActions';

// Initial State
const initialState = { data: {} };

const SettingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SETTING :
      return {
        data: action.setting,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getSetting = state => state.settings.data;

// Export Reducer
export default SettingReducer;
