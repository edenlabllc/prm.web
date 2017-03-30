
import { handleAction, combineActions } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';

import { PRM_URL } from 'config';
import { invoke } from './api';

const doctorsSchema = new Schema('doctors');

export const fetchDoctors = () => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/doctors`,
  method: 'get',
  types: [
    'doctor/FETCH_DOCTORS_REQUEST', {
      type: 'doctor/FETCH_DOCTORS_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, arrayOf(doctorsSchema)),
      ),
    },
    'doctor/FETCH_DOCTORS_FAILURE',
  ],
}));

export const fetchDoctor = id => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/doctors/${id}`,
  method: 'get',
  bailout: state => state.doctors[id],
  types: [
    'doctor/FETCH_DOCTOR_REQUEST', {
      type: 'doctor/FETCH_DOCTOR_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, doctorsSchema),
      ),
    },
    'doctor/FETCH_DOCTOR_FAILURE',
  ],
}));


const doctors = handleAction(
  combineActions(
    'doctor/FETCH_DOCTOR_SUCCESS',
    'doctor/FETCH_DOCTORS_SUCCESS'
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.doctors,
  }),
  {}
);

export default doctors;
