
import { handleAction, combineActions } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';

import { PRM_URL } from 'config';
import { invoke } from './api';

const mspsSchema = new Schema('msps');

export const fetchMSP = id => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/msps/${id}`,
  method: 'get',
  bailout: state => state.msps[id],
  types: [
    'MSPS/FETCH_MSP_REQUEST', {
      type: 'MSPS/FETCH_MSP_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, mspsSchema),
      ),
    },
    'MSPS/FETCH_MSP_FAILER',
  ],
}));

export const fetchMSPS = () => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/msps`,
  method: 'get',
  types: [
    'MSPS/FETCH_MSPS_REQUEST', {
      type: 'MSPS/FETCH_MSPS_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, arrayOf(mspsSchema)),
      ),
    },
    'MSPS/FETCH_MSPS_FAILER',
  ],
}));


const msps = handleAction(
  combineActions(
    'MSPS/FETCH_MSPS_SUCCESS',
    'MSPS/FETCH_MSP_SUCCESS'
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.msps,
  }),
  {}
);

export default msps;
