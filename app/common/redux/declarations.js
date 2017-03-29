import { PRM_URL } from 'config';
import { handleAction, combineActions } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
import { createUrl } from 'helpers/url';

import { invoke } from './api';

const declarationsSchema = new Schema('declarations');

export const fetchDeclaration = id => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/declarations/${id}`,
  method: 'get',
  types: [
    'declarations/FETCH_DECLARATION_REQUEST', {
      type: 'declarations/FETCH_DECLARATION_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, declarationsSchema)),
    },
    'declarations/FETCH_DECLARATION_FAILER',
  ],
}));

export const fetchDeclarations = options => dispatch => dispatch(invoke({
  endpoint: createUrl(`${PRM_URL}/declarations`, options),
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
        normalize(json.data, declarationsSchema)),
    },
    'declarations/CREATE_DECLARATIONS_FAILER',
  ],
  body,
}));

export const signInDeclaration = id => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/declarations/${id}`,
  method: 'PUT',
  types: [
    'declarations/SIGN_IN_DECRATION_REQUEST', {
      type: 'declarations/SIGN_IN_DECLARATION_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, declarationsSchema)),
    },
    'declarations/SIGN_IN_DECLARATION_FAILER',
  ],
  body: {
    signature: 'string',
    signed_at: (new Date()).toJSON(),
  },
}));

export const closeDeclaration = id => dispatch => dispatch(invoke({
  endpoint: `${PRM_URL}/declarations/${id}`,
  method: 'PUT',
  types: [
    'declarations/CLOSE_DECRATION_REQUEST', {
      type: 'declarations/CLOSE_DECLARATION_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, declarationsSchema)),
    },
    'declarations/CLOSE_DECLARATION_FAILER',
  ],
  body: {
    declaration: {
      status: 'closed',
    },
  },
}));

const declarations = handleAction(
  combineActions(
    'declarations/FETCH_DECLARATION_SUCCESS',
    'declarations/FETCH_DECLARATIONS_SUCCESS',
    'declarations/CREATE_DECLARATIONS_SUCCESS',
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.declarations,
  }),
  {}
);

export default declarations;
