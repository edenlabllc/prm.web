import { PRM_URL } from 'config';
import { handleAction, combineActions } from 'redux-actions';
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


export const createDeclaration = body => (dispatch) => {
  console.log(body);
  return dispatch(invoke({
    endpoint: `${PRM_URL}/declarations`,
    method: 'post',
    types: [
      'declarations/CREATE_DECLARATIONS_REQUEST', {
        type: 'declarations/CREATE_DECLARATIONS_SUCCESS',
        payload: (action, state, res) => res.json().then(json =>
          normalize(json.data, arrayOf(declarationsSchema))),
      },
      'declarations/CREATE_DECLARATIONS_FAILER',
    ],
    body,
  }));
};

const declarations = handleAction(
  combineActions(
    'declarations/FETCH_DECLARATIONS_SUCCESS',
    'declarations/CREATE_DECLARATIONS_SUCCESS'
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.declarations,
  }),
  []
);

export default declarations;
