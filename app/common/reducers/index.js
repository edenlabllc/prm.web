import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as popup } from 'components/Popup';

import declarations from 'redux/declarations';
import doctor from 'redux/doctor';
import patient from 'redux/patient';

export default combineReducers({
  form,
  routing,
  popup,
  declarations,
  doctor,
  patient,
});


export const getDeclarations = state => state.declarations;

