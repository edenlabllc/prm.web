import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as popup } from 'components/Popup';


export default combineReducers({
  form,
  routing,
  popup,
});

