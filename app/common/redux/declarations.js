import { PRM_URL } from 'config';
import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { normalize, Schema, arrayOf } from 'normalizr';

import { invoke } from './api';

const declarationsSchema = new Schema('declarations');

export const fetchDeclarations = () => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/declarations`,
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
const declarations = handleAction('declarations/FETCH_DECLARATIONS_SUCCESS',
  (state, action) => ({
    ...state,
    ...action.payload.entities.declarations,
  }),
  []
);

export default combineReducers({
  declarations,
});
