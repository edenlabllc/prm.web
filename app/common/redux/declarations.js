import { PRM_URL } from 'config';
import { handleAction, combineActions } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
import { createUrl } from 'helpers/url';

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

export const createDeclaration = body => dispatch => dispatch(invoke({
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

export const searchDeclation = options => dispatch => dispatch(invoke({
  endpoint: createUrl(`${PRM_URL}/declarations`, options),
  method: 'get',
  types: [
    'declarations/SEARCH_DECRATION_REQUEST', {
      type: 'declarations/SEARCH_DECLARATION_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, arrayOf(declarationsSchema))),
    },
    'declarations/SEARCH_DECLARATION_FAILER',
  ],
}));

const declarations = handleAction(
  combineActions(
    'declarations/FETCH_DECLARATIONS_SUCCESS',
    'declarations/CREATE_DECLARATIONS_SUCCESS',
    'declarations/SEARCH_DECLARATION_SUCCESS',
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.declarations,
  }),
  {}
);

export default declarations;
