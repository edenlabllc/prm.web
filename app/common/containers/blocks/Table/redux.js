import { handleActions, createAction } from 'redux-actions';
import { combineReducers } from 'redux';

import { fetchDeclarations } from 'redux/declarations';
import { fetchDoctors, fetchDoctor } from 'redux/doctor';
import { fetchMSPS, fetchMSP } from 'redux/msps';
import { fetchPerson } from 'redux/person';

const setDeclarations = createAction('table/SET_DECLARATIONS');

export const getDeclarationList = () => dispatch =>
  Promise.all([
    dispatch(fetchDeclarations()),
    dispatch(fetchDoctors()),
    dispatch(fetchMSPS()),
  ]).then(([resp]) => {
    const declarations = resp.payload.result;
    const declarationsEntities = resp.payload.entities.declarations;
    dispatch(setDeclarations(declarations));
    if (resp.error) return null;

    const ids = Object.values(declarationsEntities).reduce((acc, item) => ({
      doctors: acc.doctors.add(item.doctor_id),
      persons: acc.persons.add(item.patient_id),
      msps: acc.msps.add(item.msp_id),
    }),
      { doctors: new Set(), persons: new Set(), msps: new Set() }
    );

    return Promise.all([
      Promise.all([...ids.doctors].map(id => dispatch(fetchDoctor(id)))),
      Promise.all([...ids.msps].map(id => dispatch(fetchMSP(id)))),
      Promise.all([...ids.persons].map(id => dispatch(fetchPerson(id)))),
    ]);
  });

const declarations = handleActions({
  [setDeclarations]: (state, action) => action.payload,
}, []);

export default combineReducers({
  declarations,
});
