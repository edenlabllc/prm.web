import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';

import { searchDeclation } from 'redux/declarations';
import { fetchDoctor } from 'redux/doctor';
import { fetchPerson } from 'redux/person';
import { fetchMSPS } from 'redux/msps';
import { show, hide } from 'components/Popup';
import { getFormValues } from 'redux-form';

const setDeclaration = createAction('person/SET_DECLARATION');

export const onSubmit = () => (dispatch, getState) => {
  const state = getState();
  const values = getFormValues('searchDeclarationList')(state);
  const selectedPatient = {
    patient_id: values.selectedPerson || null,
  };

  return dispatch(searchDeclation(selectedPatient)).then((resp) => {
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

const declaration = handleActions({
  [setDeclaration]: (state, action) => action.payload,
}, []);

export default combineReducers({
  declaration,
});
