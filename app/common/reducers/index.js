import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as popup } from 'components/Popup';

import declarations from 'redux/declarations';
import doctors from 'redux/doctor';
import persons from 'redux/person';
import msps from 'redux/msps';

import Table from 'containers/blocks/Table/redux';
import CreateDeclarationStep1 from 'containers/blocks/CreateDeclarationStep1/redux';
import SelectedPerson from 'containers/popups/SearchDeclaration/redux';

const blocks = combineReducers({
  Table,
  CreateDeclarationStep1,
  SelectedPerson,
});

export default combineReducers({
  form,
  routing,
  popup,
  declarations,
  doctors,
  persons,
  msps,

  // containers blocks
  blocks,
});


export const getPerson = (state, id) => state.persons[id];

export const getDoctor = (state, id) => state.doctors[id];

export const getDoctors = state =>
  state.doctors.map(i => getDoctor(state, i));

export const getDeclaration = (state, id) => {
  const declaration = state.declarations[id];
  if (!declaration) return null;
  return {
    ...state.declarations[id],
    patient: getPerson(state, declaration.patient_id),
    doctor: getDoctor(state, declaration.doctor_id),
    msp: getAllMSPS(state)[0], // TODO: replace with valid msp
  };
};

export const getDeclarations = (state, ids) =>
  ids.map(id => getDeclaration(state, id)).filter(i => i);


export const getMSP = (state, id) => state.msps[id];
export const getAllMSPS = state => Object.values(state.msps);
