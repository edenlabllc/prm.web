import { PRM_HOST } from 'config';
import { handleAction } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
// import { combineReducers } from 'redux';

import { invoke } from './api';

const doctorSchema = new Schema('doctor');

export const fetchDoctor = id => dispatch => dispatch(invoke({
  endpoint: `${PRM_HOST}/doctor/${id}`,
  method: 'get',
  types: [
    'doctor/FETCH_DOCTOR_REQUEST', {
      type: 'doctor/FETCH_DOCTOR_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, arrayOf(doctorSchema))),
    },
    'doctor/FETCH_DOCTOR_FAILER',
  ],
}));

export default handleAction('doctors/FETCH_DOCTOR_SUCCESS',
  (state, action) => ({
    ...state,
    ...action.payload.doctor,
  }),
  []
);
