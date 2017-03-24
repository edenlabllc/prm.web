
import { handleAction, combineActions } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';

import { PRM_URL } from 'config';
import { invoke } from './api';

const mspsSchema = new Schema('msps');

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
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.msps,
  }),
  {}
);

export default msps;
