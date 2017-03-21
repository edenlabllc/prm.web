import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as popup } from 'components/Popup';

import declarations from 'redux/declarations';
import doctors from 'redux/doctor';
import persons from 'redux/person';

import Table from 'containers/blocks/Table/redux';

const blocks = combineReducers({
  Table,
});

export default combineReducers({
  form,
  routing,
  popup,
  declarations,
  doctors,
  persons,

  // containers blocks
  blocks,
});


export const getPerson = (state, id) => state.persons[id];
export const getDoctor = (state, id) => state.doctors[id];

export const getDeclaration = (state, id) => {
  const declaration = state.declarations[id];
  if (!declaration) return null;
  return {
    ...state.declarations[id],
    patient: getPerson(state, declaration.patient_id),
    doctor: getDoctor(state, declaration.doctor_id),
  };
};

export const getDeclarations = (state, ids) =>
  ids.map(id => getDeclaration(state, id)).filter(i => i);
