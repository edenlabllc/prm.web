import { handleAction, combineActions } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
import { MPI_URL } from 'config';
import { createUrl } from 'helpers/url';

import { invoke } from './api';

const personsSchema = new Schema('persons');


export const fetchPerson = id => dispatch => dispatch(invoke({
  endpoint: `${MPI_URL}/persons/${id}`,
  method: 'get',
  types: [
    'person/FETCH_PERSON_REQUEST', {
      type: 'person/FETCH_PERSON_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, personsSchema)),
    },
    'person/FETCH_PERSON_FAILER',
  ],
}));


export const searchPersons = options => dispatch => dispatch(invoke({
  endpoint: createUrl(`${MPI_URL}/persons`, options),
  method: 'get',
  types: [
    'person/SEARCH_PERSON_REQUEST', {
      type: 'person/SEARCH_PERSON_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, arrayOf(personsSchema))),
    },
    'person/SEARCH_PERSON_FAILER',
  ],
}));

export const createPerson = body => dispatch => dispatch(invoke({
  endpoint: createUrl(`${MPI_URL}/persons`),
  method: 'post',
  types: [
    'person/CREATE_PERSON_REQUEST', {
      type: 'person/CREATE_PERSON_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, personsSchema)),
    },
    'person/CREATE_PERSON_FAILER',
  ],
  body,
}));


const persons = handleAction(
  combineActions(
    'person/FETCH_PERSON_SUCCESS',
    'person/SEARCH_PERSON_SUCCESS',
  ),
  (state, action) => ({
    ...state,
    ...action.payload.entities.persons,
  }),
  []
);

export default persons;
