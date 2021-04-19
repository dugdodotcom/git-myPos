/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import auth from './modules/Auth/AuthReducer';
import errorForm from './modules/Form/FormReducer';
import intl from './modules/Intl/IntlReducer';
import categories from './modules/Category/CategoryReducer';
import items from './modules/Item/ItemReducer';
import settings from './modules/Setting/SettingReducer';
import checkouts from './modules/FrontDesk/CheckoutReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  auth,
  errorForm,
  intl,
  categories,
  items,
  settings,
  checkouts,
});
