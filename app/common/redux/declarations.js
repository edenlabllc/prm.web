import { PRM_HOST } from 'config';
import { handleAction } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
import { invoke } from './api';
// import { combineReducers } from 'redux';

const declarationsSchema = new Schema('declarations');

export const fetchDeclarations = () => dispatch => dispatch(invoke({
  endpoint: `${PRM_HOST}/declarations`,
  method: 'get',
  types: [
    'declarations/FETCH_DECLARATIONS_REQUEST', {
      type: 'declarations/FETCH_DECLARATIONS_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, arrayOf(declarationsSchema))),
    },
    'declarations/FETCH_DECLARATIONS_FAILER',
  ],
}));

export default handleAction('declarations/FETCH_DECLARATIONS_SUCCESS',
  (state, action) => ({
    ...state,
    ...action.payload.declarations,
  }),
  []
);
