import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';

import { fetchDeclarations } from 'redux/declarations';
import { fetchPerson } from 'redux/person';
import { fetchDoctor, fetchDoctors } from 'redux/doctor';

const setDeclarations = createAction('table/SET_DECLARATIONS');
const setDoctors = createAction('table/SET_DOCTORS');

export const getDeclarationList = () => dispatch =>
  dispatch(fetchDeclarations()).then((resp) => {
    const declarations = resp.payload.result;
    dispatch(setDeclarations(declarations));

    dispatch(fetchDoctors()).then(doctors =>
      dispatch(setDoctors(doctors))
    );

    if (resp.error) return null;

    // collect patient ids and doctor ids to the sets (unique list of ids)
    // and only when fetch daat from the server

    return Object.values(resp.payload.entities.declarations).map(declaration =>
      dispatch(Promise.all([
        fetchPerson(declaration.patient_id),
        fetchDoctor(declaration.doctor_id),
      ])));
  });

const declarations = handleActions({
  [setDeclarations]: (state, action) => action.payload,
}, []);

const doctors = handleActions({
  [setDoctors]: (state, action) => action.payload,
}, []);

export default combineReducers({
  declarations,
  doctors,
});
