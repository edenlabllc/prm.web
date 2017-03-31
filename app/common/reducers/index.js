import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as popup } from 'components/Popup';

import declarations from 'redux/declarations';
import doctors from 'redux/doctor';
import persons from 'redux/person';
import msps from 'redux/msps';
import reports from 'redux/reports';
import lookup from 'redux/sms';

import { arrayWithTypeToObject } from 'helpers/transforms';

import DeclarationSearch from 'containers/pages/DeclarationSearch/redux';
import DeclarationEdit from 'containers/pages/DeclarationEdit/redux';
import DeclarationCreate from 'containers/pages/DeclarationCreate/redux';

import Table from 'containers/blocks/Table/redux';

import createDeclaration from 'redux/flows/createDeclaration';

const flows = combineReducers({
  createDeclaration,
});

const pages = combineReducers({
  DeclarationSearch,
  DeclarationEdit,
  DeclarationCreate,
});

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
  msps,
  reports,
  lookup,

  pages,
  blocks,
  flows,
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


const transformPatientToForm = patient => ({
  ...patient,
  documents: arrayWithTypeToObject(patient.documents),
  addresses: arrayWithTypeToObject(patient.addresses),
  phones: arrayWithTypeToObject(patient.phones),
  confident_persons: (patient.confident_persons || []).map(i => transformPatientToForm(i)),
});

export const getDeclarationFormValues = (state, id) => {
  const declaration = getDeclaration(state, id);
  if (!declaration) return null;

  return {
    ...transformPatientToForm(declaration.patient),
    isRegistrationAddressEqualsResidence: declaration.patient.addresses.length === 1,
    doctor: declaration.doctor.id,
  };
};

export const getDeclarations = (state, ids) =>
  ids.map(id => getDeclaration(state, id)).filter(i => i);

export const getMSP = (state, id) => state.msps[id];
export const getAllMSPS = state => Object.values(state.msps);

export const getReports = state => state.reports;
