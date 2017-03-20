import { handleAction } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
import { MPI_URL } from 'config';
import { combineReducers } from 'redux';

import { invoke } from './api';

const patientSchema = new Schema('patients');


export const fetchPatient = id => dispatch => dispatch(invoke({
  endpoint: `${MPI_URL}/persons/${id}`,
  method: 'get',
  types: [
    'patient/FETCH_PATIENT_REQUEST', {
      type: 'patient/FETCH_PATIENT_SUCCESS',
      payload: (action, state, res) => res.json().then((json) => {
        console.log(normalize(json.data, arrayOf(patientSchema)));
        return normalize(json.data, arrayOf(patientSchema));
      }),

    },
    'patient/FETCH_PATIENT_FAILER',
  ],
}));


export const searchPatient = body => dispatch => dispatch(invoke({
  endpoint: `${MPI_URL}/persons?${body}`,
  method: 'get',
  types: [
    'patient/SEARCH_PATIENT_REQUEST', {
      type: 'patient/SEARCH_PATIENT_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
          normalize(json.data, arrayOf(patientSchema))),
    },
    'patient/SEARCH_PATIENT_FAILER',
  ],
}));

const patients = handleAction('patient/FETCH_PATIENT_SUCCESS',
  (state, action) => ({
    ...state,
    ...action.payload.result,
  }),
  []
);

export default combineReducers({
  patients,
});
