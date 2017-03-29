import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { push } from 'react-router-redux';

import { fetchDeclarations } from 'redux/declarations';
import { fetchPersons, fetchPerson } from 'redux/person';
import { fetchDoctor } from 'redux/doctor';
import { fetchMSPS } from 'redux/msps';

import { savePerson, saveDeclaration } from 'redux/flows/createDeclaration';

import { show, hide } from 'components/Popup';
import { objectToArrayWithType } from 'helpers/transforms';

const setDeclaration = createAction('CreateDeclarationStep1/SET_DECLARATION');
const setCurrentPerson = createAction('CreateDeclarationStep1/SET_CURRENT_PERSON');
const setCurrentPersonsList = createAction('CreateDeclarationStep1/SET_CURRENT_PERSONS_LIST');

export const onSubmit = values => (dispatch) => {
  const options = {
    ...values,
    birth_date: (new Date(values.birth_date)).toJSON(),
    phones: objectToArrayWithType(values.phones).map(i => ({
      ...i,
      number: i.number && `+38${i.number}`,
    })),
  };

  dispatch(setCurrentPerson(options));
  return dispatch(fetchPersons(options)).then((resp) => {
    if (resp.payload.status === 403) {
      return dispatch(show('specifySearchPopup'));
    } else if (resp.payload.result && resp.payload.result.length !== 0) {
      dispatch(setCurrentPersonsList(resp.payload.entities.persons));
      return dispatch(show('searchDeclarationPopup'));
    }
    return dispatch(show('emptySearchPopup'));
  });
};

export const onSelectDeclaration = person => (dispatch) => {
  const selectedPatient = {
    patient_id: person.id || null,
  };

  return dispatch(fetchDeclarations(selectedPatient)).then((resp) => {
    const declarations = resp.payload.entities.declarations;

    // TODO: remove, when API will fix fallback return
    const validDeclarations = Object.values(declarations).filter(
      declaration => declaration.patient_id === selectedPatient.patient_id
    );
    if (validDeclarations.length === 0) return dispatch(show('emptySearchPopup'));

    const declaration = validDeclarations[0];

    return Promise.all([
      dispatch(fetchDoctor(declaration.doctor_id)),
      dispatch(fetchPerson(declaration.patient_id)),
      dispatch(fetchMSPS()),
    ]).then(() => dispatch([
      setDeclaration(declaration.id),
      hide('searchDeclarationPopup'),
      hide('specifySearchPopup'),
      show('declarationExistPopup'),
    ]));
  });
};

export const createNewDeclaration = person => dispatch =>
  dispatch([
    savePerson(person),
    push('/declarationStep2'),
  ]);

export const updateExistingDeclaration = ({ person, declaration }) => dispatch =>
  dispatch([
    savePerson(person),
    saveDeclaration(declaration),
    push('/updateDeclarationStep2'),
  ]);

const declaration = handleActions({
  [setDeclaration]: (state, action) => action.payload,
}, []);

const currentPerson = handleActions({
  [setCurrentPerson]: (state, action) => action.payload,
}, null);

const currentPersonsList = handleActions({
  [setCurrentPersonsList]: (state, action) => action.payload,
}, []);

export default combineReducers({
  currentPerson,
  currentPersonsList,
  declaration,
});
