
import { handleAction } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
import { combineReducers } from 'redux';

import { PRM_URL } from 'config';
import { invoke } from './api';

const doctorSchema = new Schema('doctor');

export const fetchDoctor = id => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/doctors/${id}`,
  method: 'get',
  types: [
    'doctor/FETCH_DOCTOR_REQUEST', {
      type: 'doctor/FETCH_DOCTOR_SUCCESS',
      payload: (action, state, res) => res.json().then((json) => {
        console.log(normalize(json.data, arrayOf(doctorSchema)));
        return normalize(json.data, arrayOf(doctorSchema));
      }),
    },
    'doctor/FETCH_DOCTOR_FAILER',
  ],
}));


const doctors = handleAction('doctor/FETCH_DOCTOR_SUCCESS',
  (state, action) => ({
    ...state,
    ...action.payload.entities,
  }),
  []
);

export default combineReducers({
  doctors,
});

